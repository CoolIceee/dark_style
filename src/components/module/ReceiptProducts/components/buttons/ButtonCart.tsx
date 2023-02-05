import { Button } from 'components/ui/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getBasket } from 'store/slice/basketAndLikeSlice'
import { addShoppingCart } from 'store/slice/productSlice'
import { IProduct } from 'types/model'
interface ButtonCartProps extends React.HTMLProps<HTMLAnchorElement> {
  product: IProduct
}
export const ButtonCart: React.FC<ButtonCartProps> = ({ product }) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.userDate)
  const [inBasket, setInBasket] = useState(false)
  const navigate = useNavigate()
  const handleClickAddBasketProduct = async (id: string): Promise<void> => {
    if (user.length === 0) {
      navigate('/sing/in')
    } else {
      setInBasket(!inBasket)
      await dispatch(addShoppingCart(id))
      dispatch(getBasket())
    }
  }
  const addInBasketButton = (
    <Button
      onClick={() => {
        void handleClickAddBasketProduct(product._id)
      }}
      styleButtonContainer={'w-[90px] h-[35px] bg-blue-600 rounded-[5px] ml-auto flex justify-center items-center text-white text-xs'}
    >
      В корзину
    </Button>
  )
  const InBasketButton = (
    <div className='w-[90px] h-[35px] border-2 border-blue-600 rounded-[5px] ml-auto flex items-center justify-center text-blue-600 text-xs'>
      В корзине
    </div>
  )
  return (
    <>
      {user.length !== 0 ? (
        <>
          {product.people.map((filterItem) => {
            return filterItem === user[0]._id && InBasketButton
          })}
          {product.people.length === 0 && (inBasket ? InBasketButton : addInBasketButton)}
        </>
      ) : (
        addInBasketButton
      )}
    </>
  )
}
