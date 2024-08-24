<script setup>
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import RadioButton from 'primevue/radiobutton';
    
import { Link, useForm, usePage } from '@inertiajs/vue3';

defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const userAuth = usePage().props.auth.user;
const user = usePage().props.user;

console.log(user);
const form = useForm({
    name: userAuth.name,
    email: userAuth.email,
    dob: user.dob,
    occupation : user.occupation,
    education : user.education, 
    city: user.city,
    preference: user.preference,
    allow_dating : user.allow_dating,
    gender: user.gender,
    bio: user.bio,
    
});
</script>

<template>
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">Profile Information</h2>

            <p class="mt-1 text-sm text-gray-600">
                Update your account's profile information and email address.
            </p>
        </header>

        <form @submit.prevent="form.patch(route('profile.update'))" class="mt-6 space-y-6">
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

            <div>
                <InputLabel for="email" value="Email" />

                <TextInput
                    id="email"
                    type="email"
                    class="mt-1 block w-full"
                    v-model="form.email"
                    required
                    autocomplete="username"
                />

                <InputError class="mt-2" :message="form.errors.email" />
            </div>

            <div v-if="mustVerifyEmail && user.email_verified_at === null">
                <p class="text-sm mt-2 text-gray-800">
                    Your email address is unverified.
                    <Link
                        :href="route('verification.send')"
                        method="post"
                        as="button"
                        class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Click here to re-send the verification email.
                    </Link>
                </p>

                <div
                    v-show="status === 'verification-link-sent'"
                    class="mt-2 font-medium text-sm text-green-600"
                >
                    A new verification link has been sent to your email address.
                </div>
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
                <InputLabel for="gender" value="Gender" />

                <div class="flex flex-wrap gap-4">

    <div class="flex items-center mt-1">
        <RadioButton v-model="form.gender" inputId="male" name="gender" value="Male" />
        <label for="male" class="ml-2">Male</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="form.gender" inputId="female" name="gender" value="Female" />
        <label for="female" class="ml-2">Female</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="form.gender" inputId="others" name="gender" value="Others" />
        <label for="others" class="ml-2">Others</label>
    </div>
  
</div>
</div>
            <!-- <div class="mt-4">
                    <InputLabel for="profile_picture" value="Profile Picture" />
                    <input
                        id="profile_picture"
                        type="file"
                        class="mt-1 block w-full"
                        @change="handleFileChange"
                        accept="image/*"
                    />
                    <InputError class="mt-2" :message="form.errors.profile_picture" />
                </div> -->

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
                <InputLabel for="bio" value="Bio" />

                <TextInput
                    id="bio"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.bio"
                    required
                    autocomplete="bio"
                />

                <InputError class="mt-2" :message="form.errors.bio" />
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
    <div class="flex items-center">
        <RadioButton v-model="form.preference" inputId="ingredient2" name="preference" value="Others" />
        <label for="others" class="ml-2">Others</label>
    </div>
  
</div>

            </div>
            <div class="mt-4">
                <InputLabel for="preference" value="Allow Dating" />

                <div class="flex flex-wrap gap-4">

    <div class="flex items-center mt-1">
        <RadioButton v-model="form.allow_dating" inputId="yes" name="allow_dating" :value='true' />
        <label for="yes" class="ml-2">Yes</label>
    </div>
    <div class="flex items-center">
        <RadioButton v-model="form.allow_dating" inputId="no" name="allow_dating" :value='false' />
        <label for="no" class="ml-2">No</label>
    </div>

  
</div></div>
            
            <!-- <div class="flex items-center justify-start mt-4">
                
                <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Submit
                </PrimaryButton>
            </div> -->

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p v-if="form.recentlySuccessful" class="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div>
        </form>
    </section>
</template>
