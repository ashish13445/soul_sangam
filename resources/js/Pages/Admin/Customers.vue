<template>
    <header class="flex items-center ">
    <h5 class="dark:text-white font-extrabold p-2">
    Customers    
    </h5>
    </header>

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
import { useForm } from '@inertiajs/vue3';
import PrimaryButton from '../../Components/PrimaryButton.vue';
import InputNumber from 'primevue/inputnumber';
import RadioButton from 'primevue/radiobutton';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';



const columns = [
  {
    name: 'name',
    required: true,
    label: 'Customer Name ',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
  },
  { name: 'email', align: 'center', label: 'Email', field: 'email' , align: 'left' },

  { name: 'dob', label: 'DOB', field: 'dob' , align: 'left'},
  { name: 'age', label: 'Age', field: 'age', align: 'left',sortable: true},
  { name: 'occupation', label:'Occupation', field: 'occupation', align: 'left',sortable: true},
  { name: 'education', label: 'Education', field: 'education', align: 'left',sortable: true},
  { name: 'city', label: 'City', field: 'city', align: 'left',sortable: true},
  { name: 'preference', label: 'Preference', field: 'preference', align: 'left',sortable: true},

  {name: 'actions',label: 'Actions' , align: 'left'}
  
]


const rows = ref([]);
const fetchEvents = async () => {
  try {
    const response = await axios.get('admin/users');
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

