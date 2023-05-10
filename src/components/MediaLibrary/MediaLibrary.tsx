import MediaItem from './MediaItem'

export default function MediaLibrary() {
  return (
    <main className='pb-20 bg-[#0D1522]'>
      <h1 className='md:text-6xl text-3xl text-center text-[#EAEAEA] md:px-40 px-10 py-20'>
        Armenia, country of Transcaucasia, lying just south of the great mountain range of the Caucasus
      </h1>
      <div className='flex items-center justify-between overflow-hidden image-gallary -ml-32 md:ml-0'>
        <MediaItem
          path="/assets/images/Rectangle-2324.jpeg"
          alt="Mountain"
          parentClasses='left w-[100px] h-[384px] md:block hidden'
          childClasses='w-full object-cover rounded-br-xl rounded-tr-xl'
        />
        <div className="image-wrapper-container-left">
          <MediaItem
            path="/assets/images/Rectangle-2430.jpg"
            alt="Garni"
            parentClasses=' w-[256px] h-[256px] mb-6'
            childClasses='rounded-xl'
          />
          <MediaItem
            path="/assets/images/Rectangle-2326.jpg"
            alt="Church"
            parentClasses='w-[256px] h-[192px]'
            childClasses='object-center rounded-xl w-full'
          />
        </div>
        <MediaItem
          path="/assets/images/Rectangle-2312.jpg"
          alt="Sky"
          parentClasses='centered w-[450px] h-screen'
          childClasses='rounded-xl object-center'
        />
        <div className="image-wrapper-container-right">
          <MediaItem
            path="/assets/images/Rectangle-2313.jpg"
            alt="Stone Toaster"
            parentClasses='w-[256px] h-[192px] mb-6'
            childClasses='object-center rounded-xl'
          />
          <MediaItem
            path="/assets/images/Rectangle-2323.jpg"
            alt="Mountain"
            parentClasses='w-[256px] h-[256px]'
            childClasses='rounded-xl'
          />
        </div>
        <MediaItem
          path="/assets/images/Rectangle-2327.jpg"
          alt="Ararat"
          parentClasses='right w-[128px] h-[384px]'
          childClasses='rounded-bl-xl rounded-tl-xl'
        />
      </div>
    </main >
  )
}
