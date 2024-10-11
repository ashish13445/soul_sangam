<?php
namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TicketMail extends Mailable
{
    use Queueable, SerializesModels;

    public $event;
    public $ticket;

    /**
     * Create a new message instance.
     *
     * @param  $event, $ticket
     */
    public function __construct($event, $ticket)
    {
        $this->event = $event;
        $this->ticket = $ticket;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.ticket')
                    ->subject('Your Event Ticket')
                    ->with([
                        'event' => $this->event,
                        'ticket' => $this->ticket,
                    ]);
    }
}
