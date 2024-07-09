import React from 'react'
import Logo from './Logo'
import { ProfileDropdown } from './ProfileDropdown'
import { Link } from 'react-router-dom';



export default function Header() {
  return (
    <div class="w-full bg-blue-200 flex justify-between place-items-center px-64 py-4">

        <div class='flex items-center'>
            <Logo class='size-10'/>
            <p class='text-3xl'>MartFind</p>
        </div>
        

        <div>
            <input class='p-2 rounded-xl border w-96' type="search" name="" id="" placeholder="find supermarket..." />
        </div>

        <div class='flex space-x-4 place-items-center'>
            <div class='space-x-2'>
                <Link to="/" className="">Home</Link>
                <Link to="/about" className="">About</Link>
                <Link to="/all-supermarket">Supermarkets</Link>
                <Link to="/supermarket/:id">Supermarket Profile</Link>
                <Link to="#">Add Supermarket</Link>
                <Link to="/user/:id">User Profile</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                

            </div>
            
            <div class="flex flex-row space-x-4">
                {/* <div class="rounded-full bg-blue-400 w-8 h-8"></div> */}
                <ProfileDropdown/>

            </div>

        </div>


    </div>
  )
}
