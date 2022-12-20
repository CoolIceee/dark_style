import { Home } from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'

export const RouterFile: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}
