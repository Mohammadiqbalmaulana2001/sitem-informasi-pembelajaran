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
        Schema::create('materis', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('modul_id')->constrained(
                table: 'modules',
                indexName: 'materis_module_id_foreign',
            );
            $table->enum('tipe', ['image', 'video', 'document'])->default('document');
            $table->string('kontent')->nullable();
            $table->string('file')->nullable();
            $table->string('link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materis');
    }
};
