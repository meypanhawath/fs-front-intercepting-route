
import { StaticImageData } from "next/image";
import image1 from "../photo/image/image1.jpg"
import image2 from "../photo/image/image2.jpg"
import image3 from "../photo/image/image3.jpg"
import image4 from "../photo/image/image4.jpg"
import image5 from "../photo/image/image5.jpg"
import image6 from "../photo/image/image6.jpg"

export type ImageData = {
  id: string;
  src: StaticImageData;        
  title: string;
  description: string;
}

const imagesData: ImageData[] = [
  {
    id: "1",
    src: image1,
    title: "Hello",
    description: "Peepo is outsude the door",
  },
  {
    id: "2",
    src: image2,
    title: "Cooking the code",
    description: "code + coke combo",
  },
  {
    id: "3",
    src: image3,
    title: "Night coding",
    description: "No sleep, One night policy",
  },
  {
    id: "4",
    src: image4,
    title: "Mental Cry",
    description: "When life hurts, Coffee heals.",
  },
  {
    id: "5",
    src: image5,
    title: "Healing Music",
    description: "Music 24/7",
  },
  {
    id: "6",
    src: image6,
    title: "Still need music",
    description: "Music 24/7",
  },
];

export default imagesData;
