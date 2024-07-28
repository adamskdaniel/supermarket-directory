import React from 'react'
import picture2 from '../assets/picture2.jpg'
import Starrating from '../components/Starrating'
import { Link } from 'react-router-dom'

export default function HomepageSupermarketSkeletonUI() {
  return (
    <div class='bg-white rounded-xl h-64 shadow-lg'>
        <img class='rounded-t-xl h-3/4 object-cover w-full ' src={picture2} alt="" />
        <div class='flex flex-col py-2 px-3'>
            <Link to="##">
            <p class='font-semibold'>Golf Supermarket</p>
            <div class='flex justify-between'>
                <div class='size-24'><Starrating/></div>
                <Link to="###">
                <p>(<span>100</span>) Reviews</p>
                </Link>
            </div>
            </Link>
        </div>
    </div>
  )
}
