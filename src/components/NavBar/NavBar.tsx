import { RiMapFill, RiSearchFill, RiBookmarkFill } from 'react-icons/ri';
import { v4 as uuid } from 'uuid'
import { IconContext } from "react-icons";
import { NavBarProps } from '@/types/index'
const headingListInfo = [
  { text: 'Travel Info', classes: 'withArrow' },
  { text: 'About Armenia', classes: 'withArrow' },
  { text: 'What to see and do', classes: 'withArrow' },
  { text: 'Where to go', classes: 'withArrow' },
  { text: 'Media Library' },
  { text: 'Events', classes: 'border rounded-xl px-3' },
]

export default function NavBar({ classes }: NavBarProps) {
  return (
    <header className={`w-full flex justify-between items-center absolute top-0 px-8 py-4 md:pr-10 ${classes}`}>
      <h1 heading-text="Armenia" className='heading uppercase text-2xl text-center flex items-center justify-center relative text-[transparent]'>Armenia</h1>
      <div className='flex'>
        <ul className='hidden md:flex justify-between items-center text-white'>
          {headingListInfo.map(item => {
            return <li key={uuid()} className={`${item.classes || ''} mr-4`}>{item.text}</li>
          })}
        </ul>
        <ul className='flex justify-between items-center text-white'>
          <IconContext.Provider value={{ color: "#fff" }}>
            <li className='ml-4'><RiMapFill /></li>
            <li className='ml-4'><RiSearchFill /></li>
            <li className='ml-4'><RiBookmarkFill /></li>
          </IconContext.Provider>
          <li className='ml-4'>Eng</li>
        </ul>
      </div>
    </header>
  )
}
