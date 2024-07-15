<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'iqbalmaulana99826@gmail.com',
            'password' => bcrypt('Pongkoran129'),
        ]);

        $admin->assignRole('admin');
    }
}
