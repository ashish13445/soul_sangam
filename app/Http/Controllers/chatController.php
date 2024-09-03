<?php

namespace App\Http\Controllers;
use App\Events\MessageSent;

use Illuminate\Http\Request;

class chatController extends Controller
{
    public function sendMessage(Request $request){
        $message = $request->input('message');

    // Broadcast the message
    broadcast(new MessageSent($message))->toOthers();

    return response()->json(['status' => 'Message Sent!']);
    }
    public function getMessages(Request $request){
        return response()->json('message');
    }
}
