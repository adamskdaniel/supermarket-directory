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
                <p class='font-bold text-lg'>Personal</p>
                <p>Discover Personal</p>
                <p>Transfer & Spend</p>
                <p>Save</p>
                <p>Investments</p>
                <p>Kuda card</p>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Business</p>
                <p>Discover Business</p>
                <p>Business Registration</p>
                <p>Soft POS</p>
                <p>Invoicing</p>
                <p>Salary Loan</p>
                <p>Business API</p>
                <p>Join Kuda Business</p>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Company</p>
                <p>Blog</p>
                <p>Press</p>
                <p>Join Our Team</p>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Help</p>
            </div>

            <div class='space-y-3'>
                <p class='font-bold text-lg'>Transparency</p>
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
