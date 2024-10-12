<template>
  <div class="flex flex-col p-2 justify-center items-center">
    <div class=" sm:flex justify-between items-center w-full">
      <!-- Loop through the images array, which will always have 3 elements -->
      <div v-for="(image, index) in profilePhotoUrls" :key="index" class="w-48 h-72 overflow-hidden ">
        <!-- Profile Picture or Placeholder -->
        <Image
          :src="image || '/images/profile_placeholder.jpg'"
          alt="Profile Picture"
          class=" w-48 h-48 object-cover"
          preview
        />

        <!-- Edit Button -->
        <div class="w-full flex justify-between p-2">
          <Button
            icon="pi pi-trash"
            class="p-button-rounded p-button-danger"
            @click="removeProfilePhoto(index)"
            :disabled="isUploading || !profilePhotoUrls[index]"
          />
          <Button
            icon="pi pi-file-edit"
            class="p-button-rounded p-button-primary"
            @click="openEditDialog(index)"
            :disabled="isUploading "
          />
        </div>
      </div>
    </div>

    <!-- PrimeVue Dialog for file upload -->
    <Dialog v-model:visible="visible" modal header="Edit Profile Picture" :style="{ width: '25rem' }">
      <input type="file" @change="onFileChange" />
      <Button label="Upload" @click="uploadProfilePhoto" severity="secondary" class="my-3" :disabled="isUploading" />
    </Dialog>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { usePage } from '@inertiajs/vue3';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const visible = ref(false);
const profilePhotos = ref([]);
const profilePhotoUrls = ref([]);
const selectedPhotoIndex = ref(null);
const isUploading = ref(false); // Flag to indicate whether an upload is in progress

const page = usePage();
const user = page.props.user;

onMounted(() => {
  const profilePictures = Array.isArray(user.profile_pictures)
    ? user.profile_pictures
    : JSON.parse(user.profile_pictures || '[]');

  // Ensure exactly 3 slots with placeholders if necessary
  profilePhotoUrls.value = Array(3).fill(null).map((_, index) => profilePictures[index] ? `/storage/profile_pictures/${profilePictures[index]}` : null);
});

// Open dialog for editing a specific picture
function openEditDialog(index) {
  if (!isUploading.value) {
    selectedPhotoIndex.value = index;
    visible.value = true;
  }
}

// Handle file input change
function onFileChange(event) {
  profilePhotos.value = Array.from(event.target.files); // Store selected files in an array
}

// Upload the selected profile photo
async function uploadProfilePhoto() {
  if (profilePhotos.value.length === 0) {
    alert('Please select an image to upload.');
    return;
  }

  isUploading.value = true; // Set uploading flag to true

  let formData = new FormData();
  formData.append('photo', profilePhotos.value[0]); // Only allow one photo upload at a time
  formData.append('index', selectedPhotoIndex.value); // Pass the index to the server to identify which photo to replace

  try {
    let response = await axios.post('/profile/update-photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Server response:', response.data); // Debug line

    // Update the specific profile photo URL after successful upload
    profilePhotoUrls.value[selectedPhotoIndex.value] = `/storage/profile_pictures/${response.data.profile_picture}`;
    alert('Profile picture updated successfully.');
    visible.value = false;
  } catch (error) {
    console.error(error);
    alert('An error occurred while uploading the profile picture.');
  } finally {
    isUploading.value = false; // Reset uploading flag after upload completes
  }
}

async function removeProfilePhoto(index) {
  if (isUploading.value) return;

  const confirmed = confirm('Are you sure you want to remove this profile picture?');
  if (!confirmed) return;

  isUploading.value = true; // Set uploading flag to true

  try {
    let response = await axios.post('/profile/remove-photo', {
      index: index, // Send the index to identify which photo to remove
    });

    console.log('Server response:', response.data); // Debug line

    // Remove the specific profile photo URL after successful removal
    profilePhotoUrls.value[index] = null;
    alert('Profile picture removed successfully.');
  } catch (error) {
    console.error(error);
    alert('An error occurred while removing the profile picture.');
  } finally {
    isUploading.value = false; // Reset uploading flag after removal completes
  }
}
</script>
