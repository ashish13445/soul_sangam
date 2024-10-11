<template>
    <AuthenticatedLayout>
        <div class=" py-12 px-8 bg-primary-radial">
            <ProfilePicture/>
        </div>
    
    </AuthenticatedLayout>    
    </template>
    <script setup>
        import ProfilePicture from '@/Components/ProfilePicture.vue';
        import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    
    </script>