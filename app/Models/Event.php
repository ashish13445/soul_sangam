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
        'state',     
        'city',
        'category_id',
        'start_date',
        'end_date',
        'event_image',
        'location',
        'maps_location',
        'about',
        'terms_and_conditions',
        'guidelines',
        'price',
        'event_dates'
    ];  

    protected $casts = [
        'event_dates' => 'array', // Cast to array
    ];
    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }
}
