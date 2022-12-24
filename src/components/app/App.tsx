import { Categories } from '../common/categories/Categories'
import { Header } from '../common/header/Header'

import { RouterFile } from './RouterFile'

export const App: React.FC = () => {
  return (
    <div className='w-full'>
      <Header />
      <div className='w-11/12 m-auto'>
        <Categories />
        <RouterFile />
      </div>
    </div>
  )
}
