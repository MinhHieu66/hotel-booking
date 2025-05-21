<?php
namespace Database\Seeders;

use Faker\Factory as Faker;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class GuestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = Faker::create();

        // Thêm 1 guest cố định
        DB::table('guests')->insert([
            'fullname'      => 'Nguyen Van A',
            'email_address' => 'hp123@gmail.com',
            'password'      => Hash::make('123456'),
        ]);

        // Thêm 9 guests ngẫu nhiên
        for ($i = 0; $i < 100; $i++) {
            DB::table('guests')->insert([
                'fullname'      => $faker->name,
                'email_address' => $faker->unique()->safeEmail,
                'password'      => Hash::make('123456'),
            ]);
        }
    }
}
