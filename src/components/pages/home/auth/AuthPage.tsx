import { useAppDispatch } from 'hooks/hooks'
import { useState } from 'react'
import { loginUser } from 'store/slice/authSlice'

export const AuthPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleClickAuthLogin = (): void => {
    dispatch(loginUser({ login, password }))
  }

  return (
    <>
      <div className='flex mt-10'>
        <input
          className='bg-gray-400 ml-1'
          onChange={(e) => {
            setLogin(e.target.value)
          }}
          value={login}
        />
        <input
          className='bg-gray-400 ml-1'
          onChange={(e) => {
            setPassword(e.target.value)
          }}
          value={password}
        />
        <button
          className='bg-gray-400 ml-1'
          onClick={() => {
            handleClickAuthLogin()
          }}
        >
          войти
        </button>
      </div>
    </>
  )
}
