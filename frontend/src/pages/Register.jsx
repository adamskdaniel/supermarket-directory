import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupUserApi } from '../api/api';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    const value = e.target.value.replace(/\s/g, '').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    setUsername(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value.replace(/\s/g, '').toLowerCase();
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value.replace(/\s/g, '');
    setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsernameError('');
    setEmailError('');
    setPasswordError('');
    setFormError('');
    setSuccessMessage('');
    setIsLoading(true); // Set loading to true

    const formData = { username, email, password };
    try {
      const response = await signupUserApi(formData);

      if (response.message === "User created successfully") {
        setSuccessMessage('Registration successful! Redirecting to login page...');
        localStorage.setItem('email', email); // Store the email
        setTimeout(() => {
          navigate('/login');
        }, 2000); // Delay for 2 seconds to show the success message
      } else {
        if (response.errors) {
          setUsernameError(response.errors.username || '');
          setEmailError(response.errors.email || '');
          setPasswordError(response.errors.password || '');
        }
        if (response.error) {
          setFormError(response.error);
        }
      }
    } catch (error) {
      console.error('There was an error registering!', error);
      setFormError('An error occurred during registration. Please try again.');
    } finally {
      setIsLoading(false); // Set loading to false after the request is done
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-indigo-300 rounded-2xl shadow-lg px-8 py-4 w-1/4 space-y-5'>
        <div className='mx-1'>
          <h2 className='text-2xl font-semibold pt-8'>Register Here</h2>
          <p>This is where you register on the supermarket</p>
        </div>

        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
          <div className='relative'>
            <input
              className='p-2 rounded-xl border w-full'
              type='text'
              name='username'
              placeholder='Enter username...'
              value={username}
              onChange={handleUsernameChange}
            />
            {usernameError && <p className='text-red-500 text-sm mt-2'>{usernameError}</p>}
          </div>

          <div className='relative'>
            <input
              className='p-2 rounded-xl border w-full'
              type='email'
              name='email'
              placeholder='Enter email...'
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className='text-red-500 text-sm mt-2'>{emailError}</p>}
          </div>

          <div className='relative'>
            <input
              className='p-2 rounded-xl border w-full'
              type='password'
              name='password'
              placeholder='Enter password...'
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className='text-red-500 text-sm mt-2'>{passwordError}</p>}
          </div>

          {formError && <p className='text-red-500 text-center mb-6'>{formError}</p>}
          {successMessage && <p className='text-green-500 text-center mb-6'>{successMessage}</p>}

          <button
            className='bg-[#0681BE] rounded-xl drop-shadow-lg py-2 text-white font-semibold hover:scale-105 duration-500 flex justify-center items-center'
            type='submit'
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? (
              <svg className='animate-spin h-5 w-5 text-white' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
            </svg>
            ) : (
              'Submit'
            )}
          </button>
        </form>

        <div className='mt-6 px-8 grid grid-cols-3 items-center text-gray-400'>
          <hr className='border-indigo-400' />
          <p className='text-center text-white'>OR</p>
          <hr className='border-indigo-400' />
        </div>

        <button
          className='bg-white border border-[#D9D9DB] shadow-lg rounded-xl py-2 mt-4 w-full text-[#0681BE] font-semibold hover:scale-105 duration-500'
          type='button'
        >
          Signup with Google
        </button>

        <div className='flex justify-between mx-8'>
          <p>Already have an account?</p>
          <a href=''><p>Login Here</p></a>
        </div>
      </div>
    </div>
  );
}

