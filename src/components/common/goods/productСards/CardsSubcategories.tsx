import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { getOneSubcategoryProduct } from 'store/features/productSlice'
interface cardsProps {
  id: string
}
export const CardsSubcategories: React.FC<cardsProps> = ({ id }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getOneSubcategoryProduct(id))
  }, [dispatch, id])
  const product = useAppSelector((state) => state.product.product)
  return (
    <>
      <div>
        {product?.map((item) => {
          return <div key={item._id}>{item.name}</div>
        })}
      </div>
    </>
  )
}
