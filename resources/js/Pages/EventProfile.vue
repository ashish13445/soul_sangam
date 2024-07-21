<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';
import RadioButton from 'primevue/radiobutton';

const form = useForm({
    name: '',
    dob: '',
    occupation : '',
    education : '',
    city: '',
    preference: '',
    profile_picture: null,

});
const handleFileChange = (e) => {
    form.profile_picture = e.target.files[0];
};

// const submit = () => {
//     form.post(route('event.profile'), {
//         // onFinish: () => form.reset('password', 'password_confirmation'),
//     });
// };

const submit = () => {
    let formData = new FormData();
    formData.append('name', form.name);
    formData.append('dob', form.dob);
    formData.append('occupation', form.occupation);
    formData.append('education', form.education);
    formData.append('city', form.city);
    formData.append('preference', form.preference);
    formData.append('profile_picture', form.profile_picture);

    form.post(route('event.profile'), {
        // Set form data directly
        data: formData,
        // Specify the content type as multipart/form-data
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};
</script>

<template>
    <AuthenticatedLayout >
        <Head title="Event Profile" />
        <div class="flex justify-center mt-10">
            <form @submit.prevent="submit" class="p-10 w-screen m-5 md:w-1/2 bg-white">
            <div>
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>

            <div class="mt-4">
                <InputLabel for="dob" value="Date of Birth" />

                <TextInput
                    id="dob"
                    type="date"
                    class="mt-1 block w-full"
                    v-model="form.dob"
                    required
                    autocomplete="dob"
                />

                <InputError class="mt-2" :message="form.errors.dob" />
            </div>
            <div class="mt-4">
                    <InputLabel for="profile_picture" value="Profile Picture" />
                    <input
                        id="profile_picture"
                        type="file"
                        class="mt-1 block w-full"
                        @change="handleFileChange"
                        accept="image/*"
                    />
                    <InputError class="mt-2" :message="form.errors.profile_picture" />
                </div>

            <div class="mt-4">
                <InputLabel for="occupation" value="Occupation" />

                <TextInput
                    id="occupation"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.occupation"
                    required
                    autocomplete="occupation"
                />

                <InputError class="mt-2" :message="form.errors.occupation" />
            </div>

            <div class="mt-4">
                <InputLabel for="education" value="Education" />

                <TextInput
                    id="education"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.education"
                    required
                    autocomplete="education"
                />

                <InputError class="mt-2" :message="form.errors.education" />
            </div>
            
            <div class="mt-4">
                <InputLabel for="city" value="City" />

                <TextInput
                    id="city"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.city"
                    required
                    autocomplete="city"
                />

                <InputError class="mt-2" :message="form.errors.city" />
            </div>
            <div class="mt-4">
                <InputLabel for="preference" value="Preference" />

                <div class="flex flex-wrap gap-4">

    <div class="flex items-center mt-1">
        <RadioButton v-model="form.preference" inputId="ingredient1" name="preference" value="Male" />
        <label for="male" class="ml-2">Male</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="form.preference" inputId="ingredient2" name="preference" value="Female" />
        <label for="female" class="ml-2">Female</label>
    </div>
  
</div>

            </div>
            
            <div class="flex items-center justify-start mt-4">
                
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Submit
                </PrimaryButton>
            </div>
        </form>
        </div>
        
    </AuthenticatedLayout>
</template>
