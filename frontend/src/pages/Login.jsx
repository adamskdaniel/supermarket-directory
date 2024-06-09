import React from 'react'
import picture1 from '../assets/picture1.jpg'

export default function Login() {
  return (
    <div class='min-h-screen flex items-center justify-center'>

        <div class='bg-indigo-300 rounded-2xl shadow-lg px-8 py-4 w-1/4 space-y-5 '>

            <div class='mx-1'>
                <h2 class='text-2xl font-semibold pt-8'>Login Here</h2>
                <p class=''>This is where you login to the supermarket</p>
            </div>
 
            <form action="" class='flex flex-col gap-3 ' >
                <input class='p-2 rounded-xl border' type="Email" name="Email" placeholder="enter email..."/>
                <input class='p-2 rounded-xl border w-full' type="Password"  name="Password" placeholder="enter password..." />
                <input  class="bg-[#0681BE] rounded-xl drop-shadow-lg py-2 text-white font-semibold hover:scale-105 duration-500" type="button" value="Login" />
            </form>

            <div class="mt-6 px-8 grid grid-cols-3 items-center text-gray-400">
                <hr class="border-indigo-400"/>
                <p class='text-center text-white' >OR</p>
                <hr class="border-indigo-400"/>
            </div>

            <button class='bg-white border border-[#D9D9DB] shadow-lg rounded-xl py-2 mt-4 w-full  text-[#0681BE] font-semibold hover:scale-105 duration-500' type="button">Login with Google</button>

            <div class='flex justify-between mx-8 '>
                <p>Forget Password</p>
                <p>Register Here</p>
            </div>
           

        </div>


       

    </div>
  )
}
