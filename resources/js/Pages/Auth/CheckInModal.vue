<template>
    <div class="modal">
        <div class="modal-content">
            <form @submit.prevent="submit" class="p-10 bg-white rounded mt-6 w-content">
                
            <h2>Enter Unique Ticket Code</h2>
            <input type="text" v-model="form.ticketCode" placeholder="Enter ticket code">
            <button class="hover:bg-blue-600 hover:text-white border-2 border-blue-600" @click="submitTicketCode">Submit</button>
            <button @click="closeModal">Close</button> 
        </form>

        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { defineEmits } from 'vue';
    import { Head, Link, useForm } from '@inertiajs/vue3';

 const form = useForm({
    ticketCode: '',

});

const submit = () => {
    form.post(route('checkin'), {
        onFinish: () => closeModal(),
    });
};
    // Define emits to emit 'close' event
    const emits = defineEmits(['close']);

    // Reactive variable for ticket code input
    const ticketCode = ref('');

    // Function to handle submission of ticket code
    const submitTicketCode = () => {
        axios.get(`/checkin/${ticketCode.value}`)
        .then( ()=>{
            console.log('Submitted ticket code:', ticketCode.value);
            closeModal();
        })
        // You can emit an event here or perform any necessary action
    };

    // Function to close modal and emit 'close' event
    const closeModal = () => {
        console.log('Closing modal');
        emits('close'); // Emitting 'close' event
    };
</script>

<style scoped>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }

    .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        width: 300px;
    }

    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
    }

    button {
        padding: 10px 20px;
        margin-right: 10px;
        cursor: pointer;
    }
</style>
