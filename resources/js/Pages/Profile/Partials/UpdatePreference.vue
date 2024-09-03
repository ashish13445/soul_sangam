<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';

import InputNumber from 'primevue/inputnumber';
import { useToast } from "primevue/usetoast";
const toast = useToast();
import Slider from 'primevue/slider';

import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import RadioButton from 'primevue/radiobutton';
import { ref ,onMounted} from 'vue';

import Select from 'primevue/select';

import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const userAuth = usePage().props.auth.user;
const user = usePage().props.user;

import Toast from 'primevue/toast';

const preferences = ref({
  start_age: null,
  end_age: null,
  religion: '',
  gender: ''
});

 const GenderOptions = ref(['Male', 'Female','Non-Binary'])
 const religions = ref(['','Hindu','Muslim','Christian','Sikh','Parsi','Jain','Buddhist','Jewish'])


import SelectButton from 'primevue/selectbutton';
onMounted(()=>{
    axios.get('/user/preferences')
            .then(response => {
                preferences.value = response.data;
            })
            .catch(error => {
                console.error("There was an error fetching the preferences:", error);
            });

})

const update = async () => {
  try {
    const response = await axios.patch('/user/preferences/update', preferences.value);
    toast.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Preference updated successfully!',
        life: 3000, // Duration the toast will be visible (in milliseconds)
    });
  } catch (error) {
    console.error('Failed to update preferences:', error);
  }
};

const clearGender = ()=>{
    preferences.value.gender = '';
}
const clearReligion = ()=>{
    preferences.value.religion = '';
}
const clearAge = ()=>{
    preferences.value.start_age = null;
    preferences.value.end_age = null;

}

</script>

<template>
    <section class="bg-white p-10  rounded-lg">
        <header>

            <p class="mt-1 text-lg font-normal ">
                Update your Preferences
            </p>
        </header>
<Toast/>
        <form @submit.prevent="update" class="mt-6 text-sm space-y-3">
            
            <div class="mt-4">
                <InputLabel for="preference" value="Preference" />
<div class="py-3">
   <span class="pb-5">
    Gender
   </span> 
   <div class="flex">
    <SelectButton v-model="preferences.gender" :options="GenderOptions" aria-labelledby="basic"  />
   <PrimaryButton type="button" class="ml-4 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearGender">X</PrimaryButton>

   </div>
   
</div>
<div class=" mt-2 py-3">
   <span class="pb-5">
    Religion
   </span> 
   <div class="flex">
    <Select v-model="preferences.religion" :options="religions"  placeholder="Select a religion" class="w-full md:w-56" />
   <PrimaryButton type="button" class="ml-4 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearReligion">X</PrimaryButton>

   </div>
   
</div>
<div class="mt-2 py-3 ">
   <span class="pb-5">
    Age
   </span> 
   <div class="flex items-center">
    <div class="md:flex ">
    <InputNumber v-model="preferences.start_age" inputId="start" :min="18" :max="100" fluid class="md:pr-5 pr-2"  showButtons buttonLayout="horizontal" :step="1">
         <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
<span class="p-5">to</span>
<InputNumber v-model="preferences.end_age" inputId="end" :min="preferences.start_age" :max="100" fluid showButtons buttonLayout="horizontal" :step="1">
    <template #incrementbuttonicon>
        <span class="pi pi-plus" />
    </template>
    <template #decrementbuttonicon>
        <span class="pi pi-minus" />
    </template>
</InputNumber>
</div>
<PrimaryButton type="button" class="bg-red-500 hover:bg-red-800 h-10 w-10" @click="clearAge">X</PrimaryButton>


   </div>

</div>

</div>


            <div class="flex items-center gap-4">
                <PrimaryButton >Save</PrimaryButton>

               
            </div>
        </form>
    </section>
</template>
