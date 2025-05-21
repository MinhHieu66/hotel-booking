<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AuthRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'fullname'      => 'required|string|max:255',
            'email_address' => 'required|email|max:255|unique:guests,email_address',
            'password'      => 'required|string|min:6|confirmed',
        ];
    }

    public function messages(): array
    {
        return [
            'fullname.required'      => 'Bạn chưa nhập họ và tên.',
            'email_address.required' => 'Bạn chưa nhập email.',
            'email_address.email'    => 'Email chưa đúng định dạng. Vd: hieu123@gmail.com.',
            'email_address.unique'   => 'Email đã tồn tại trong hệ thống.',
            'password.required'      => 'Bạn chưa nhập mật khẩu.',
            'password.min'           => 'Mật khẩu phải có ít nhất 6 ký tự.',
            'password.confirmed'     => 'Xác nhận mật khẩu không khớp.',
        ];
    }
}
