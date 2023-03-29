import { useAppDispatch } from 'hooks/hooks'
import { useEffect } from 'react'
import { getBasket } from 'store/slice/basketAndLikeSlice'
import { getCategory } from 'store/slice/categorySlice'
import { getProduct } from 'store/slice/productSlice'
import { dataUser } from 'store/slice/userSlice'

import { RouterFile } from './RouterFile'
export const App: React.FC = () => {
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getProduct())
    dispatch(dataUser())
    dispatch(getBasket())
  }, [dispatch])
  return (
    <>
      <RouterFile />
    </>
  )
}
