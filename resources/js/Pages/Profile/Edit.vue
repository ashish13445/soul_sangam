<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import UpdatePreference from './Partials/UpdatePreference.vue';

import EventProfile from './Partials/EventProfile.vue';
import ProfilePicture from '@/Components/ProfilePicture.vue';
import { Head } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});
</script>

<template>

    <AuthenticatedLayout>
       

        <div class="py-12 w-screen md:px-8">
                
                    
                
                <div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg md:flex w-full justify-between ">
                 <div class="sm:w-2/3">
                    <div class="block sm:hidden ">
                        <ProfilePicture />
                    </div>
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class="max-w-xl"
                    />
                    </div>
                    <div class="hidden  sm:block w-1/3">
                        <ProfilePicture />
                    </div>
                </div>
                

              
                
                
            </div>
    </AuthenticatedLayout>
</template>
