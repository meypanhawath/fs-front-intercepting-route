'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { StaticImageData } from "next/image"

type PhotoModalProps = {
  image: string | StaticImageData
  title: string
  description: string
}

export default function PhotoModal({ image, title, description }: PhotoModalProps) {
  const router = useRouter()

  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) router.back()
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}



export function ModalTest(){
  const router = useRouter()

  return (

    <>
      <Dialog
      open
      onOpenChange={(open) => {
        if (!open) router.back()
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Test TItle</DialogTitle>
          <DialogDescription>Test Description</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {/* <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg object-cover w-full"
          /> */}
          <p>Testing without image</p>
        </div>

        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
