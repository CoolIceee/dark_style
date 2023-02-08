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
      <div className='flex h-14 px-9 max-w-full'>
        <nav className='flex self-center w-full h-full'>
          <ul className='flex w-full h-full'>
            <li className='px-2 flex self-center h-12'>
              <Logo />
            </li>
          </ul>
          <ul className='flex self-center justify-end w-full h-full'>
            <li className='px-2 flex self-center'>
              <Search />
            </li>
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
