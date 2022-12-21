import { Basket } from './Basket'
import { Heart } from './Heart'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Search } from './Search'

export const Header: React.FC = () => {
  return (
    <div className=' flex  mx-auto  w-full h-16 px-9 border-solid border-b-2 border-blue-50'>
      <nav className=' flex self-center w-full h-10 '>
        <div>
          <Logo />
        </div>
        <ul className='flex self-center justify-end w-full h-full'>
          <li className='px-20 flex self-center'>
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
