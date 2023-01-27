import { Button } from 'components/ui/button/Button'
import { useAppDispatch } from 'hooks/hooks'
import { deleteProductBasket, getBasket } from 'store/slice/basketAndLikeSlice'

import risk from '../../../../../assets/risk.png'

interface ModalDeleteProductProps extends React.HTMLProps<HTMLElement> {
  setActive: Function
  id: string
}

export const ModalDeleteProduct: React.FC<ModalDeleteProductProps> = ({ setActive, id }) => {
  const dispatch = useAppDispatch()
  const handleClickDeleteProduct = async (): Promise<void> => {
    setActive(false)
    await dispatch(deleteProductBasket(id))
    dispatch(getBasket())
  }
  return (
    <div className='w-[350px] flex '>
      <div className='w-[50px] h-[50px] bg-red-200 rounded-full flex items-center justify-center'>
        <img className='w-[25px] h-[25px]' src={risk} />
      </div>
      <div className='w-[85%]'>
        <span className='text-sm px-5'>Удалить из корзины ?</span>
        <div className='font-[Montserrat] flex pt-5 justify-end '>
          <Button
            onClick={() => {
              void handleClickDeleteProduct()
            }}
            styleButtonContainer='flex w-[100px] justify-center items-center p-2 bg-red-600 text-white text-sm rounded-md'
          >
            Удалить
          </Button>
          <Button
            onClick={() => setActive(false)}
            styleButtonContainer='flex justify-center items-center p-2 border-2 ml-2 text-black text-sm rounded-md '
          >
            Отменить
          </Button>
        </div>
      </div>
    </div>
  )
}
