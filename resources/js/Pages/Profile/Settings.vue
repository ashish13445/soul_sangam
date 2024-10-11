<template>
    <AuthenticatedLayout>
        <div class=" py-12 px-8">
            <UpdatePasswordForm/>
    
        </div>
    
    </AuthenticatedLayout>    
    </template>
    <script setup>
        import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
        import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    
    </script>