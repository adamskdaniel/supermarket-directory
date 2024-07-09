import React from 'react'

export default function ReviewSkeleton() {
  return (
    <div class='animate-pulse'>

      <div class='flex justify-between bg-slate-200 px-3 py-2 gap-4 rounded-t-md'>
        <p class='h-4 w-2/3 bg-slate-100 '></p>
        <p class='h-4 w-1/3 bg-slate-100 '></p>
      </div>

      <div class='bg-slate-100 px-3 py-2 space-y-2 rounded-b-md '>
        <div class='space-y-1'>
          <p class='h-4 bg-slate-200'></p>
          <p class='h-4 w-48 bg-slate-200 '></p>
        </div>
        
        <div class='flex justify-between'>
          <p class=''></p>
          <p class='h-4 w-32 bg-slate-200 '></p>
        </div>
      </div>




    </div>

  )
}
