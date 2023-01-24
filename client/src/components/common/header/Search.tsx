import { useState } from 'react'

import search from '../../../assets/search.png'

export const Search: React.FC = () => {
  const [dropdown, setDropdown] = useState<boolean>(false)

  const handleClickDropdown = (): void => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <form className='w-[250px] relative flex self-center font-[Montserrat] border-b-2  border-blue-600 items-center'>
        <button className='w-7 h-7 flex justify-center items-center bg-blue-600 rounded-full'>
          <img src={search} alt='search' className='w-4 h-auto ' />
        </button>
        <input
          onClick={handleClickDropdown}
          className='w-[85%] h-8 px-2 text-sky-900 focus:outline-0 text-[13px]'
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
