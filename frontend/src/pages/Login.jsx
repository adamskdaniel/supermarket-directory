import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signinUserApi } from '../api/api';
import picture1 from '../assets/picture1.jpg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      localStorage.removeItem('email'); // Optionally remove the email after autofilling
    }
  }, []);

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
    setEmailError('');
    setPasswordError('');
    setFormError('');
    setIsLoading(true);

    const formData = { email, password };
    try {
      const response = await signinUserApi(formData);

      if (response.message === "Login successful") {
        // Assuming the response contains a user object with an ID
        const userId = response.user.id;
        navigate(`/user/${userId}`);
      } else {
        // Handle errors (example structure, adjust according to your API)
        if (response.errors) {
          setEmailError(response.errors.email || '');
          setPasswordError(response.errors.password || '');
        }
        if (response.error) {
          setFormError(response.error);
        }
      }
    } catch (error) {
      console.error('There was an error logging in!', error);
      setFormError('An error occurred during login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-indigo-300 rounded-2xl shadow-lg px-8 py-4 w-1/4 space-y-5'>
        <div className='mx-1'>
          <h2 className='text-2xl font-semibold pt-8'>Login Here</h2>
          <p>This is where you login to the supermarket</p>
        </div>
 
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
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

          <button
            className='bg-[#0681BE] rounded-xl drop-shadow-lg py-2 text-white font-semibold hover:scale-105 duration-500 flex justify-center items-center'
            type='submit'
            disabled={isLoading}
          >
            {isLoading ? (
              <svg className='animate-spin h-5 w-5 text-white' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"></path>
              </svg>
            ) : (
              'Login'
            )}
          </button>
        </form>

        <div className='mt-6 px-8 grid grid-cols-3 items-center text-gray-400'>
          <hr className='border-indigo-400'/>
          <p className='text-center text-white'>OR</p>
          <hr className='border-indigo-400'/>
        </div>

        <button
          className='bg-white border border-[#D9D9DB] shadow-lg rounded-xl py-2 mt-4 w-full text-[#0681BE] font-semibold hover:scale-105 duration-500'
          type='button'
        >
          Login with Google
        </button>

        <div className='flex justify-between mx-8'>
          <p>Forget Password</p>
          <p>Register Here</p>
        </div>
      </div>
    </div>
  );
}
