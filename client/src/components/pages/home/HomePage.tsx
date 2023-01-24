import { Categories } from 'components/common/categories/Categories'
import { Header } from 'components/common/header/Header'
import { Outlet } from 'react-router-dom'

export const HomePage: React.FC = () => {
  return (
    <div className='w-full font-[Montserrat]'>
      <Header />
      <div className='w-11/12 m-auto'>
        <Categories />
        <Outlet />
      </div>
    </div>
  )
}
