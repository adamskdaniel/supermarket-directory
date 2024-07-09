import React, {useState, useEffect} from 'react'
import picture1 from '../assets/picture1.jpg'
import picture2 from '../assets/picture2.jpg'
import picture3 from '../assets/picture3.jpg'
import Starrating from '../components/Starrating'
import Button from '../components/Button'
import { getAllSupermarket } from '../api/api'
import { Link } from 'react-router-dom'


export default function Supermarkets() {
    const [allState, setAlls]= useState([])


    useEffect(()=>{
      const getAll = async()=>{
        let allss =await getAllSupermarket()
        console.log(allss.supermarkets)
        setAlls(allss.supermarkets)

      }


      getAll()
    }, [])

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
            {allState && allState.length > 0 ? allState.map((sup, index) => {
                        const { name, location ,_id } = sup;
                        return (
                            <div key={index} className='bg-white rounded-xl size-96 shadow-lg'>
                                <img className='rounded-t-xl h-3/5 object-cover w-full' src={sup.supermarketPictures[0]} alt={name} />
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
                    }) : <h1>No data</h1>}
              <div class='bg-white rounded-xl size-96 shadow-lg '>
                <img class='rounded-t-xl h-3/5 object-cover w-full ' src={picture1} alt="" />
                <div class='px-4 py-3 space-y-0.5'>
                  <h2 class='font-bold text-xl'>Golf Supermarket</h2>
                  <p class='flex '>Address:<span class='ml-2'>44, Adeola Hopewell, Victoria Island</span></p>
                  <p class='flex'>Rating:<span class='ml-2'><Starrating/></span></p>
                </div>
                <Button/>
              </div>

{/* 
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
              <div class='bg-slate-200 rounded-xl size-96 animate-pulse'></div> */}
             
            </div>


        </div>
        
      
    </div>
  )
}
