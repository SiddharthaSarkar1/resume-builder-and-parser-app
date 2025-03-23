import Image from "next/image";
import { Hero } from "./home/Hero";
import { Steps } from "./home/Steps";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-2xl bg-dot px-8 pb-32 text-gray-900 lg:px-12 relative">
      <Hero />
      <Steps />
      <div className="text-gray-700 absolute right-0 bottom-0 m-4">
        Designed & Developed by <a className="text-blue-800 text-lg" href="">Siddhartha Sarkar</a>
      </div>
    </main>
  );
}
