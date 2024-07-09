import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <div class='flex flex-col bg-slate-300 py-10'>

        <div class='grid grid-cols-6 mx-64'>

            <div>
                <Logo/>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>About Us</p>
                <div class='flex flex-col'>
                    <a href="">About MartFind</a>
                    <a href="">We are hiring!</a>
                    <a href="">Terms & Condition</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Billing Policy</a>
                    <a href="">Cookie Policy</a>
                    <a href="">Copyright Infrigement Policy</a>
                </div>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Support</p>
                <a href="">support@martfind.ng</a>
                <a href="">Safety Tips</a>
                <a href="">Contact Us</a>
                <a href="">FAQ</a>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Company</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Join Our Team</p>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Our Resources</p>
                <a href="">Blog</a>
                <a href="">Facebook</a>
                <a href="">Instagram</a>
                <a href="">Twitter</a>
                <a href="">YouTube</a>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Hot Links</p>
                <a href="">MartFind Africa</a>
            </div>
    

        </div>

        <div class='mx-64 mt-12'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam inventore incidunt aspernatur quod asperiores necessitatibus, quos error iure ipsum perspiciatis fuga, atque magnam dignissimos assumenda, excepturi distinctio placeat non!</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur in, consequatur, hic ex iusto blanditiis dicta fugit, incidunt, error, eos ipsam unde quam! Beatae, esse labore.
            Quae, voluptate nostrum provident enim, rem necessitatibus assumenda in minus accusamus non autem nulla dolore voluptas impedit sapiente tenetur odio esse aliquam. Modi repellendus unde, itaque ex deserunt eveniet culpa.
            Nemo delectus veniam nostrum fuga hic minima excepturi at magnam, quis itaque quasi illo quia officia in quaerat ducimus incidunt aliquid magni non! Quos totam saepe aliquam blanditiis vero voluptatum.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nam inventore incidunt aspernatur quod asperiores necessitatibus, quos error iure ipsum perspiciatis fuga, atque magnam dignissimos assumenda, excepturi distinctio placeat non!</p>
           
        </div>

    </div>
  )
}
