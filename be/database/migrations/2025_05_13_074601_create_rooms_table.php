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
        Schema::create('rooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId('floor_id')
                ->constrained('floors')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('room_class_id')
                ->constrained('room_class')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->foreignId('room_status_id')
                ->constrained('room_status')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->integer("room_number");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rooms');
    }
};
