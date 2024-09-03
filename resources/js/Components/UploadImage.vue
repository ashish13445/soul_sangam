<template>
    <div class="flex flex-col p-2 justify-center items-center">
      <!-- Display profile picture -->
       <div class="w-full flex justify-end">
        <Button @click="visible = true"  ><i class="pi pi-file-edit"></i></Button>
       </div>

      <div class="w-48 h-48  overflow-hidden border-4 border-white">
        <Image :src="photoUrl" alt="Event Image" class="w-auto object-cover"  />
      </div>
      
      <!-- Button to show the upload dialog -->
  
      <!-- PrimeVue Dialog for file upload -->
      <Dialog v-model:visible="visible" modal header="Add Picture" :style="{ width: '25rem' }">
        <input type="file" @change="onFileChange" />
        <Button label="Upload" @click="uploadEventPhoto" severity="secondary" class="my-3" />
      </Dialog>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { usePage } from '@inertiajs/vue3';
  import Image from 'primevue/image';
  import Dialog from 'primevue/dialog';
  import Button from 'primevue/button';
  import { defineProps } from 'vue';

  const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  event_image : {
    type: String,
    
  }
});
  const visible = ref(false);
  const photo = ref(null);
  const event = ref(null);

  const photoUrl = ref(`/storage/event/${props.event_image}`);
  
  // Function to handle file input change
  function onFileChange(event) {
      photo.value = event.target.files[0];
  }
  
  // Function to handle file upload using axios
  async function uploadEventPhoto() {
      if (!photo.value) {
          alert('Please select an image to upload.');
          return;
      }
  
      let formData = new FormData();
      formData.append('photo', photo.value);
      formData.append('id',props.id);
      try {
          let response = await axios.post('/event/add-photo', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
              
          });
  
          // Update the profile photo URL after successful upload
          photoUrl.value = `/storage/event/${response.data.event_image}`;
          alert('Event picture Added successfully.');
      } catch (error) {
          console.error(error);
          alert('An error occurred while uploading the Event picture.');
      }
  }
  </script>
  