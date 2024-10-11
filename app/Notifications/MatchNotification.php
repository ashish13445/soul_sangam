<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class MatchNotification extends Notification
{
    use Queueable;

    protected $matcher;
    protected $matchedUser;

    public function __construct(User $matcher, User $matchedUser)
    {
        $this->matcher = $matcher;
        $this->matchedUser = $matchedUser;
    }

    // Notification via mail, database, etc.
    public function via($notifiable)
    {
        return ['database'];  // You can add 'mail' or other channels as needed
    }

    public function toArray($notifiable)
    {
        return [
            'type' => 'match',
            'matcher_id' => $this->matcher->id,
            'matched_user_id' => $this->matchedUser->id,
        ];
    }
}
