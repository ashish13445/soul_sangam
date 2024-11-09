<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Popover from 'primevue/popover';

import { onMounted,ref ,computed} from 'vue';

import Button from 'primevue/button';
import {useCityStore} from '@/stores/cityStore';
const cityStore = useCityStore();
import Chip from 'primevue/chip';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';

import Card from 'primevue/card';
const visible = ref(true);
const events = ref([]);
const fetchEvents = ()=>{
    axios.get('/events')
    .then((res)=>{
        events.value = res.data;
    })
}
onMounted(fetchEvents);
function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}

const op = ref();
const da = ref();
const selectedFilter = ref(null);
const filters = ref([]);

const toggle = (event) => {
    op.value.toggle(event);
}
const toggleDates = (event) => {
    da.value.toggle(event);
}
const selectFilter = (member) => {
    selectedFilter.value = member;
    op.value.hide();
}

const fetchFilters = ()=>{
     axios.get('/categories').then((res)=>{
        filters.value = res.data;
     });

}
const eventDates = ref([]);
const fetchEventDates = ()=>{
     axios.get('/api/eventDates').then((res)=>{
        eventDates.value = res.data;
     });

}
onMounted(fetchFilters);
onMounted(fetchEventDates);
const selectedEventDate = ref("");

const searchQuery = ref('');
const filteredEvents = computed(() => {
    let filtered = events.value;

// Filter by selected category
if (selectedFilter.value) {
  filtered = filtered.filter(
    (event) => event.category_id === selectedFilter.value.id
  );
}
  if (cityStore.selectedCity) {
    filtered = filtered.filter(
      (event) => event.city === cityStore.selectedCity
    );

    // If no events match the selected city, fallback to events in the selected state
    if (filtered.length === 0 && cityStore.selectedState) {
      filtered = events.value.filter(
        (event) => event.state === cityStore.selectedState
      );
    }
  } else if (cityStore.selectedState) {
    // If no city is selected but a state is, filter by state
    filtered = filtered.filter(
      (event) => event.state === cityStore.selectedState
    );
  }

// Filter by search query
if (searchQuery.value.trim() !== '') {
  filtered = filtered.filter((event) =>
    event.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
}
if (selectedEventDate.value) {
    filtered = filtered.filter((event) =>
      event.event_dates.includes(selectedEventDate.value)
    );
  }

return filtered;
});
const removeFilter = () => {
    selectedFilter.value = null; // Clear the selected filter name
};
const selectedSortOption = ref('');

const sortEvents = () => {
  if (selectedSortOption.value === 'name') {
    events.value.sort((a, b) => a.name.localeCompare(b.name));
  } else if (selectedSortOption.value === 'date') {
    // events.value.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
  } 
};


</script>

<template>
    <Head title="Events" />
    <AuthenticatedLayout>
        <div class="  h-auto bg-primary-radial  flex  p-10 sm:pb-10 justify-evenly ">
           <img src="../../../../images/decoration.png" class="hidden sm:flex sm:w-40 lg:w-80"/>
           <div class="flex flex-col justify-center items-center">
            <h1 class="text-5xl font-extrabold text-white ">Discover Upcoming Events</h1>
            <p class="text-xl text-white py-8">Find the best events in your area and get tickets now.</p>
            <IconField class="w-full lg:w-1/2">
    <InputIcon class="pi pi-search " style="color: white ; font-weight: bold;"/>
    <InputText
  v-model="searchQuery"
  placeholder="Search"
  class="w-full bg-black text-white custom-input border border-transparent focus:border-white focus:ring-2 focus:ring-white p-2 rounded"
  /></IconField>
           </div>
           <img src="../../../../images/decoration.png" class="hidden sm:flex sm:w-40 lg:w-80"/>

            
        </div>
        

        <div class="bg-white  flex justify-center p-5">
            <div class="w-full max-w-7xl flex justify-between">
                <div>
                    <Button label="Filters" class="text-sm md:text-sm "icon="pi pi-filter" severity="secondary"  outlined @click="toggle" />
                    <Popover ref="op">
                        <div class="flex flex-col gap-4">
                            <div>
                                <ul class="list-none p-0 m-0 flex flex-col">
                                    <li v-for="filter in filters" :key="filter.name" class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border" @click="selectFilter(filter)" >
                                        <div>
                                            <span class="font-medium " >{{ filter.name }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Popover>

                    <select v-model="selectedSortOption" @change="sortEvents" class=" mx-5 text-sm md:text-md rounded border border-black ">
                        <option value="">Sort By</option>
            <option value="name">Sort by Name</option>
            <option value="date">Sort by Date</option>
          </select> 
                </div>
                
                <select v-model="selectedEventDate" class="" icon="pi pi-calendar" severity="secondary">
  <option value="">All dates</option>
  <option v-for="date in eventDates" :key="date" :value="date">{{ new Date(date).toLocaleDateString() }}</option>
</select>

            </div>
         
        </div>
     
<div class=" flex justify-center">
    <p class="bg-white w-full px-20">
        <div v-if="selectedFilter" class="w-full flex  py-3">
            <Chip removable @remove="removeFilter">{{ selectedFilter.name }}</Chip>
        </div>         </p>
</div>
    <div class=" flex justify-center bg-white">
        

    <div class="grid grid-cols-1  md:grid-cols-3 grid-flow-row gap-0 w-full max-w-7xl  ">
         <div class="
             flex flex-col justify-between items-center p-5  w-auto" v-for="event in filteredEvents">
       
        <Card >
        <template #header>
            <img
  alt="event image"
  :src="`/storage/event/${event.event_image}`"
  class="w-full h-40 object-cover"
/>        </template>
        <template #title>{{ event.name }}</template>
        <template #subtitle>{{ new Date(event.event_dates[0]).toDateString() }} onwards</template>
        <template #content>
            <p class="m-0">
                <Chip :label="event.type" class="border-2 border-blue-600 text-blue-600"/>
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Link :href="`/auth/events/${event.id}`"> <Button label="Details" severity="secondary" outlined class="w-full" /> </Link>
                <Link :href="`/auth/events/${event.id}`"> <Button label="Buy Ticket" class="w-full" /></Link>
            </div>
        </template>
    </Card>

    
    
    </div> 
         

    
    </div>
</div>
    
    </AuthenticatedLayout>
</template>
<style scoped>
.p-inputtext{
    background-color: #F5A2B0;
    border-radius: 100px;
    border:none;
} 

</style>
