import { TabProps } from '@/types/index'

export default function Tab({ tab, selectTab, isActive }: TabProps) {
  return (
    <li
      className={`flex items-center justify-between md:px-8 px-3 py-2 cursor-pointer md:text-base text-sm ${isActive ? 'tab-item' : 'bg-white'} text-${isActive ? 'white' : 'black'} rounded-full`}
      onClick={() => selectTab(tab.id)}
    >
      <img
        className='md:pr-2'
        src={`/assets/images/icons/${tab.text.toLowerCase().replace(/\s/g, '_')}${isActive ? '_white' : ''}.svg`}
        alt={tab.text}
      />
      <span className='md:block hidden'>{tab.text}</span>
    </li>
  )
}