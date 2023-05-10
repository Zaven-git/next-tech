
import Image from 'next/image';

export default function About() {
  return (
    <>
      <main className="min-h-[80vh]">
        <div className='animate-area'></div>
      </main>
      <div className="flex justify-between pb-8 flex-col md:flex-row ">
        <h1 className='text-6xl m-0 pl-10 md:pr-0 pr-2'>Armenia - the Hidden Way</h1>
        <div className='flex'>
          <p className='text-base m-0 w-[400px] pr-10 pl-10 pt-10 md:pl-0 md:pt-0'>The current Republic of Armenia makes up only a small part of what the historical lands used to hold. Armenians are native to the land of the Armenian Highlands which covers over 400,000 square km.</p>
          <div className='flex flex-col items-center justify-center relative pt-8'>
            <span className='rotate-90 block text-green-900 font-medium pr-10 uppercase'>Scroll</span>
            <div className='absolute bg-white left-0 animated-hidden-item'></div>
            <Image
              src="../assets/images/icons/animated-arrow.svg"
              width={16}
              height={40}
              alt="Arrow"
            />
          </div>
        </div>
      </div>
    </>
  )
}
