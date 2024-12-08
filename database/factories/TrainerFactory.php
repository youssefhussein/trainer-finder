<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Trainer>
 */
class TrainerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'trainer_id' => fake()->randomElement(User::all()->pluck('id')->toArray()),
            'day_time' => fake()->dateTimeBetween('now', '+1 year'),
            'certificate' => fake()->text(30),
            'state' => 'pending',
        ];
    }
}
