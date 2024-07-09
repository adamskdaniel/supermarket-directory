import React from 'react'
import dummypicture from '../assets/dummypicture.png'


export default function HomepageSupermarketSkeleton() {
  return (
    <div class='bg-slate-100 rounded-xl h-64 shadow-lg animate-pulse'>
        <img class='rounded-t-xl h-3/4 object-cover w-full' src={dummypicture} alt="" />
        <div class='flex flex-col  py-3 px-3'>
            <a class='space-y-2' href="#">
                <p class='h-4 w-3/5 bg-slate-200 font-semibold'></p>
                <div class='flex justify-between'>
                  <div class='h-4 w-24 bg-slate-200 '></div>
                  <a href="##">
                    <p class='h-4 w-24 bg-slate-200 '></p>
                  </a>
                </div>
            </a>
        </div>
      
    </div>
  )
}
