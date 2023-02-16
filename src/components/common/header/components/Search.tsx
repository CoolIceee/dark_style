import { useState } from 'react'

import search from '../../../../assets/search.png'

export const Search: React.FC = () => {
  const [dropdown, setDropdown] = useState(false)

  const handleClickDropdown = (): void => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <form className='w-full relative flex self-center font-[Montserrat]  items-center border-blue-600 rounded-lg border-2'>
        <button className='w-7 ml-3 h-7 flex justify-center items-center  rounded-full'>
          <img src={search} alt='search' className='w-5 h-auto ' />
        </button>
        <input
          onClick={handleClickDropdown}
          className='w-full h-8 px-3  rounded-xl text-blue-600 focus:outline-0 text-[15px] placeholder:text-blue-600'
          placeholder='Поиск'
        />

        {dropdown && (
          <div className='absolute top-[49px] left-0 right-0 w-full  h-auto border-solid border-b-2 border-l-2 border-r-2 border-blue-100 bg-white rounded-b-lg py-2 xl:border-0 xl:shadow-lg xl:shadow-black-500'>
            я выподающее меню
          </div>
        )}
      </form>
    </>
  )
}
