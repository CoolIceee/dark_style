import { NavLink } from 'react-router-dom'

import profileImg from '../../../assets/profile.png'

export const Profile: React.FC = () => {
  return (
    <NavLink to='sing/in'>
      <img className='w-full h-8' src={profileImg} alt='profile' />
    </NavLink>
  )
}
