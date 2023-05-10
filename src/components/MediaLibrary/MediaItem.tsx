import { MediaLibraryProps } from '@/types/index'

export default function MediaItem({ parentClasses, childClasses, alt, path }: MediaLibraryProps) {
  return (
    <div className={`${parentClasses} image-wrapper`}>
      <img
        src={path}
        alt={alt}
        className={`${childClasses} w-full h-full block object-cover transition duration-[5s] ease`}
      />
    </div>
  )
}