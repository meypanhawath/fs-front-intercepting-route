import { faHandPointRight } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1 className="text-green-800 text-7xl font-bold ml-10 my-10">Assignment</h1>
      <ul className="">
        <a
          href="./photo"
          className="flex items-center gap-3 text-3xl font-bold my-10 ml-10 animate-bounce rainbow-color"
        >
          <FontAwesomeIcon icon={faHandPointRight} height={50} className="text-4xl" />
          <span>Intercepting Route [ NO SCAM ]</span>
        </a>
      </ul>
    </>
  );
}
