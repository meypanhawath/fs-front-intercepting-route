import Image from "next/image";

export default function Home() {
  return (
    <>
    <h1 className="text-red-500 text-7xl">Homework</h1>
    <ul className="list-disc">
      <a href="./photo">
          <li className="text-3xl font-bold my-10 animate-bounce ml-10 rainbow-color">Intercepting Route [ CLICK HERE ]</li>
      </a>
    </ul>

    </>
  );
}
