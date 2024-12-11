import Image from "next/image";
import MouseEffect from "../components/MouseEffect";

export default function Home() {
  return (
    <main className="">



<section className="relative h-[90vh] container mx-auto rounded-3xl">
      <div className="absolute inset-0 w-full h-full rounded-3xl">
        <div className="absolute inset-0 z-10   bg-dark/50 rounded-3xl">        <img src="/hero.svg" alt="Business meeting" className="w-full h-full rounded-3xl object-cover" />
        </div>

      </div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div className="max-w-4xl mx-auto" data-aos="fade-up"data-aos-duration="2000">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:leading-normal  ">
            Guiding You Through Your <br className="hidden lg:block" />
            Immigration Journey With Confidence
          </h1>
          <p className="text-lg md:text-xl text-white/80 my-8">
            We're dedicated to helping make your American dream a reality
          </p>
          <button
            className="bg-gradient-to-r from-[#CEAC21] to-[#B5951A] text-white py-3 px-8 rounded-full transition-all duration-300 shadow-[0px_3.84615px_38.4615px_rgba(55,80,116,0.2)]">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>


      {/* grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] */}
      <MouseEffect />
      sewar
    </main>
  );
}



