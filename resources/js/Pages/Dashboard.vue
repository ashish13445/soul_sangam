<template>
  <Head title="Dashboard" />
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
    </template>
    <div v-for="ticket in tickets" :key="ticket.id" class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="lg:flex justify-between">
            <img src="../../images/soul.jpg" style="height: 240px;" class="w-full lg:w-auto">
            <div class="p-4 px-20">
              <h3 class="text-2xl font-extrabold text-blue-600 p-1">{{ ticket.event.name }}</h3>
              <p class="p-1 font-bold">{{ new Date(ticket.event.start_date).toDateString() }} - {{ new Date(ticket.event.end_date).toDateString() }}</p>
              <p class="p-1 font-bold">{{ ticket.event.city }}</p>
              <p class="p-1 font-bold">₹ {{ ticket.event.price }}</p>
              <p class="p-1 font-bold">{{ ticket.user.name }}</p>
              <p class="p-1 font-bold">{{ ticket.user.email }}</p>
            </div>
            <div>
              <div v-if="isEventLive(ticket.event)" class="bg-green-100 h-full px-5 flex flex-col justify-center items-center">
                <h1 class="text-xl font-extrabold">LIVE</h1>
                <p class="text-sm">Join by scanning the QR code</p>
              </div>
              <div v-else-if="isEventUpcoming(ticket.event)" class="bg-yellow-100 h-full w-40 flex flex-col justify-center items-center">
                <p class="text-xl font-extrabold text-blue-800">{{ ticket.countdown }} Days Left </p>
              </div>
              <div v-else class="bg-gray-100 h-full px-5 flex flex-col justify-center items-center">
                <h1 class="text-xl font-extrabold">Event Ended</h1>
              </div>
            </div>
            <div class="flex flex-col items-center justify-center">
              <QrCodeGenerator :text="ticket.ticket_code"/>
              <p>{{ ticket.ticket_code }}</p>
            </div>
          </div>                  
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>


<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import QrCodeGenerator from '@/Components/QrCodeGenerator.vue';
import { Head } from '@inertiajs/vue3';
import { ref, onMounted, onUnmounted } from 'vue';
import axios from 'axios';

const tickets = ref([]);
const currentTime = ref(new Date().getTime());
let timer = null;

const fetchTickets = async () => {
  try {
    const response = await axios.get('/tickets/get');
    tickets.value = response.data.map(ticket => ({
      ...ticket,
      countdown: ''
    }));
    updateCountdowns();
  } catch (error) {
    console.error('Error fetching tickets:', error);
  }
};

const isEventLive = (event) => {
  const eventStartDate = new Date(event.start_date).getTime();
  const eventEndDate = new Date(event.end_date).getTime();
  return currentTime.value >= eventStartDate && currentTime.value <= eventEndDate;
};

const isEventUpcoming = (event) => {
  const eventStartDate = new Date(event.start_date).getTime();
  return currentTime.value < eventStartDate;
};

const updateCountdowns = () => {
  const now = new Date().getTime();
  
  tickets.value.forEach(ticket => {
    const eventStartDate = new Date(ticket.event.start_date).getTime();
    const timeLeft = eventStartDate - now;

    if (timeLeft <= 0) {
      ticket.countdown = '00:00:00:00';
      return;
    }
    const days = String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(2, '0');
  
    ticket.countdown = `${days}`;
  });
};

onMounted(() => {
  fetchTickets();
  timer = setInterval(() => {
    currentTime.value = new Date().getTime();
    updateCountdowns();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
