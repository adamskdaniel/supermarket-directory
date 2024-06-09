import React from 'react'

export default function Starrating() {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-6 h-6 text-yellow-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.918c.969 0 1.371 1.24.588 1.81l-3.977 2.886a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.977-2.886a1 1 0 00-1.175 0l-3.977 2.886c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.043 9.1c-.783-.57-.381-1.81.588-1.81h4.918a1 1 0 00.95-.69l1.518-4.674z" />
        </svg>
      ))}
    </div>
  )
}
