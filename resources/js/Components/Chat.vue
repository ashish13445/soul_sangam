<template>
    <div class="flex flex-col h-96 p-4 bg-gray-100">
      <!-- Chat Header -->
      <div class="flex items-center justify-between p-4 bg-white shadow rounded-t-lg">
        <h2 class="text-xl font-bold">Chat</h2>
        <p-button icon="pi pi-sign-out" label="Logout" class="p-button-danger" />
      </div>
  
      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-4 bg-white shadow">
        <div v-for="(msg, index) in messages" :key="index" class="mb-4">
          <div v-if="msg.user === currentUser" class="text-right">
            <div class="inline-block p-3 text-white bg-blue-500 rounded-lg">
              {{ msg.text }}
            </div>
          </div>
          <div v-else class="text-left">
            <div class="inline-block p-3 text-black bg-gray-300 rounded-lg">
              {{ msg.text }}
            </div>
          </div>
        </div>
      </div>
  
      <!-- Chat Input -->
      <div class="flex items-center justify-between p-4 bg-white shadow rounded-b-lg">
        <input
          type="text"
          v-model="newMessage"
          @keyup.enter="sendMessage"
          class="w-full p-2 border rounded-lg"
          placeholder="Type your message..."
        />
        <p-button icon="pi pi-send" label="Send" class="ml-4 p-button-success" @click="sendMessage" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'primevue/usetoast';
  
  const newMessage = ref('');
  const messages = ref([
    { user: 'John', text: 'Hello!' },
    { user: 'Jane', text: 'Hi there!' },
  ]);
  const currentUser = ref('John'); // Set dynamically based on the logged-in user
  const toast = useToast();
  
  const sendMessage = async() => {
    if (newMessage.value.trim() !== '') {
    try {
      // Add message to local messages array
      messages.value.push({ user: currentUser.value, text: newMessage.value });

      // Send message to the backend
      await axios.post('/send-message', {
        user: currentUser.value,
        text: newMessage.value
      });

      // Clear input field
      newMessage.value = '';

      // Optionally: Notify other users of typing status
      echo.private('chat').whisper('typing', { user: currentUser.value });

      // Optionally: Handle success feedback
      toast.add({ severity: 'success', summary: 'Success', detail: 'Message sent', life: 3000 });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message', life: 3000 });
    }
  } else {
    toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message cannot be empty', life: 3000 });
  }
  };


  </script>
  
  <style scoped>
  .message-bubble {
    max-width: 70%;
    word-wrap: break-word;
  }
  </style>
  