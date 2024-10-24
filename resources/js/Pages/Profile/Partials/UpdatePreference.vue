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
  gender: '',
  relationship_status: '',
  occupation: '',
  education: '',
  income: ''
});
const age_range = ref([25, 45]);

 const GenderOptions = ref(['Male', 'Female']);
 const religions = ref(['','Hindu','Muslim','Christian','Sikh','Parsi','Jain','Buddhist','Jewish']);
 const relationship_statuses = ref(['Single','Divorced','Widow']);

const occupations = ref([
  'Doctor',
  'Engineer',
  'Teacher',
  'Lawyer',
  'Accountant',
  'Architect',
  'Software Developer',
  'Graphic Designer',
  'Civil Engineer',
  'Data Scientist',
  'Mechanical Engineer',
  'Pharmacist',
  'Nurse',
  'Dentist',
  'Pilot',
  'Marketing Manager',
  'Sales Executive',
  'Financial Analyst',
  'Human Resources Manager',
  'Entrepreneur',
  'Chef',
  'Journalist',
  'Photographer',
  'Consultant',
  'Electrician',
  'Plumber',
  'Carpenter',
  'Project Manager',
  'Digital Marketer',
  'Business Analyst',
  'Fashion Designer'
]);
const educations = ref([
  'High School Diploma',
  'Associate Degree',
  'Bachelor’s Degree in Arts (BA)',
  'Bachelor’s Degree in Science (BSc)',
  'Bachelor’s Degree in Commerce (BCom)',
  'Bachelor of Engineering (BE)',
  'Bachelor of Technology (BTech)',
  'Bachelor of Medicine, Bachelor of Surgery (MBBS)',
  'Bachelor of Laws (LLB)',
  'Master of Arts (MA)',
  'Master of Science (MSc)',
  'Master of Business Administration (MBA)',
  'Master of Commerce (MCom)',
  'Master of Technology (MTech)',
  'Doctor of Philosophy (PhD)',
  'Doctor of Medicine (MD)',
  'Chartered Accountant (CA)',
  'Diploma in Education',
  'Diploma in Engineering',
  'Postgraduate Diploma in Management (PGDM)',
  'Certified Public Accountant (CPA)',
  'Certified Information Systems Auditor (CISA)',
  'Master of Laws (LLM)',
  'Bachelor of Education (B.Ed)',
  'Master of Education (M.Ed)',
  'Diploma in Computer Science',
  'Diploma in Graphic Design',
  'Vocational Training'
]);
import Dropdown from 'primevue/dropdown';
const incomeRanges = ref([
      'Less than ₹2 Lakhs',
       '₹2 Lakhs - ₹5 Lakhs' ,
       '₹5 Lakhs - ₹10 Lakhs' ,
      '₹10 Lakhs - ₹15 Lakhs' ,
      '₹15 Lakhs - ₹20 Lakhs' ,
      '₹20 Lakhs - ₹30 Lakhs' ,
      '₹30 Lakhs - ₹50 Lakhs' ,
      'More than ₹50 Lakhs' 
    ]);

import SelectButton from 'primevue/selectbutton';
onMounted(()=>{
    axios.get('/user/preferences')
            .then(response => {
                preferences.value = response.data;
                age_range.value[0] = preferences.value.start_age;
                age_range.value[1] = preferences.value.end_age;

            })
            .catch(error => {
                console.error("There was an error fetching the preferences:", error);
            });

})

const update = async () => {
  try {
    preferences.value.start_age = age_range.value[0];
    preferences.value.end_age = age_range.value[1];

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
const clearEducation = ()=>{
    preferences.value.education = '';
}
const clearIncome = ()=>{
    preferences.value.income = '';
}
const clearOccupation = ()=>{
    preferences.value.occupation = '';
}
const clearRelationship = ()=>{
    preferences.value.relationship_status = '';
}
const clearReligion = ()=>{
    preferences.value.religion = '';
}
const clearAge = ()=>{
    age_range.value[0] = 25;
    age_range.value[1] = 45;

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
        <form @submit.prevent="update" class="w-full mt-6 text-sm space-y-3">
            
            <div class="mt-4">
                <InputLabel for="preference" value="Preference" />
<div class="py-3">
   <span class="pb-5">
    Gender
   </span> 
   <div class="flex">
    <SelectButton class="w-full" v-model="preferences.gender" :options="GenderOptions" aria-labelledby="basic"  />
   <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearGender">X</PrimaryButton>

   </div>
   
</div>
<div class=" mt-2 py-3 w-full">
   <span class="pb-5">
    Religion
   </span> 
   <div class="flex">
    <Select  v-model="preferences.religion" :options="religions"  placeholder="Select a religion" class="w-full " />
   <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearReligion">X</PrimaryButton>

   </div>
   
</div>
<div class="mt-2 py-3 ">
   <span class="pb-5">
    Age
   </span> 
   <div class="flex items-center">
    <!-- <div class="md:flex ">
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
</div> -->

<div class="card flex justify-center w-full py-5">
        <div class="flex justify-start py-5">
            {{ age_range[0] }}
        </div>      
        <Slider v-model="age_range" range :min="25" :max="45" class="w-full text-dark" />
        <div class="flex justify-end py-5">
            {{ age_range[1] }}
        </div>
    </div>
<PrimaryButton type="button" class="ml-20 bg-red-500 hover:bg-red-800 h-10 w-10" @click="clearAge">X</PrimaryButton>


   </div>   
   <div class=" mt-2 py-3 w-full">
   <span class="pb-5">
    Relationship status
   </span> 
   <div class="flex">
    <Select  v-model="preferences.relationship_status" :options="relationship_statuses"  placeholder="Select a religion" class="w-full " />
   <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearRelationship">X</PrimaryButton>

   </div>
   
</div>

<div class=" mt-2 py-3 w-full">
   <span class="pb-5">
    Occupation
   </span> 
   <div class="flex">
    <Select  v-model="preferences.occupation" editable :options="occupations"  placeholder="Select a Occupation" class="w-full " />
   <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearOccupation">X</PrimaryButton>

   </div>

</div>
<div class=" mt-2 py-3 w-full">
   <span class="pb-5">
    Education
   </span> 
   <div class="flex">
    <Select  v-model="preferences.education" editable :options="educations"  placeholder="Select  Education" class="w-full " />
   <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearEducation">X</PrimaryButton>

   </div>
</div>
</div>
<div class="p-field">
    <label for="income">Income Preference</label>
    <div class="flex">
        <Dropdown 
      v-model="preferences.income" 
      :options="incomeRanges" 
      placeholder="Select an Income Range" 
      class="w-full" />
      <PrimaryButton type="button" class="ml-20 text-blue-500 bg-red-500 hover:bg-red-800" @click="clearIncome">X</PrimaryButton>

    </div>
   
  </div>

</div>


            <div class="flex items-center gap-4">
                <PrimaryButton >Save</PrimaryButton>

               
            </div>
        </form>
    </section>
</template>
