<?php
namespace App\Http\Controllers;
use App\Mail\TicketMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Models\Ticket;
use Razorpay\Api\Api;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;

class RazorpayController extends Controller
{
    public function generateUniqueTicketCode() {
        do {
            $ticketCode = 'TICKET-' . Str::upper(Str::random(10));
        } while (Ticket::where('ticket_code', $ticketCode)->exists());
    
        return $ticketCode;
    }
    public function createOrder(Request $request)
    {
        try {
            // Initialize the Razorpay API with your keys
            $api = new Api('rzp_test_2BFPuAnuz8ZT1a', 'jckc5pJUsEbi2uULD3qcyYM5');
    
            $eventId = $request->input('event_id');
            $eventDate = $request->input('event_date');

            $event = Event::find($eventId);
            $user = Auth::user();
    
            // Check if the user already has a ticket for the event
            $existingTicket = Ticket::where('event_id', $eventId)
                                    ->where('user_id', $user->id)
                                    ->where('event_date',$eventDate)
                                    ->first();
    
            if ($existingTicket) {
                return response()->json([
                    'message' => 'You already have a ticket for this event.'
                ], 400);
            }
    
            // Create a new order in Razorpay
            $order = $api->order->create([
                'receipt' => uniqid(),
                'amount' => $event->price * 100, // Razorpay expects the amount in paise
                'currency' => 'INR',
                'payment_capture' => 1 // Auto-capture payment
            ]);
    
            return response()->json([
                'order_id' => $order->id,
                'amount' => $order->amount,
                'currency' => $order->currency,
            ], 200);
    
        } catch (\Exception $e) {
            // Handle exceptions and return a JSON response
            return response()->json([
                'message' => 'An error occurred.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function verifyPayment(Request $request)
{
    $api = new Api('rzp_test_2BFPuAnuz8ZT1a', 'jckc5pJUsEbi2uULD3qcyYM5');

    $order_id = $request->input('razorpay_order_id');
    $payment_id = $request->input('razorpay_payment_id');
    $signature = $request->input('razorpay_signature');

    try {
        // Verify the payment signature
        $api->utility->verifyPaymentSignature([
            'razorpay_order_id' => $order_id,
            'razorpay_payment_id' => $payment_id,
            'razorpay_signature' => $signature
        ]);

        // Payment is valid, create the ticket or perform other actions
        $eventId = $request->input('event_id');
        $eventDate = $request->input('event_date');
        $formattedEventDate = Carbon::parse($eventDate)->format('Y-m-d H:i:s');
            $user = Auth::user();
            $event = Event::findOrFail($eventId);

            // Call the purchase method of TicketController
            $ticketCode = $this->generateUniqueTicketCode();
            
            $ticket = Ticket::create([
                'user_id' => $user->id,
                'event_id' => $eventId,
                'event_date'=>$formattedEventDate,
                'ticket_code' => $ticketCode 
            ]);
            Mail::to($user->email)->send(new TicketMail($event, $ticket));
            return response()->json(['message' => 'Ticket sent to your email!'],200);
     
    } catch (\Exception $e) {
        // Handle payment verification failure
        return response()->json([
            'message' => 'Payment verification failed!',
            'error' => $e->getMessage()
        ], 400);
    }
}
}
