import Tab from './Tab'
import Card from '../ui/Card'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import data from '@/data.json'

export default function TourCategory() {
  const [selectedTab, setselectedTab] = useState<Number>(1);

  const selectTab = (id: Number) => {
    setselectedTab(id)
  }
  return (
    <>
      <div className='bg-[#F8F8F8] px-24 pt-24 flex justify-center'>
        <ul className='flex jusify-between bg-white rounded-3xl'>
          {data.tabs.map((tab) => {
            return (
              <Tab selectTab={selectTab} tab={tab} isActive={selectedTab == tab.id} key={uuid()} />
            )
          })}
        </ul>
      </div>
      <div className='bg-[#F8F8F8] flex md:px-24 px-12 pb-20 flex-wrap min-h-screen md:flex-row flex-col'>
        {data.gallary.filter(e => e.category == selectedTab).map(e => {
          return (
            <Card path={e.path} title={e.title} key={uuid()} />
          )
        })}
      </div>
    </>
  )
}