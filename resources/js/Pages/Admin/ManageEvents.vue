<template>
    <header class="flex items-center">
      <h5 class="dark:text-white font-extrabold p-2">Event Management</h5>
    </header>
    <Select v-model="selectedEvent" :options="events" optionLabel="name" placeholder="Select Event" class="w-full md:w-56" />
    <div v-if="Object.keys(selectedEventTicketsByDate).length > 0" class="mt-10">
      <div v-for="(tickets, date) in selectedEventTicketsByDate" :key="date">
        <h6 class="font-bold dark:text-white">{{ new Date(date).toDateString() }}</h6>

        <q-table
          :rows="tickets"
          :columns="columns"
          row-key="ticket_code"
          flat
          bordered
          class="mb-5"
        >
          <template v-slot:header="props">
            <q-tr :props="props">
              <q-th v-for="col in props.cols" :key="col.name" :props="props" class="custom-header">
                {{ col.label }}
              </q-th>
            </q-tr>
          </template>
        </q-table>
      </div>
    </div>
  </template>
  
  
<script setup>
import { ref, onMounted, computed } from 'vue';
import axios from 'axios'; // Ensure axios is imported
import Modal from '../../Components/Modal.vue';
import InputError from '../../Components/InputError.vue';
import InputLabel from '../../Components/InputLabel.vue';
import TextInput from '../../Components/TextInput.vue';
import { useForm } from '@inertiajs/vue3';
import PrimaryButton from '../../Components/PrimaryButton.vue';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Select from 'primevue/select';

const selectedEvent = ref(null); // Start with null instead of an empty string
const events = ref([]);

const fetchEvents = async () => {
  try {
    const response = await axios.get('/events');
    events.value = response.data; // Assuming your API returns an array of events
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Columns definition
const columns = [
  { name: 'ticket_code', label: 'Ticket Code', field: 'ticket_code' },
  { name: 'user', label: 'User Email', field: ticket=>ticket.user.email  },
  { name: 'interactions', label: 'Interactions', field: ticket=>ticket.user.age },
];

// Filtered events based on selected event
const selectedEventTicketsByDate = computed(() => {
  if (selectedEvent.value) {
    const ticketsByDate = {};

    selectedEvent.value.event_dates.forEach(date => {
      // Convert the date to IST
      const istDate = new Date(date);
      ticketsByDate[istDate] = ticketsByDate[istDate] || [];
    //   console.log(new Date(istDate));

      // Add tickets associated with this date
      selectedEvent.value.tickets.forEach(ticket => {
        const ticketDate = new Date(ticket.event_date);
        const isEqual = (istDate.getUTCDate() === ticketDate.getUTCDate()) &&
                (istDate.getUTCMonth() === ticketDate.getUTCMonth()) &&
                (istDate.getUTCFullYear() === ticketDate.getUTCFullYear());
        if (isEqual) {
          ticketsByDate[istDate].push(ticket);
        }
      });
    });
    
    return ticketsByDate;
  }
  return {};
});



onMounted(fetchEvents);
</script>

<style scoped>
.header {
  background-color: #f8f9fa; /* Light grey background */
  border-bottom: 2px solid #010306; /* Light border */
}

.header h5 {
  margin: 0; /* Remove default margin */
}

.custom-header {
  background-color: #8bbee3; /* Green background */
  color: white; /* White text */
  font-weight: bold;
  font-size: larger; /* Bold text */
  padding: 10px; /* Padding for spacing */
}
</style>

