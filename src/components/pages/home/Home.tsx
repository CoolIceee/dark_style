import { Outlet } from 'react-router-dom'

import { MainProducts } from './mainProducts/MainProducts'

export const Home: React.FC = () => {
  return (
    <>
      <MainProducts />
      <Outlet />
    </>
  )
}
