import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from 'store/slice/authSlice'

import './form.css'
export const Form: React.FC = () => {
  const [login, setLogin] = useState('')
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.auth.isLoading)
  const token = useAppSelector((state) => state.auth.token)
  const handleClickAuthLogin = (): void => {
    dispatch(loginUser({ login, password }))
    if (token != null) {
      navigate('/')
    }
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
      <button
        className='bg-blue-600 w-[70%] text-white mx-auto h-10 rounded-xl mb-3'
        onClick={() => {
          handleClickAuthLogin()
        }}
      >
        {isLoading ? (
          <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          'Войти'
        )}
      </button>
    </form>
  )
}
