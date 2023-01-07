import { NavLink } from 'react-router-dom'

import basketImg from '../../../assets/basket.png'

export const Basket: React.FC = () => {
  return (
    <NavLink to='/basket'>
      <img className='w-full h-8' src={basketImg} alt='basket' />
    </NavLink>
  )
}
