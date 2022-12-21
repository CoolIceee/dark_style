import { Route, Routes } from 'react-router-dom'

import { Home } from '../pages/home/Home'

export const RouterFile: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        
      </Route>
    </Routes>
  )
}
