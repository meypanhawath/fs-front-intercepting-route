import imagesData from "../../data/image"
import Image from "next/image"

export default async function PhotoDetail({
  params,
}: {
  params: Promise<{id: string}>
}) {
  const {id} = await params
  const photo = imagesData.find((img) => img.id === id)

  if (!photo)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">
          Photo not found
        </p>
      </div>
    )

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-7xl font-bold mb-6">
        {photo.title}
      </h1>

      <div className="overflow-hidden rounded-xl shadow-lg">
        <Image
          src={photo.src}
          alt={photo.title}
          width={1000}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="mt-6 text-2xl text-gray-600 leading-relaxed">
        {photo.description}
      </p>
    </div>
  )
}
