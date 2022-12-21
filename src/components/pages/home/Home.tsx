import { Outlet } from 'react-router-dom'

export const Home: React.FC = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  )
}
