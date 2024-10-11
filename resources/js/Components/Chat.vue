<template>
  <ChatLayout>
    <div class="flex flex-col h-96 w-full pl-5 ">
      
      <!-- Chat Header -->
      <div class="flex items-center justify-between p-4 bg-white shadow rounded-t-lg">
        <h2 class="text-xl font-bold">{{chatStore.selectedUser?chatStore.selectedUser.name:'Chat'}}</h2>
        <p-button icon="pi pi-sign-out" label="Logout" class="p-button-danger" />
      </div>
  
      <!-- Chat Messages -->
      <div class="flex-1 overflow-y-auto p-4 bg-white shadow">
        <div v-for="(msg, index) in chatStore.messages" :key="index" class="mb-4">
          <div v-if="msg.user === chatStore.selectedUser" class="text-right">
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
          v-model="chatStore.newMessage"
          @keyup.enter="chatStore.sendMessage"
          class="w-full p-2 border rounded-lg"
          placeholder="Type your message..."
        />
        <p-button icon="pi pi-send" label="Send" class="ml-4 p-button-success" @click="chatStore.sendMessage" />
      </div>
    </div>
</ChatLayout>
  

  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useToast } from 'primevue/usetoast';
  import Matches from '@/Components/Matches.vue';
import ChatLayout from '@/Layouts/ChatLayout.vue';
import { useChatStore } from '@/stores/chatStore';
const chatStore = useChatStore();
   // Set dynamically based on the logged-in user
  const toast = useToast();
  
  


  </script>
  
  <style scoped>
  .message-bubble {
    max-width: 70%;
    word-wrap: break-word;
  }
  </style>
  