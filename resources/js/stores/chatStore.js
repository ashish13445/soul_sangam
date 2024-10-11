import { defineStore } from 'pinia';
import axios from 'axios';

export const useChatStore = defineStore('chatStore', {
  state: () => ({
    selectedUser: null,  
    newMessage: null,
   messages : [],
  }),

  actions: {
    // Fetch cities from the API
    async sendMessage(){
        if (this.newMessage.trim() !== '') {
        try {
          // Add message to local messages array
          this.messages.push({ user: this.selectedUser, text: this.newMessage });
    
          // Send message to the backend
          await axios.post('/send-message', {
            user: this.selectedUser,
            text: this.newMessage
          });
    
          // Clear input field
          this.newMessage = '';
    
          // Optionally: Notify other users of typing status
          echo.private('chat').whisper('typing', { user: this.selectedUser });
    
          // Optionally: Handle success feedback
          toast.add({ severity: 'success', summary: 'Success', detail: 'Message sent', life: 3000 });
        } catch (error) {
          console.error('Error sending message:', error);
          toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to send message', life: 3000 });
        }
      } else {
        toast.add({ severity: 'warn', summary: 'Warning', detail: 'Message cannot be empty', life: 3000 });
      }
      },
    
  },
});
