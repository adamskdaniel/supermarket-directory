import React, { useEffect, useState }  from 'react'
import { getSupermarketsApi } from '../api/api'
import picture2 from '../assets/picture2.jpg'
import dummypicture from '../assets/dummypicture.png'
import Starrating from '../components/Starrating'
import Reviews from '../components/Reviews'
import { Link } from 'react-router-dom'
import HomepageSupermarketSkeleton from '../components/HomepageSupermarketSkeleton'
import HomepageSupermarketSkeletonUI from '../components/HomepageSupermarketSkeletonUI'



export default function Homepage() {
  const [supermarkets, setSupermarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supermarketsData = await getSupermarketsApi();
        if (supermarketsData && supermarketsData.supermarkets) {
          setSupermarkets(supermarketsData.supermarkets);
        } else {
          console.error('unexpected API response', supermarketsData);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const renderSkeletons = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <HomepageSupermarketSkeleton key={index} />
    ));
  };


  return (
    <div class='flex flex-col bg-white'>

      <div class='grid grid-cols-4 mx-64 my-12 gap-4'>
        <div class='row-span-7 space-y-3'>
          <h2 class='font-bold text-xl p-4 mx-2 bg-slate-200'>Latest Reviews</h2>
          <Reviews/> 
        </div>

        <div class='h-64 col-span-3 flex gap-4'>
          <img class='h-64 w-3/4 object-cover  ' src={dummypicture} alt="" />

          <div class='h-full w-1/4 bg-indigo-400 rounded-xl p-6 flex flex-col items-center justify-center gap-4 '>
            <p class='text-2xl text-center text-white'>Advertise your supermarket</p>

            <svg class='size-8' data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"></path>
            </svg>

            
            

          </div>

        </div>

        <div class='col-span-3 px-2'>
          <h2 class='font-bold text-xl'>Trending Supermarkets</h2>
        </div>


        <div class='col-span-3 grid grid-cols-3 gap-4'>

          
          {supermarkets.length > 0 ? (
            supermarkets.map(supermarket => {
              const {name, _id, supermarketPictures} = supermarket;
              console.log('Supermarket ID:', _id);
              console.log('Supermarket Name:', name);
              console.log('Supermarket Image:', supermarketPictures[1]);
            
                
              
            return (
              <div key={_id} class='bg-white rounded-xl h-64 shadow-lg'>
                <img class='rounded-t-xl h-3/4 object-cover w-full ' src={supermarketPictures[1] || dummypicture} alt={name} />
                <div class='flex flex-col py-2 px-3'>
                  <Link to={`/supermarket/${_id}`}>
                    <p class='font-semibold'>{name}</p>
                    <div class='flex justify-between'>
                      <div class='size-24'><Starrating/></div>
                      <Link to={`/supermarket/${_id}`}>
                        <p>(<span>100</span>) Reviews</p>
                      </Link>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })

        ) : (
          <>
            <HomepageSupermarketSkeletonUI/>
            {renderSkeletons(13)}
          </>
         
        )}
       </div>
      </div>    
    </div>
  )
}
