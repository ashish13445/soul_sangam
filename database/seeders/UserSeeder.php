<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\UserPreference;
use Illuminate\Support\Facades\Hash;
use Faker\Factory as Faker;

class UserSeeder extends DatabaseSeeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker::create();

        // Seed 10 users with preferences
        for ($i = 0; $i < 10; $i++) {
            $gender = $faker->randomElement(['Male', 'Female']);
            $religion = $faker->randomElement(['Hindu', 'Muslim', 'Christian', 'Sikh', 'Parsi', 'Jain', 'Buddhist', 'Jewish']);

            $user = User::create([
                'name' => $faker->name($gender),
                'email' => $faker->unique()->safeEmail,
                'password' => Hash::make('password'),
                'dob' => $faker->dateTimeBetween('-35 years', '-20 years')->format('Y-m-d'),
                'age'=> rand(20,35),
                'profile_picture'=>'1724399575.jpg',
                'occupation' => $faker->jobTitle,
                'education' => $faker->randomElement(['High School', 'Bachelor\'s Degree', 'Master\'s Degree', 'PhD']),
                'city' => $faker->city,
                'bio' => $faker->sentence,
                'gender' => $gender,
                'religion' => $religion,
                'allow_dating' => $faker->boolean,
            ]);

            // Seed preferences for the user
            UserPreference::create([
                'user_id' => $user->id,
                'start_age' => $faker->numberBetween(18, 25),
                'end_age' => $faker->numberBetween(26, 35),
                'distance' => $faker->numberBetween(5, 50), // Random distance between 5 and 50 km
                'religion' => $religion,
                'gender' => $faker->randomElement(['Male', 'Female']),
            ]);
        }
    }
}
