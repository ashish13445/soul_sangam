<!DOCTYPE html>
<html>
<head>
    <title>Ticket Purchased</title>
</head>
<body>
    <h1>Thank you for your purchase!</h1>
    <p>You have successfully purchased a ticket.</p>
    <p>Ticket Details:</p>
    <ul>
        <li>Event: {{ $ticket->event->name }}</li>
        <li>Date: {{ $ticket->event->start_date }}</li>
    </ul>
</body>
</html>
