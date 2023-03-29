import { NavLink } from 'react-router-dom'

import { Form } from './form/Form'
import { Header } from './header/Header'

export const Authorization: React.FC = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        <Form />
        <NavLink to='/sing/up' className='mb-3 border-b-2  mx-auto text-center'>
          Зарегистрироваться?
        </NavLink>
      </div>
    </>
  )
}
