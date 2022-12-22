import { Categories } from '../common/categories/Categories'
import { Header } from '../common/header/Header'

import { RouterFile } from './RouterFile'

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Categories/>
      <RouterFile />
    </>
  )
}
