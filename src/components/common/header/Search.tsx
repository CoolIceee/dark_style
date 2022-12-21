import { useState } from 'react'

import search from '../../../assets/search.png'

export const Search: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)

  const handleClickDropdown = (): void => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <form className=' relative flex self-center font-[Montserrat]'>
        <button className='w-10 h-auto flex justify-center items-center bg-blue-600 rounded-l-lg'>
          <img src={search} alt='search' className='w-5 h-auto ' />
        </button>
        <input
          onClick={handleClickDropdown}
          className='w-[25 0px] h-8 px-4 text-sky-900 focus:outline-0 text-base border-solid border-2 rounded-r-lg border-blue-600'
          placeholder='Поиск'
        />
        {dropdown && (
          <div className='absolute top-[49px] left-0 right-0 w-full  h-auto border-solid border-b-2 border-l-2 border-r-2 border-blue-100 bg-white rounded-b-lg py-2'>
            я выподающее меню
          </div>
        )}
      </form>
    </>
  )
}
