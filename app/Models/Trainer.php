<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trainer extends Model
{
    protected $fillable = ['location', 'sport', 'day_time', 'certificate', 'state'];
    /** @use HasFactory<\Database\Factories\TrainerFactory> */
    use HasFactory;
}
