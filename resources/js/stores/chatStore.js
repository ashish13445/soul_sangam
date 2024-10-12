import { defineStore } from 'pinia';
import { ref } from 'vue'; // Import ref for reactive state
import axios from 'axios';
import { useToast } from 'primevue/usetoast'; // Import toast for notifications

export const useChatStore = defineStore('chatStore', () => {
  // Define reactive state using refs
  const selectedUser = ref(null);
  const newMessage = ref('');
  const messages = ref([]);
  
  // Get the toast instance
  const toast = useToast();

  // Define the sendMessage action
  const sendMessage = async () => {
    if (newMessage.value && newMessage.value.trim() !== '') {
      try {
        // Add message to local messages array
        messages.value.push({ user: selectedUser.value, text: newMessage.value });
        
        // Send message to the backend
        await axios.post('/send-message', {
          user: selectedUser.value,
          text: newMessage.value
        });

        // Clear input field
        newMessage.value = '';

        // Notify other users of typing status
        echo.private('chat').whisper('typing', { user: selectedUser.value });

        // Optionally: Handle success feedback
        toast.add({ severity: 'success', summary: 'Success', detail: 'Message sent', life: 3000 });
      } catch (error) {
        console.error('Error sending message:', error);
        toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message', life: 3000 });
        
        // Optional: Check for session error (unauthorized)
        if (error.response && error.response.status === 401) {
          // Handle unauthorized error (e.g., logout or redirect)
        }
      }
    } else {
      toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message cannot be empty', life: 3000 });
    }
  };

  // Return state and actions for use in components
  return {
    selectedUser,
    newMessage,
    messages,
    sendMessage,
  };
});
