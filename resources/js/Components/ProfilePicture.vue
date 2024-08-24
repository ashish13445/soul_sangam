<template>
    <div class="flex flex-col p-2 justify-center items-center">
      <!-- Display profile picture -->
       <div class="w-full flex justify-end">
        <Button @click="visible = true"  ><i class="pi pi-file-edit"></i></Button>
       </div>

      <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-white">
        <Image :src="profilePhotoUrl" alt="Profile Picture" class="w-auto object-cover" preview />
      </div>
      
      <!-- Button to show the upload dialog -->
  
      <!-- PrimeVue Dialog for file upload -->
      <Dialog v-model:visible="visible" modal header="Edit Profile Picture" :style="{ width: '25rem' }">
        <input type="file" @change="onFileChange" />
        <Button label="Upload" @click="uploadProfilePhoto" severity="secondary" class="my-3" />
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
  
  const visible = ref(false);
  const profilePhoto = ref(null);
  
  const page = usePage();
  const user = page.props.user;
  const profilePhotoUrl = ref(`/storage/profile_pictures/${user.profile_picture}`);
  
  // Function to handle file input change
  function onFileChange(event) {
      profilePhoto.value = event.target.files[0];
  }
  
  // Function to handle file upload using axios
  async function uploadProfilePhoto() {
      if (!profilePhoto.value) {
          alert('Please select an image to upload.');
          return;
      }
  
      let formData = new FormData();
      formData.append('photo', profilePhoto.value);
  
      try {
          let response = await axios.post('/profile/update-photo', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
  
          // Update the profile photo URL after successful upload
          profilePhotoUrl.value = `/storage/profile_pictures/${response.data.profile_picture}`;
          alert('Profile picture updated successfully.');
      } catch (error) {
          console.error(error);
          alert('An error occurred while uploading the profile picture.');
      }
  }
  </script>
  