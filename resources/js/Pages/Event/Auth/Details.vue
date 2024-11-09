   <template>
    <Head title="Details" />

    <AuthenticatedLayout>
        <Toast/>
        <div class="flex flex-col items-center bg-primary-radial" v-if="loading == false">
            <div v-if="event" class="max-w-7xl w-full text-black flex flex-col items-center">
                <div class="bg-white rounded mt-10 sm:w-2/3">
                    <img :src="`/storage/event/${event.event_image}`" class="w-full h-auto object-cover" alt="event image" />

                    <div class="flex mt-5 mx-10 justify-between">
                        <h1 class="font-extrabold text-3xl text-black">{{ event.name }}</h1>
                        <!-- <button  @click="initiateRazorpayPayment(event.id)" class="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"> -->
                            <button @click="openDateModal" class="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Buy Ticket
    </button>
    <Modal :show="isDateModalOpen" @close="closeDateModal" >
      <div class="p-5">
        <span class="close" @click="closeDateModal"><i class="material-icons" style="cursor: pointer;">close</i></span>
        <form @submit.prevent="chooseDate" class="p-5">
          <div class="p-1">
            <select v-model="selectedDate" class="" icon="pi pi-calendar" severity="secondary">
  <option value="">All dates</option>
  <option v-for="date in event.event_dates.filter(date => new Date(date) > new Date())" :key="date" :value="date">
  {{ new Date(date).toLocaleDateString() }}
</option></select>
                        <button  @click="initiateRazorpayPayment(event.id)" class="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Buy Ticket</button>

                </div></form>
            </div></Modal>
                    </div>       

                    <div class="mx-10 mb-2">
                        <p class="text-xl py-1">
                            <Chip class="m-2" v-for="date in event.event_dates">
                {{ new Date(date).toLocaleDateString() }}
            </Chip>                        </p>
                        <p class="font-bold py-2">
                            <Chip :label="event.city" class="border-2 border-blue-600 text-blue-600 mx-2"/>
                            <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>
                        </p>
                    </div>
                </div>

                <div class="w-full mt-5 sm:flex">
                    <div class="bg-white rounded-lg sm:w-2/5 m-5 p-5 h-content">
                        <section class="p-5">
                    <h1 class="text-2xl font-extrabold text-black">
                    Terms & Conditions
                </h1>
                <p class="text-md py-5">
                    {{event.terms_and_conditions }}
                </p>
                </section>
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold text-black">
                    Guidelines
                </h1>
                <p class="text-md py-5">
                    {{event.guidelines }}
                </p>
                </section>
                    </div>
                        <div class="bg-white rounded-lg sm:w-3/5 mx-5 p-5 h-content">
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold text-black">
                    About
                </h1>
                <p class="text-md py-5">
                    {{event.about }}
                </p>
                </section>
                <div v-if="event.maps_location" class="  md:flex justify-center w-auto  mt-4" v-html="event.maps_location">
</div>
            </div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="h-96 flex flex-col justify-center items-center text-2xl font-extrabold">
                Wait.Processing your request...
                <ProgressSpinner style="width: 100px; height: 100px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>



<script setup>
 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head,router } from '@inertiajs/vue3';
  import axios from 'axios';
  import ProgressSpinner from 'primevue/progressspinner';
  import Modal from '../../../Components/Modal.vue';

  import Chip from 'primevue/chip';
  const events = ref([]);
  const selectedEvent = ref(null);
  const  props  = defineProps(['event','user']);
const event = ref(props.event);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/events');
      events.value = response.data;
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  
  const selectEvent = (event) => {
    selectedEvent.value = event;
  };

  fetchEvents();


  import Toast from 'primevue/toast';

  import { useToast } from "primevue/usetoast";
  const toast = useToast();

import { usePage, Inertia } from '@inertiajs/inertia';
import { ref } from 'vue';
const isDateModalOpen = ref(false);
const openDateModal = ()=>{
    isDateModalOpen.value = true;
}
const closeDateModal = ()=>{
    isDateModalOpen.value = false;
}
const loading = ref(false);

const initiateRazorpayPayment = async (eventId) => {
    try {
        loading.value=true;

        // Step 1: Create Razorpay Order
        const response = await axios.post('/create-checkout-session', { event_id: eventId, event_date: new Date(selectedDate.value) });
        const options = response.data;
        loading.value=false;

        // Initialize Razorpay with the options
        const rzp = new Razorpay({
            key_id: options.key_id,
            amount: options.amount,
            currency: options.currency,
            name: options.name,
            description: options.description,
            order_id: options.order_id,
            handler: function (response) {
                console.log('Payment successful:', response);
                // Send payment details to the server for verification
                axios.post('/verify-payment', {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature,
                    event_id: eventId,
                    event_date:new Date(selectedDate.value),
                }).then((res) => {
        loading.value=false;

                    alert('Ticket purchased successfully!');
                }).catch((err) => {
                    loading.value=false;

                    console.error('Payment verification failed:', err);
                });
            },
            prefill: {
                name: options.name,
                email: options.email,
                contact: options.contact
            },
            theme: {
                color: "#3399cc"
            }
        });

        rzp.on('payment.failed', function (response) {
            console.error('Payment failed:', response.error);
            loading.value=false;

            // Handle payment failure
            // Optionally, you can call an endpoint to handle the failure on the server
        });
    
        rzp.open();
    } catch (error) {
        toast.add({
        severity: 'error',
        detail: 'You have already purchased a ticket',
        life: 3000, // Duration the toast will be visible (in milliseconds)
    });
    loading.value=false;

    }

};
const selectedDate = ref("");
</script>
