<template>
    <div class="">
      <!-- <input v-model="text" placeholder="Enter text or URL" /> -->
      <!-- <button @click="generateQRCode">Generate QR Code</button> -->
      <canvas ref="qrcodeCanvas"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import QRCode from 'qrcode';
import { onMounted } from 'vue';
  const props = defineProps({
    text:{
        type: String,
    }
  })
  const text = ref(props.text);
  const qrcodeCanvas = ref(null);
  
  const generateQRCode = () => {
    if (qrcodeCanvas.value) {
      QRCode.toCanvas(qrcodeCanvas.value, text.value,{
        width:200
      } ,(error) => {
        if (error) console.error(error);
        console.log('QR code generated!');
      });
    }
  };
  onMounted(generateQRCode);
  </script>
  
  <style scoped>
  input {
    margin-bottom: 10px;
  }
  </style>
  