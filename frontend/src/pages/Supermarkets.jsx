import React, { useState, useEffect } from 'react';
import { getAllSupermarket } from '../api/api';
import picture1 from '../assets/picture1.jpg';
import dummypicture from '../assets/dummypicture.png'
import Starrating from '../components/Starrating';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import SupermarketsSkeleton from '../components/SupermarketsSkeleton';

export default function Supermarkets() {
  const [supermarkets, setSupermarkets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const supermarketsData = await getAllSupermarket();
        if (supermarketsData && supermarketsData.supermarkets) {
          setSupermarkets(supermarketsData.supermarkets);
        } else {
          console.error('Unexpected API response', supermarketsData);
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const renderSkeletons = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <SupermarketsSkeleton key={index} />
    ));
  };

  return (
    <div>
      <div class='grid grid-cols-3 mx-64 my-24 gap-8'>
        <div class='flex justify-end'>
          <div class='border-8 w-96 h-96 p-4'>
            <p>Filter</p>
            <p>Lagos</p>
          </div>
        </div>

        <div class='col-span-2 flex flex-wrap gap-8'>
          {supermarkets.length > 0 ? (
            supermarkets.map((supermarket) => {
              const { name, location, _id, supermarketPictures } = supermarket;

              return (
                <div key={_id} className='bg-white rounded-xl size-96 shadow-lg'>
                  <img className='rounded-t-xl h-3/5 object-cover w-full' src={supermarketPictures[1] || dummypicture} alt={name} />
                  <div className='px-4 py-3 space-y-0.5'>
                    <h2 className='font-bold text-xl'>{name}</h2>
                    <p className='flex'>Address:<span className='ml-2'>{location}</span></p>
                    <p className='flex'>Rating:<span className='ml-2'><Starrating /></span></p>
                  </div>
                  <Link to={`/supermarket/${_id}`}>
                    <Button />
                  </Link>
                </div>
              );
            })
          ) : (
            <>
              <div class='bg-white rounded-xl size-96 shadow-lg'>
                <img class='rounded-t-xl h-3/5 object-cover w-full' src={picture1} alt="Golf Supermarket" />
                <div class='px-4 py-3 space-y-0.5'>
                  <h2 class='font-bold text-xl'>Golf Supermarket</h2>
                  <p class='flex'>Address:<span class='ml-2'>44, Adeola Hopewell, Victoria Island</span></p>
                  <p class='flex'>Rating:<span class='ml-2'><Starrating /></span></p>
                </div>
                <Button />
              </div>
              {renderSkeletons(3)}
            </>
          )}
        </div>
      </div>
    </div>
  );
}




// import React, {useState, useEffect} from 'react'
// import picture1 from '../assets/picture1.jpg'
// import picture2 from '../assets/picture2.jpg'
// import picture3 from '../assets/picture3.jpg'
// import Starrating from '../components/Starrating'
// import Button from '../components/Button'
// import { getAllSupermarket } from '../api/api'
// import { Link } from 'react-router-dom'
// import SupermarketsSkeleton from '../components/SupermarketsSkeleton'


// export default function Supermarkets() {
//     const [allState, setAlls]= useState([])


//     useEffect(()=>{
//       const getAll = async()=>{
//         let allss =await getAllSupermarket()
//         console.log(allss.supermarkets)
//         setAlls(allss.supermarkets)

//       }


//       getAll()
//     }, [])

//   return (
//     <div>
      
//         <div class='grid grid-cols-3 mx-64 my-24 gap-8'>

//             <div class='flex justify-end '>
//               <div class='border-8 w-96 h-96 p-4 '>
//                 <p>Filter</p>
//                 <p>Lagos</p>

//               </div>

//             </div>

//             <div class='col-span-2 flex flex-wrap gap-8'>
//             {allState && allState.length > 0 ? allState.map((sup, index) => {
//                         const { name, location, _id, supermarketPictures } = sup;

//                         console.log(name)
//                         console.log(supermarketPictures[1])

            

//                         return (
//                             <div key={index} className='bg-white rounded-xl size-96 shadow-lg'>
//                                 <img className='rounded-t-xl h-3/5 object-cover w-full' src={supermarketPictures[1]} alt={name} />
//                                 <div className='px-4 py-3 space-y-0.5'>
//                                     <h2 className='font-bold text-xl'>{name}</h2>
//                                     <p className='flex'>Address:<span className='ml-2'>{location}</span></p>
//                                     <p className='flex'>Rating:<span className='ml-2'><Starrating /></span></p>
//                                 </div>
//                                 <Link to={`/supermarket/${_id}`}>
//                                 <Button />
//                                 </Link>
//                             </div>
//                         );
//                     }) : (

//           <>
//           <div class='bg-white rounded-xl size-96 shadow-lg '>
//             <img class='rounded-t-xl h-3/5 object-cover w-full ' src={picture1} alt="" />
//             <div class='px-4 py-3 space-y-0.5'>
//               <h2 class='font-bold text-xl'>Golf Supermarket</h2>
//               <p class='flex '>Address:<span class='ml-2'>44, Adeola Hopewell, Victoria Island</span></p>
//               <p class='flex'>Rating:<span class='ml-2'><Starrating/></span></p>
//             </div>
//             <Button/>
//           </div>
//           <SupermarketsSkeleton/>
//           <SupermarketsSkeleton/>
//           <SupermarketsSkeleton/>
//           <SupermarketsSkeleton/>

        
//           </>
//         )}
//        </div>
//       </div>    
//     </div>
//   )
// }
