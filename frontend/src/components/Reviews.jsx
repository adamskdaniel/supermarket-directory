import React from 'react'
import { Link } from 'react-router-dom'
import ReviewSkeleton from './ReviewSkeleton'
import Starrating from './Starrating'

export default function Reviews() {
  return (
    <div class='flex flex-col p-2 space-y-3'>
        <div>
          <Link to="/supermarket/:id">
            <div class='flex justify-between bg-slate-100 px-3 py-1 rounded-t-md'>
              <p class='w-2/3 font-semibold'>Golf Supermarket</p>
              <div class='w-1/3'><Starrating/></div>
            </div>
            <div class='bg-slate-200 px-3 py-1 rounded-b-md'>
              <p class=''>I would recommend this supermarket to anyone.</p>
              <p class='italic text-right'> - Adams</p>
            </div>
          </Link>
        </div>

        <div>
          <Link to="/supermarket/:id">
            <div class='flex justify-between bg-slate-100 px-3 py-1 rounded-t-md'>
              <p class='w-2/3 font-semibold'>Shoprite</p>
              <div class='w-1/3'><Starrating/></div>
            </div>
            <div class='bg-slate-200 px-3 py-1 rounded-b-md'>
              <p class=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quidem pariatur, nulla facere corporis, modi culpa dolores unde itaque architecto odio quas? Nostrum pariatur aliquam placeat tenetur esse alias vitae?</p>
              <p class='italic text-right'> - John</p>
            </div>
          </Link>
        </div>








        <ReviewSkeleton/>
        <ReviewSkeleton/>
        <ReviewSkeleton/>
        <ReviewSkeleton/>
        <ReviewSkeleton/>
        <ReviewSkeleton/>

    </div>
  )
}
