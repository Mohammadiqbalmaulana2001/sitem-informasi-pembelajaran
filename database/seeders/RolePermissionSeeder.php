<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'role-view',
            'role-view-info',
            'role-create',
            'role-edit',
            'role-delete',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo($permissions);

        $user = Role::create(['name' => 'user']);
        $user->givePermissionTo(['role-view-info', 'role-view']);

        $adminUser = User::factory()->create([
            'name' => 'Admin User',
            'email' => "admin@gmail.com",
            'password' => bcrypt('admin123'),
        ]);
        $adminUser->assignRole('admin');

        $normalUser = User::factory()->create([
            'name' => 'User',
            'email' => "user@gmail.com",
            'password' => bcrypt('user123'),
        ]);
        $normalUser->assignRole('user');
    }
}
