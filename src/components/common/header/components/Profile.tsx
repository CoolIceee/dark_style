import { NavLink } from 'react-router-dom'

import profileImg from '../../../../assets/profile.png'

export const Profile: React.FC = () => {
  return (
    <NavLink to='sing/in'>
      <img className='w-full max-w-full max-h-full' src={profileImg} alt='profile' />
    </NavLink>
  )
}
