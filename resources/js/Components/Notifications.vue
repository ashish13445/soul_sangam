<template>
         <div >
         <div v-for="notification in likeNotifications" class="bg-secondary text-white font-bold p-5 m-5">
         {{notification.data.message}}
     </div>
     </div>
 
     
 
 </template>
 <script setup>
   import CheckedInLayout from '@/Layouts/CheckedInLayout.vue';
 import axios from 'axios';
 import { onMounted,ref } from 'vue';
 const likeNotifications = ref(null);
   const fetchNotifications = () =>{
     axios.get('/notifications')
     .then((res)=>{
         likeNotifications.value = res.data.likeNotifications;
     })
   }
   onMounted(fetchNotifications);
 </script>