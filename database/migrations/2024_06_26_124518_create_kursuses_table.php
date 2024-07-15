<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('kursuses', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignId('user_id')->constrained(
                table: 'users',
                indexName: 'kursuses_user_id_foreign',
            );
            $table->foreignUuid('kategori_id')->constrained(
                table: 'kategoris',
                indexName: 'kursuses_kategoris_id_foreign',
            );
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('cover')->nullable();
            $table->text('deskripsi')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('kursuses');
    }
};
