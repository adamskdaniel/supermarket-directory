import React from 'react'
import Logo from './Logo'

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
            <div class='flex space-x-4'>
                <p>Home</p>
                <p>About</p>
                <p>Add Supermarket</p>
                

            </div>
            
            <div class="flex flex-row space-x-4">
                <div class="rounded-full bg-blue-400 w-8 h-8"></div>
                <div class="rounded-full bg-blue-400 w-8 h-8"></div>
                <div class="rounded-full bg-blue-400 w-8 h-8"></div>
            </div>

        </div>


    </div>
  )
}
