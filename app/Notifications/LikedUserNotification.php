<?php

namespace App\Notifications;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\DatabaseMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class LikedUserNotification extends Notification
{
    use Queueable;

 
    protected $liker;
    protected $likedUser;
    protected $event_id;

    /**
     * Create a new notification instance.
     *
     * @param User $liker The user who liked someone.
     * @param User $likedUser The user who was liked.
     */
    public function __construct(User $liker, User $likedUser,int $event_id)
    {
        $this->liker = $liker;
        $this->likedUser = $likedUser;
        $this->event_id = $event_id;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database']; // Add more channels like 'broadcast' if needed
    }

    /**
     * Get the database representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toDatabase($notifiable)
    {
        return [
        'user_id' => $this->liker->id,
        'event_id' => $this->event_id,
        'liked_user_id' => $this->likedUser->id,
        'message' => 'You have been liked by ' . $this->liker->name . '.',
        'link' => '/profile/' . $this->liker->id,
        ];
    }
}
