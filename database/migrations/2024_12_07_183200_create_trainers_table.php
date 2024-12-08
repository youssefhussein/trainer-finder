<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
//        ['location', 'sport', 'day_time', 'certificate', 'state'];
        Schema::create('trainers', function (Blueprint $table) {
            $table->foreignId('trainer_id')->constrained('users', 'id')->cascadeOnDelete();
            $table->timestamps();
            $table->date('day_time');
            $table->string('certificate');
            $table->enum('state', ['pending', 'accepted', 'blocked']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trainers');
    }
};
