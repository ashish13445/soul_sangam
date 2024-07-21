<?php

namespace App\Http\Requests\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Auth;

use Illuminate\Foundation\Http\FormRequest;
use App\Models\Ticket;
class CheckinRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'ticketCode' => ['required', 'string'],
        ];
    }

    public function authenticate()
    {
        $ticketCode = $this->input('ticketCode');

        $ticket = Ticket::where('ticket_code', $ticketCode)->where('user_id',Auth::id())->first();
        session(['ticket' => $ticket]);


        if (!$ticket) {
            throw ValidationException::withMessages([
                'ticketCode' => trans('auth.failed'),
            ]);
        }

        // Optionally, you can perform additional checks here, such as ensuring the ticket is not expired, etc.

        // Assuming authentication is successful, you might want to store ticket information in session or proceed with other actions.
    }


}
