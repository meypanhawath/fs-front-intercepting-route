import imagesData from "../../../data/image"
import PhotoModal from "./modal"

export default async function ModalPage({
   params, 
  }: { params: Promise<{id: string}> 
}) {
  const {id} = await params
  const photo = imagesData.find((img) => img.id === id)

  if (!photo) return null

  return (
    <PhotoModal
      image={photo.src}
      title={photo.title}
      description={photo.description}
    />
  )
}
