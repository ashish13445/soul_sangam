<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Razorpay\Api\Api;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;

class RazorpayController extends Controller
{
    public function createOrder(Request $request)
    {
        $api = new Api('rzp_test_2BFPuAnuz8ZT1a', 'jckc5pJUsEbi2uULD3qcyYM5');

        $eventId = $request->input('event_id');
        $event = Event::find($eventId);
        $user = Auth::user();

        $existingTicket = Ticket::where('event_id', $eventId)
                                ->where('user_id', $user->id)
                                ->first();

        if ($existingTicket) {
            return response()->json([
                'message' => 'You already have a ticket for this event.'
            ], 400); // Return a 400 Bad Request response
        }

        // Create an order in Razorpay
        $order = $api->order->create([
            'receipt' => uniqid(),
            'amount' => $event->price * 100, // Razorpay expects the amount in paise (₹1 = 100 paise)
            'currency' => 'INR',
            'payment_capture' => 1 // Auto capture payment
        ]);

        
        $options = [
            'key' => env('RAZORPAY_KEY'),
            'amount' => $order->amount,
            'currency' => $order->currency,
            'name' => $event->name,
            'description' => $event->name.' Ticket Purchase',
            'order_id' => $order->id,
            'user_email' => $user->email,
            'theme' => [
                'color' => '#3399cc',
            ],
        ];

        return response()->json($options);
    }
}
