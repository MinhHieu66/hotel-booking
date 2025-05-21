<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ResetCodePassword extends Model
{
    protected $table = 'reset_code_passwords';
    // public $timestamps = false;

    protected $fillable = [
        'email_address',
        'code',
        'created_at',
    ];
}
