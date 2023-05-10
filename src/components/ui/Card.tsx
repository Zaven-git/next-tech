import { CardProps } from '@/types/index'

export default function Card({ path, title, summary, fullscreen }: CardProps) {
  return (
    <div className={`pt-10 flex flex-col  mr-6 animated-card cursor-pointer relative ${summary ? 'paragraph-animation' : ''} ${fullscreen ? 'w-full' : 'md:w-[31%] w-full'}`}>
      {summary ?
        <p className="hidden absolute p-3">{summary}</p>
        : <></>}
      <img src={`${path}`} alt={title} className="h-[300px] object-cover rounded-tr-xl rounded-tl-xl" />
      <p className="bg-white rounded-br-xl rounded-bl-xl p-3 text-e md:text-base md:text-xl text-sm h-20">{title}</p>
    </div>
  )
}