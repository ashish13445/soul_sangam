<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $fillable = [
        'type',
        'data',
        'read_at',
        'notifiable_id',
        'notifiable_type',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    // Other model properties and methods can go here
}
