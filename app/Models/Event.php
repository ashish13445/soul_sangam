<?php

namespace App\Models;
use App\Models\Ticket;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',     
        'city',
        'start_date',
        'end_date',
        'event_image',
        'maps_location',
        'about',
        'terms_and_conditions',
        'guidelines',
        'price'
    ];


    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
