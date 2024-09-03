<template>
    <header class="flex items-center ">
    <h5 class="font-extrabold p-2">
    Events     <button @click="openAddEventModal"><i class="pi pi-calendar-plus mx-5" style="font-size: 20px ;font-weight: bold; color: blue;"></i></button>

    </h5>
    </header>
    <Modal :show="isAddEventModalOpen" @close="closeAddEventModal" >
      <div class="p-5">
        <span class="close" @click="closeAddEventModal"><i class="material-icons" style="cursor: pointer;">close</i></span>
        <form @submit.prevent="addEvent" class="p-5">
            <div class="p-1">
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="eventForm.errors.name" />
            </div>
            <div class="p-1">
                <InputLabel for="type" value="Type" />

                <div class="flex flex-wrap gap-4 mt-1">
    <div class="flex items-center">
        <RadioButton v-model="eventForm.type" inputId="type1" name="type" value="dating" />
        <label for="type1" class="ml-2">Dating</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="eventForm.type" inputId="type2" name="type" value="non-dating" />
        <label for="type2" class="ml-2">Non-Dating</label>
    </div>
    </div>

                <InputError class="mt-2" :message="eventForm.errors.name" />
            </div>
            <div class="p-1 flex w-full">
              <div class="w-1/2 p-1">
                <InputLabel for="start_date" value="Start Date" />

                    <TextInput
                        id="start_date"
                        type="datetime-local"
                        class="mt-1 block w-full"
                        v-model="eventForm.start_date"
                        required
                        autofocus
                        autocomplete="start_date"
                    />

                    <InputError class="mt-2" :message="eventForm.errors.start_date" />
              </div>

              <div class="w-1/2 p-1">
                <InputLabel for="end_date" value="End Date" />

                    <TextInput
                        id="end_date"
                        type="datetime-local"
                        class="mt-1 block w-full"
                        v-model="eventForm.end_date"
                        required
                        autofocus
                        autocomplete="end_date"
                    />

                    <InputError class="mt-2" :message="eventForm.errors.end_date" />
              </div>
                
            </div>
            <div class="p-1">
                <InputLabel for="city" value="City" />

                <TextInput
                    id="city"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.city"
                    required
                    autofocus
                    autocomplete="city"
                />

                <InputError class="mt-2" :message="eventForm.errors.city" />
            </div>
            <div class="p-1">
                <InputLabel for="maps_location" value="Maps Location" />

                <TextInput
                    id="maps_location"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.maps_location"
                    required
                    autofocus
                    autocomplete="maps_location"
                />

                <InputError class="mt-2" :message="eventForm.errors.maps_location" />
            </div>
            <div class="p-1">
                <InputLabel for="price" value="Price" />
                <InputGroup>
    <InputGroupAddon class="bg-green text-white">₹</InputGroupAddon>
    
                <InputNumber
                v-model="eventForm.price"
                inputId="price"
                required
                    autofocus
                    autocomplete="price" />

            </InputGroup>
                

                <InputError class="mt-2" :message="eventForm.errors.price" />
            </div>
            <div class="p-1">
                <InputLabel for="about" value="About" />

                <Textarea  rows="5" cols="30"
                    id="about"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.about"
                    required
                    autofocus
                    autocomplete="about"
                />

                <InputError class="mt-2" :message="eventForm.errors.about" />
            </div>
            <div class="p-1">
                <InputLabel for="terms_and_conditions" value="Terms & Conditions" />

                <Textarea  rows="5" cols="30"
                    id="terms_and_conditions"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.terms_and_conditions"
                    required
                    autofocus
                    autocomplete="terms_and_conditions"
                />

                <InputError class="mt-2" :message="eventForm.errors.terms_and_conditions" />
            </div>
            <div class="p-1">
                <InputLabel for="guidelines" value="Guidelines" />

                <Textarea  rows="5" cols="30"
                    id="guidelines"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.guidelines"
                    required
                    autofocus
                    autocomplete="guidelines"
                />

                <InputError class="mt-2" :message="eventForm.errors.guidelines" />
            </div>

            <div class="flex items-center justify-end mt-4">


                <PrimaryButton class="ms-4" :class="{ 'opacity-25': eventForm.processing }" :disabled="eventForm.processing">
                    ADD
                </PrimaryButton>
            </div>
        </form>
      </div>
      
    </Modal>



    <Modal :show="isUpdateEventModalOpen" @close="closeUpdateEventModal" >
      <div class="p-5">
        <span class="close" @click="closeUpdateEventModal"><i class="material-icons" style="cursor: pointer;">close</i></span>
        <form @submit.prevent="updateEvent(event_id)" class="p-5">
          <div class="p-1">
            <UploadImage :id="event_id" :event_image="event_image"/>
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="eventForm.errors.name" />
            </div>
            <div class="p-1">
                <InputLabel for="type" value="Type" />

                <div class="flex flex-wrap gap-4 mt-1">
    <div class="flex items-center">
        <RadioButton v-model="eventForm.type" inputId="type1" name="type" value="dating" />
        <label for="type1" class="ml-2">Dating</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="eventForm.type" inputId="type2" name="type" value="non-dating" />
        <label for="type2" class="ml-2">Non-Dating</label>
    </div>
    </div>

                <InputError class="mt-2" :message="eventForm.errors.name" />
            </div>
            <div class="p-1 flex w-full">
              <div class="w-1/2 p-1">
                <InputLabel for="start_date" value="Start Date" />

                    <TextInput
                        id="start_date"
                        type="datetime-local"
                        class="mt-1 block w-full"
                        v-model="eventForm.start_date"
                        required
                        autofocus
                        autocomplete="start_date"
                    />

                    <InputError class="mt-2" :message="eventForm.errors.start_date" />
              </div>

              <div class="w-1/2 p-1">
                <InputLabel for="end_date" value="End Date" />

                    <TextInput
                        id="end_date"
                        type="datetime-local"
                        class="mt-1 block w-full"
                        v-model="eventForm.end_date"
                        required
                        autofocus
                        autocomplete="end_date"
                    />

                    <InputError class="mt-2" :message="eventForm.errors.end_date" />
              </div>
                
            </div>
            <div class="p-1">
                <InputLabel for="city" value="City" />

                <TextInput
                    id="city"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.city"
                    required
                    autofocus
                    autocomplete="city"
                />

                <InputError class="mt-2" :message="eventForm.errors.city" />
            </div>
            <div class="p-1">
                <InputLabel for="maps_location" value="Maps Location" />

                <TextInput
                    id="maps_location"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.maps_location"
                    required
                    autofocus
                    autocomplete="maps_location"
                />

                <InputError class="mt-2" :message="eventForm.errors.maps_location" />
            </div>
            <div class="p-1">
                <InputLabel for="price" value="Price" />
                <InputGroup>
    <InputGroupAddon class="bg-green text-white">₹</InputGroupAddon>
    
                <InputNumber
                v-model="eventForm.price"
                inputId="price"
                required
                    autofocus
                    autocomplete="price" />

            </InputGroup>
                

                <InputError class="mt-2" :message="eventForm.errors.price" />
            </div>
            <div class="p-1">
                <InputLabel for="about" value="About" />

                <Textarea  rows="5" cols="30"
                    id="about"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.about"
                    required
                    autofocus
                    autocomplete="about"
                />

                <InputError class="mt-2" :message="eventForm.errors.about" />
            </div>
            <div class="p-1">
                <InputLabel for="terms_and_conditions" value="Terms & Conditions" />

                <Textarea  rows="5" cols="30"
                    id="terms_and_conditions"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.terms_and_conditions"
                    required
                    autofocus
                    autocomplete="terms_and_conditions"
                />

                <InputError class="mt-2" :message="eventForm.errors.terms_and_conditions" />
            </div>
            <div class="p-1">
                <InputLabel for="guidelines" value="Guidelines" />

                <Textarea  rows="5" cols="30"
                    id="guidelines"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="eventForm.guidelines"
                    required
                    autofocus
                    autocomplete="guidelines"
                />

                <InputError class="mt-2" :message="eventForm.errors.guidelines" />
            </div>

            <div class="flex items-center justify-end mt-4">


                <PrimaryButton class="ms-4" :class="{ 'opacity-25': eventForm.processing }" :disabled="eventForm.processing">
                    Update
                </PrimaryButton>
            </div>
        </form>
      </div>
      
    </Modal>
    <section>
        <div class="q-pa-md  ">
    <q-table class="font-extrabold"
      flat bordered
      :rows="rows"
      :columns="columns"
      row-key="name"
       separator="cell"
    >
    <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props" class="custom-header">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:body-cell-actions="props">
  <q-td :props="props">
    <q-btn
      flat
      icon="edit"
      color="primary"
      @click="openUpdateEventModal(props.row)"
    />
    <q-btn
      flat
      icon="delete"
      color="danger"
      @click="deleteEvent(props.row)"
    />
  </q-td>
</template>
</q-table>
  </div>
    </section>
   
</template>
<script setup>
import {ref,onMounted} from 'vue';
import Modal from '../../Components/Modal.vue';
import InputError from '../../Components/InputError.vue';
import InputLabel from '../../Components/InputLabel.vue';
import TextInput from '../../Components/TextInput.vue';
import Textarea from 'primevue/textarea';
import { useForm } from '@inertiajs/vue3';
import PrimaryButton from '../../Components/PrimaryButton.vue';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import UploadImage from '../../Components/UploadImage.vue';
 

const eventForm = useForm({
  event_image : '',
name: '',
maps_location: '',
about: '',
terms_and_conditions: '',
guidelines: '',
type: '',
start_date: '',
end_date: '',

city: '',
price: ''
});
const isAddEventModalOpen = ref(false);
const openAddEventModal =(id)=>{
  isAddEventModalOpen.value = true;
}
const closeAddEventModal = ()=>{
  isAddEventModalOpen.value = false;
}

const addEvent = ()=>{
    console.log(eventForm);
    axios.post('event/add',eventForm)
    .then(()=>{ 
fetchEvents();
closeAddEventModal();    })
}

const event_id = ref('');
const event_image = ref('');

const isUpdateEventModalOpen = ref(false);
const openUpdateEventModal =(event)=>{
  isUpdateEventModalOpen.value = true;
  eventForm.name = event.name;
  eventForm.type = event.type;
  eventForm.start_date = event.start_date;
  eventForm.end_date = event.end_date;
  eventForm.city = event.city;
  eventForm.price = event.price;
  eventForm.maps_location = event.maps_location;
  eventForm.about = event.about;
  eventForm.terms_and_conditions = event.terms_and_conditions;
  eventForm.guidelines = event.guidelines;
event_id.value = event.id;
event_image.value = event.event_image;

  
}
const closeUpdateEventModal = ()=>{
  isUpdateEventModalOpen.value = false;
}

const updateEvent = (event_id)=>{
    axios.patch(`event/update/${event_id}`,eventForm)
    .then(()=>{
fetchEvents();
closeAddEventModal();    })
}

const deleteEvent = (event)=>{
  axios.delete(`event/delete/${event.id}`)
  .then((res)=>{
    fetchEvents();
  })
}

const columns = [
  {
    name: 'name',
    required: true,
    label: 'Event Name ',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
  },
  { name: 'type', align: 'center', label: 'Type', field: 'type' , align: 'left' },

  { name: 'city', align: 'center', label: 'City', field: 'city' , align: 'left' },
  { name: 'price', label: 'Price', field: 'price' , align: 'left'},
  { name: 'start_date', label: 'Start Date', field: 'start_date', align: 'left',sortable: true},
  { name: 'end_date', label: 'End Date', field: 'end_date', align: 'left',sortable: true},
  { name: 'sold_tickets', align: 'center', label: 'Sold Tickets', field: row=>row.tickets.length , align: 'left' },

  {name: 'actions',label: 'Actions' , align: 'left'}
  
]


const rows = ref([]);
const fetchEvents = async () => {
  try {
    const response = await axios.get('/events');
    rows.value = response.data; // Assuming your API returns an array of events
    console.log(rows.value);
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

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

