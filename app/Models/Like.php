<?php

namespace App\Models;
use App\Models\User;
use App\Models\Event;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'liked_user_id',
        'event_id',
        'type'
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function likedUser()
    {
        return $this->belongsTo(User::class, 'liked_user_id');
    }

    public function event()
    {
        return $this->belongsTo(Event::class, 'event_id');
    }
}
