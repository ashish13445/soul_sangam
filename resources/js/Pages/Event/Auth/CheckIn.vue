<template>
    <div>
        <h1>Check-in Successful</h1>
    <p>Welcome to the event: {{ event.name }}</p>
    <p>Ticket Code: {{ ticket.ticket_code }}</p>  <!-- Add more details as needed -->
    </div>
</template>

<script setup>
   const props = defineProps(['ticket', 'event']);

</script>
