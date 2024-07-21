<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Stripe\Stripe;
use Stripe\Checkout\Session;
use App\Models\Event;
use Illuminate\Support\Facades\Auth;

class StripeController extends Controller
{
    
    public function createCheckoutSession(Request $request)

    {
        
        Stripe::setApiKey('sk_test_51K4koBSFlDb60EYr8AaKb2vZSkMAnUymPlD8uuFKOdRHAsXokuIQokpIYJ7IuLfGW0H4KVxJjmt5dW4PTv7TJ6Ty00qSSRjzHF');
        
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

        // Ensure the user has a Stripe customer ID
        if (!$user->stripe_customer_id) {
            // Create a new Stripe customer if one does not exist
            $customer = \Stripe\Customer::create([
                'email' => $user->email,
            ]);
            // Save the Stripe customer ID to the user
            $user->stripe_customer_id = $customer->id;
            $user->save();
        }

        // Ensure the user has a Stripe customer ID
        if (!$user->stripe_customer_id) {
            // Create a new Stripe customer if one does not exist
            $customer = \Stripe\Customer::create([
                'email' => $user->email,
            ]);
            // Save the Stripe customer ID to the user
            $user->stripe_customer_id = $customer->id;
            $user->save();
        }
        
        $session = Session::create([
            'payment_method_types' => ['card'],
            'line_items' => [[
                'price_data' => [
                    'currency' => 'inr',
                    'product_data' => [
                        'name' => $event->name,
                    ],
                    'unit_amount' => $event->price * 100, // Assuming price is in dollars
                ],
                'quantity' => 1,
            ]],
            'mode' => 'payment',
            'customer' => $user->stripe_customer_id, // Include the customer ID
            'success_url' => route('purchase.ticket', ['event_id' => $event->id, 'user_id' => Auth::id()]),
            'cancel_url' => route('dashboard'),
        ]);

        return response()->json(['id' => $session->id]);
    }
}
