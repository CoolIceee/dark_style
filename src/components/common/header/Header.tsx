import bgImg from '../../../assets/sneakers.png'

import { Basket } from './components/Basket'
import { Heart } from './components/Heart'
import { Logo } from './components/Logo'
import { Profile } from './components/Profile'
import { Search } from './components/Search'
export const Header: React.FC = () => {
  return (
    <>
      <div className='h-20 max-w-full object-cover rounded-b-3xl' style={{ backgroundImage: `url(${bgImg as string})` }}></div>
      <div className='flex h-20 px-9 max-w-full border-b-2 border-blue-100 '>
        <nav className='flex self-center w-full h-full sm:justify-between'>
          <ul className='flex w-[35%] h-full'>
            <li className='px-2 flex self-center h-12'>
              <Logo />
            </li>
          </ul>
          <ul className='flex self-center  w-[30%] h-full'>
            <li className='w-full px-2 flex self-center'>
              <Search />
            </li>
          </ul>
          <ul className='flex xl:p-0 xl:self-center xl:static xl:justify-end xl:w-[35%] xl:h-full sm:absolute sm:bottom-0 sm:h-20 sm:w-full sm:px-10 sm:left-0 sm:justify-between'>
            <li className='px-2 flex self-center w-12'>
              <Profile />
            </li>
            <li className='px-2 flex self-center w-12'>
              <Heart />
            </li>
            <li className='px-2 flex self-center w-12'>
              <Basket />
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
