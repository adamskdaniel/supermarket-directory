import React, {useState, useEffect} from 'react'
import picture1 from '../assets/picture1.jpg'
import Starrating from '../components/Starrating'
import Button from '../components/Button'
import Reviews from '../components/Reviews'
import { useParams } from 'react-router-dom'
import { getAllSupermarket, getSupermarketsApi, getSupProfile } from '../api/api'



export default function Supermarketprofile() {
 const {id} =useParams()

    const [allState, setAlls]= useState(null)


    useEffect(()=>{
      const getAll = async()=>{
        let allss =await getSupProfile(id)
        console.log(id)
        console.log(allss)
        setAlls(allss.supermarket)

      }


      getAll()
    }, [id])

    if (!allState) {
        return <div>Loading...</div>;
    }


  return (
    <div class='mx-64 my-24 space-y-8'>
        <div class='grid grid-cols-4 divide-y divide-x divide-white'>
            <img class='row-span-3 col-span-2 h-96 object-cover' src={allState.supermarketPictures[0]}alt="" /> 
            <img class='h-48 object-cover' src={allState.supermarketPictures[3]} alt="" /> 
            <img class='h-48 object-cover ' src={allState.supermarketPictures[2]} alt="" /> 
            <img class='h-48 object-cover ' src={allState.supermarketPictures[1]} alt="" /> 
            <img class='h-48 object-cover' src={allState.supermarketPictures[4]} alt="" />             
        </div>

        <div class='grid grid-cols-5'>

            <div class='col-span-4  mr-24 space-y-6'>

                <div class='space-y-2' >
                    <h2 class='text-2xl font-bold '>About Supermarket</h2>
            {allState.name}
        {allState.description}
        <img src= {allState.supermarketPictures[0]} alt="" />
       
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque tenetur ad exercitationem rerum praesentium inventore nihil et aliquam quibusdam obcaecati corporis, laborum hic, placeat minus fuga, quia quasi amet?
                    Adipisci molestiae eveniet magnam. Temporibus fuga inventore sed error, repudiandae eum sequi facere dolore eligendi labore maxime voluptates tempora aperiam dicta, repellendus expedita adipisci fugit quos culpa iure aliquam recusandae!
                    Odio, nisi doloribus? Ipsa molestiae laudantium et perferendis voluptates aut ducimus corrupti doloribus, minima accusamus sequi ad sit reiciendis officiis quae deserunt dignissimos beatae praesentium rem. Dolor veritatis ratione atque?
                    adipisci iure sit nulla laudantium quasi praesentium deserunt nostrum sapiente, aliquid aliquam, vero provident ea commodi sint eveniet ipsam explicabo. Amet, eveniet vel vitae non ad velit similique?
                    Quos, suluta hic dicta maiores aut culpa est delectus nesciunt omnis placeat possimus natus vitae quasi sunt, consequuntur, optio minus numquam! Quidem, facere! Voluptatibus et ea doloremque quos.
                    Natus beatae dignissimos, perferendis error accusantium quod ipsam atque cum ratione fuga. Sequi, consectetur voluptas consequatur odit laboriosam minus quae possimus ipsum, quidem, rerum praesentium! Nemo reiciendis eius quos magnam.</p>
                </div>

                <div class='space-y-2 ' >
                    <h2 class='text-2xl font-bold '>About Supermarket</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque tenetur ad exercitationem rerum praesentium inventore nihil et aliquam quibusdam obcaecati corporis, laborum hic, placeat minus fuga, quia quasi amet?
                    Adipisci molestiae eveniet magnam. Temporibus fuga inventore sed error, repudiandae eum sequi facere dolore eligendi labore maxime voluptates tempora aperiam dicta, repellendus expedita adipisci fugit quos culpa iure aliquam recusandae!
                    Odio, nisi doloribus? Ipsa molestiae laudantium et perferendis voluptates aut ducimus corrupti doloribus, minima accusamus sequi ad sit reiciendis officiis quae deserunt dignissimos beatae praesentium rem. Dolor veritatis ratione atque?
                    adipisci iure sit nulla laudantium quasi praesentium deserunt nostrum sapiente, aliquid aliquam, vero provident ea commodi sint eveniet ipsam explicabo. Amet, eveniet vel vitae non ad velit similique?
                    Quos, suluta hic dicta maiores aut culpa est delectus nesciunt omnis placeat possimus natus vitae quasi sunt, consequuntur, optio minus numquam! Quidem, facere! Voluptatibus et ea doloremque quos.
                    Natus beatae dignissimos, perferendis error accusantium quod ipsam atque cum ratione fuga. Sequi, consectetur voluptas consequatur odit laboriosam minus quae possimus ipsum, quidem, rerum praesentium! Nemo reiciendis eius quos magnam.</p>
                </div>


                <div class='space-y-2 ' >
                    <h2 class='text-2xl font-bold '>About Supermarket</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque tenetur ad exercitationem rerum praesentium inventore nihil et aliquam quibusdam obcaecati corporis, laborum hic, placeat minus fuga, quia quasi amet?
                    Adipisci molestiae eveniet magnam. Temporibus fuga inventore sed error, repudiandae eum sequi facere dolore eligendi labore maxime voluptates tempora aperiam dicta, repellendus expedita adipisci fugit quos culpa iure aliquam recusandae!
                    Odio, nisi doloribus? Ipsa molestiae laudantium et perferendis voluptates aut ducimus corrupti doloribus, minima accusamus sequi ad sit reiciendis officiis quae deserunt dignissimos beatae praesentium rem. Dolor veritatis ratione atque?
                    adipisci iure sit nulla laudantium quasi praesentium deserunt nostrum sapiente, aliquid aliquam, vero provident ea commodi sint eveniet ipsam explicabo. Amet, eveniet vel vitae non ad velit similique?
                    Quos, suluta hic dicta maiores aut culpa est delectus nesciunt omnis placeat possimus natus vitae quasi sunt, consequuntur, optio minus numquam! Quidem, facere! Voluptatibus et ea doloremque quos.
                    Natus beatae dignissimos, perferendis error accusantium quod ipsam atque cum ratione fuga. Sequi, consectetur voluptas consequatur odit laboriosam minus quae possimus ipsum, quidem, rerum praesentium! Nemo reiciendis eius quos magnam.</p>
                </div>

                <div class='space-y-2 ' >
                    <h2 class='text-2xl font-bold '>Reviews</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque tenetur ad exercitationem rerum praesentium inventore nihil et aliquam quibusdam obcaecati corporis, laborum hic, placeat minus fuga, quia quasi amet?
                    Adipisci molestiae eveniet magnam. Temporibus fuga inventore sed error, repudiandae eum sequi facere dolore eligendi labore maxime voluptates tempora aperiam dicta, repellendus expedita adipisci fugit quos culpa iure aliquam recusandae!
                    Odio, nisi doloribus? Ipsa molestiae laudantium et perferendis voluptates aut ducimus corrupti doloribus, minima accusamus sequi ad sit reiciendis officiis quae deserunt dignissimos beatae praesentium rem. Dolor veritatis ratione atque?
                    adipisci iure sit nulla laudantium quasi praesentium deserunt nostrum sapiente, aliquid aliquam, vero provident ea commodi sint eveniet ipsam explicabo. Amet, eveniet vel vitae non ad velit similique?
                    Quos, suluta hic dicta maiores aut culpa est delectus nesciunt omnis placeat possimus natus vitae quasi sunt, consequuntur, optio minus numquam! Quidem, facere! Voluptatibus et ea doloremque quos.
                    Natus beatae dignissimos, perferendis error accusantium quod ipsam atque cum ratione fuga. Sequi, consectetur voluptas consequatur odit laboriosam minus quae possimus ipsum, quidem, rerum praesentium! Nemo reiciendis eius quos magnam.</p>
                </div>
                
                
                
                
        

            </div>


            <div class='flex flex-col items-center justify-between gap-4 h-1/2'>
                <div>
                    <img class=' bg-slate-400 size-64 object-cover ' src={picture1} alt="" />
                    <p>Uploaded by: <span class='text-xl'>First Name</span></p>
                </div>        

                <div class='gap-4'>
                    <h2 class='font-bold text-xl p-4 mx-2 bg-slate-200'>Latest Reviews</h2>
                    <Reviews/> 
                </div>




            </div>

        </div>
      
    </div>
  )
}
