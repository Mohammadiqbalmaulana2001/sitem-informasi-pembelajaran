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
        Schema::create('file_materis', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('nama_file');
            $table->string('file_path');
            $table->string('tipe_file');
            $table->string('ukuran_file');
            $table->foreignUuid('materi_id')->constrained(
                table: 'materis',
                indexName: 'file_materis_materi_id_foreign'
            );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('file_materis');
    }
};
