import { Basket } from './Basket'
import { Heart } from './Heart'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Search } from './Search'

export const Header: React.FC = () => {
  return (
    <div className=' flex  mx-auto  w-auto h-16 px-9 border-b-2 border-blue-100'>
      <nav className=' flex self-center w-full h-10 '>
        <ul className='flex self-center justify-start w-full h-full'>
          <li className='px-2 flex self-center'>
            <Logo />
          </li>
          <li className='px-10 flex self-center'></li>
        </ul>
        <ul className='flex self-center justify-end w-full h-full'>
          <li className='px-2 flex self-center'>
            <Search />
          </li>
          <li className='px-2 flex self-center'>
            <Profile />
          </li>
          <li className='px-2 flex self-center'>
            <Heart />
          </li>
          <li className='px-2 flex self-center'>
            <Basket />
          </li>
        </ul>
      </nav>
    </div>
  )
}
