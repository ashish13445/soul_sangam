<?php

namespace App\Models;
use App\Models\Ticket;
use App\Models\UserPreference;
use App\Models\Like;
use App\Models\Interaction;
use App\Models\User;
use App\Models\UserMatch;




// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Storage;

class User extends Authenticatable
{
    use HasApiTokens,HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'stripe_customer_id',
        'dob',
        'age',
        'occupation',
        'education',
        'city',
        'gender',
        'allow_dating',
        'bio',
        'religion'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function tickets()
    {
        return $this->hasMany(Ticket::class);
    }

    public function preferences()
    {
        return $this->hasOne(UserPreference::class);
    }

    public function liked()
    {
        return $this->hasMany(Like::class, 'liked_user_id');
    }
    public function likes()
    {
        return $this->hasMany(Like::class, 'user_id');
    }
    public function getProfilePhotoUrlAttribute()
    {
        return $this->profile_photo 
            ? asset('storage/profile_pictures/' . $this->profile_photo) 
            : asset('images/default.png'); // Default image if none is uploaded
    }

    public function likedInteractions()
{
    return $this->hasMany(Interaction::class, 'interactable_id')
                ->where('interactable_type', User::class)
                ->where('type', 'like');
}
public function interactions()
{
    return $this->hasMany(Interaction::class, 'user_id');
}

public function matches()
{
    return $this->hasMany(UserMatch::class);
}

public function matchedByOthers()
{
    return $this->hasMany(UserMatch::class, 'matched_user_id');
}
}
