import { Button } from 'components/ui/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from 'store/slice/authSlice'

import { Loader } from './loader/Loader'

import './form.css'
export const Form: React.FC = () => {
  const token = useAppSelector((state) => state.auth.token)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const handleClickAuthLogin = (): void => {
    dispatch(loginUser({ login, password }))
  }
  if (token !== null) {
    navigate('/')
  }
  return (
    <form
      onClick={(e) => {
        e.preventDefault()
      }}
      className='flex flex-col font-[Montserrat]'
    >
      <input
        className='border-blue-600 w-[70%] mx-auto h-10 rounded-xl border-2 mb-3 px-4 text-sm placeholder:text-blue-600'
        placeholder='Логин'
        onChange={(e) => {
          setLogin(e.target.value)
        }}
        value={login}
      />
      <input
        className='border-blue-600 w-[70%] mx-auto h-10 rounded-xl border-2 mb-3 px-4 text-sm placeholder:text-blue-600'
        placeholder='Пароль'
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        value={password}
      />
      <Button
        styleButtonContainer='bg-blue-600 w-[70%] text-white mx-auto h-10 rounded-xl mb-3'
        onClick={() => {
          handleClickAuthLogin()
        }}
      >
        <Loader />
      </Button>
    </form>
  )
}
