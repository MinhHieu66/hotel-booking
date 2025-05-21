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
        Schema::create('room_class_bed_type', function (Blueprint $table) {
            $table->foreignId('room_class_id')
                ->constrained('room_class')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('bed_type_id')
                ->constrained('bed_type')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->integer("numbeds");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('room_class_bed_type');
    }
};
