import React from 'react'
import picture1 from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import picture3 from '../assets/picture3.jpg'
import Starrating from '../components/Starrating'
import Button from '../components/Button'

export default function Supermarkets() {
  return (
    <div>
      
        <div class='grid grid-cols-3 mx-64 my-24 gap-8'>

            <div class='flex justify-end '>
              <div class='border-8 w-96 h-96 p-4 '>
                <p>Filter</p>
                <p>Lagos</p>

              </div>

            </div>

            <div class='col-span-2 flex flex-wrap gap-8'>

              <div class='bg-white rounded-xl size-96 shadow-lg '>
                <img class='rounded-t-xl h-3/5 object-cover w-full ' src={picture1} alt="" />
                <div class='px-4 py-3 space-y-0.5'>
                  <h2 class='font-bold text-xl'>Golf Supermarket</h2>
                  <p class='flex '>Address:<span class='ml-2'>44, Adeola Hopewell, Victoria Island</span></p>
                  <p class='flex'>Rating:<span class='ml-2'><Starrating/></span></p>
                </div>
                <Button/>
              </div>


              <div class=' bg-white rounded-xl w-96 h-96 shadow-lg '>
                <img class='rounded-t-xl h-3/5 object-cover w-full ' src={picture2} alt="" />
                <div class='px-4 py-3 space-y-0.5'>
                  <h2 class='font-bold text-2xl'>Shoprite</h2>
                  <p class='flex'>Address:<span class='ml-2'>Ikeja City Mall, Alausa Ikeja</span></p>
                  <p class='flex'>Rating:<span class='ml-2'><Starrating/></span></p>
                </div>
                <Button/>
              </div>


              <div class=' bg-white rounded-xl w-96 h-96 shadow-lg '>
                <img class='rounded-t-xl h-3/5 object-cover w-full ' src={picture3} alt="" />
                <div class='px-4 py-3 space-y-0.5'>
                  <h2 class='font-bold text-2xl'>Ajah New Market</h2>
                  <p class='flex'>Address:<span class='ml-2'>44, Ajah central mall, Ajah Roundabout.</span></p>
                  <p class='flex'>Rating:<span class='ml-2'><Starrating/></span></p>
                </div>
                <Button/>
              </div>

              <div class='bg-slate-200 rounded-xl size-96 animate-pulse'></div>
              <div class='bg-slate-200 rounded-xl size-96 animate-pulse'></div>
              <div class='bg-slate-200 rounded-xl size-96 animate-pulse'></div>
              <div class='bg-slate-200 rounded-xl size-96 animate-pulse'></div>
             
            </div>


        </div>
        
      
    </div>
  )
}
