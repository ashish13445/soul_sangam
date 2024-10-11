<!DOCTYPE html>
<html>
<head>
    <title>Your Event Ticket</title>
</head>
<body>
    <h1>Your Ticket for {{ $event->name }}</h1>
    <p>Dear {{ auth()->user()->name }},</p>
    <p>Here are the details for your event ticket:</p>
    <ul>
        <li>Event: {{ $event->name }}</li>
        <li>Date: {{ $event->start_date }} - {{ $event->end_date }}</li>
        <li>Location: {{ $event->location }}</li>
        <li>Ticket Number: {{ $ticket->ticket_code }}</li>
    </ul>
    <p>Thank you for your purchase!</p>
</body>
</html>
