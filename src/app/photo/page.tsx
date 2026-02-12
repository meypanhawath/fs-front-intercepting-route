'use client'

import Link from "next/link"
import Image from "next/image"
import imagesData from "../data/image"

export default function PhotoPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Photos</h1>

      <div className="grid grid-cols-3 gap-6">
        {imagesData.map((img) => (
          <Link
            key={img.id}
            href={`/photo/${img.id}`} 
            className="cursor-pointer group"
          >
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <Image
                src={img.src}
                alt={img.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h2 className="mt-2 font-semibold text-center">{img.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  )
}
