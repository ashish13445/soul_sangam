<!-- <template>
    <Head title="Details" />

    <AuthenticatedLayout>

        <div class=" flex flex-col items-center" v-if="loading == false">
          
          <div v-if="event" class=" max-w-7xl w-full text-black flex flex-col items-center">
        <div class="bg-white rounded mt-10 w-2/3" >
            <img
  alt="event image"
  :src="`/storage/event/${event.event_image}`"
  class="w-full h-auto object-cover"
/>   
<div class="flex mt-5 mx-10 justify-between">
    <h1 class="font-extrabold text-3xl">{{ event.name }}</h1>

       
            <button  @click="submit(event.id)" class="m-2 bg-transparent disabled:bg-gray-700 disabled:text-white disabled:hover:text-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Buy Ticket
            </button>
</div>       

<div class="mx-10 mb-2 ">
        <p class=" text-xl py-1">
            <span class="">
                {{ new Date(event.start_date).toDateString() }}
            </span>
            onwards
        </p>
        <p class="font-bold  py-2">
            <Chip :label="event.city" class="border-2 border-blue-600 text-blue-600 mx-2"/>
            <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>

            
        </p>
        <div >

        </div>
    </div>
        </div>
        <div class=' w-full mt-5 flex'>
            <div class="bg-white rounded-lg w-1/5 mx-5 p-5 h-content">
1
            </div>
            <div class="bg-white rounded-lg w-3/5 mx-5 p-5 h-content">
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    About
                </h1>
                <p class="text-md py-5">
                    {{event.about }}
                </p>
                </section>
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    Terms & Conditions
                </h1>
                <p class="text-md py-5">
                    {{event.terms_and_conditions }}
                </p>
                </section>
                <section class="p-5">
                    <h1 class="text-2xl font-extrabold">
                    Guidelines
                </h1>
                <p class="text-md py-5">
                    {{event.guidelines }}
                </p>
                </section>
      

        
        
        
      </div>
      <div class="bg-white w-1/5 mx-5 h-content">
      2
                </div>
    </div>
    </div>
            </div>
            <div v-else>
              <div class="h-96 flex flex-col justify-center items-center">
                Wait. Moving to checkout page...<br/>
                
    <div class="card flex justify-center">
        <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent"
            animationDuration=".5s" aria-label="Custom ProgressSpinner" />
    </div>



              </div>
            </div>
       
    </AuthenticatedLayout>
</template>


  <script setup>
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head,router } from '@inertiajs/vue3';
  import { ref } from 'vue';
  import axios from 'axios';
  import ProgressSpinner from 'primevue/progressspinner';

  import Chip from 'primevue/chip';

import { usePage, Inertia } from '@inertiajs/inertia';
import { loadStripe } from '@stripe/stripe-js';


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




const publishableKey = "pk_test_51K4koBSFlDb60EYrJRKOY4WRI0xp460rrhIZPW8XuVChtvmviOFyZUXq0EnNKLIaqzI1AkJik70iFvW1NNCiP1H700RCxV3kwh";
const stripePromise = loadStripe(publishableKey);
const loading = ref(false);


const submit = async (id) => {
    loading.value = true;
    
    try {
        const checkoutResponse = await axios.post('/create-checkout-session', { event_id: id });
        const { id: sessionId } = checkoutResponse.data; // Ensure sessionId is correctly extracted

        const stripe = await stripePromise;

        const { error } = await stripe.redirectToCheckout({ sessionId });

        if (error) {
            console.error('Error redirecting to checkout:', error);
        }
        
    } catch (error) {
        console.error('Error during authentication or checkout:', error);
    } finally {
        loading.value = false;
    }
};
const openAgeError = ()=>{
  alert('age should be between 20-45')
}

  </script>
   -->

   <template>
    <Head title="Details" />

    <AuthenticatedLayout>
        <div class="flex flex-col items-center" v-if="loading == false">
            <div v-if="event" class="max-w-7xl w-full text-black flex flex-col items-center">
                <div class="bg-white rounded mt-10 w-2/3">
                    <img :src="`/storage/event/${event.event_image}`" class="w-full h-auto object-cover" alt="event image" />

                    <div class="flex mt-5 mx-10 justify-between">
                        <h1 class="font-extrabold text-3xl">{{ event.name }}</h1>
                        <button @click="initiateRazorpayPayment(event.id)" class="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Buy Ticket
    </button>
                    </div>       

                    <div class="mx-10 mb-2">
                        <p class="text-xl py-1">
                            <span>{{ new Date(event.start_date).toDateString() }}</span> onwards
                        </p>
                        <p class="font-bold py-2">
                            <Chip :label="event.city" class="border-2 border-blue-600 text-blue-600 mx-2"/>
                            <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>
                        </p>
                    </div>
                </div>

                <div class="w-full mt-5 flex">
                    <div class="bg-white rounded-lg w-1/5 mx-5 p-5">1</div>
                    <div class="bg-white rounded-lg w-3/5 mx-5 p-5">
                        <!-- Event Details -->
                        <!-- Add your event details here -->
                    </div>
                    <div class="bg-white w-1/5 mx-5">2</div>
                </div>
            </div>
        </div>

        <div v-else>
            <div class="h-96 flex flex-col justify-center items-center">
                Wait. Moving to checkout page...
                <ProgressSpinner style="width: 50px; height: 50px" strokeWidth="8" fill="transparent" animationDuration=".5s" aria-label="Custom ProgressSpinner" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>



<script setup>
 import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head,router } from '@inertiajs/vue3';
  import axios from 'axios';
  import ProgressSpinner from 'primevue/progressspinner';

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




import { usePage, Inertia } from '@inertiajs/inertia';
import { ref } from 'vue';

const loading = ref(false);

const initiateRazorpayPayment = async (eventId) => {
    loading.value = true;

    try {
        // Step 1: Create Razorpay Order
        const response = await axios.post('/create-checkout-session', { event_id: eventId });
        const options = response.data;

// Initialize Razorpay with the options
const rzp = new Razorpay(options);

rzp.on('payment.failed', function (response) {
    console.error('Payment failed:', response.error);
    // Handle payment failure
});

rzp.open();


    } catch (error) {
        console.error('Error during Razorpay checkout:', error);
    } finally {
        loading.value = false;
    }

};
</script>
