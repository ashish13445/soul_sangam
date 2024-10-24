<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import DeleteUserForm from './Partials/DeleteUserForm.vue';
import UpdatePasswordForm from './Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm.vue';
import UpdatePreference from './Partials/UpdatePreference.vue';

import EventProfile from './Partials/EventProfile.vue';
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
       

        <div class="py-12 w-full md:px-60 bg-primary-radial">
                
                <div class="p-4 sm:px-20 sm:py-10 bg-white shadow sm:rounded-lg md:flex w-full ">
                   
                    <UpdateProfileInformationForm
                        :must-verify-email="mustVerifyEmail"
                        :status="status"
                        class=""
                    />
                </div>
                

              
                
                
            </div>
    </AuthenticatedLayout>
</template>
