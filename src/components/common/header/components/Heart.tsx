import { NavLink } from 'react-router-dom'

import heartImg from '../../../../assets/heart.png'

export const Heart: React.FC = () => {
  return (
    <NavLink className='relative' to='brothers-in-arms'>
      <img className='max-w-full max-h-full' src={heartImg} alt='heart' />
    </NavLink>
  )
}
