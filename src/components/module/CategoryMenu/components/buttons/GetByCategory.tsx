import { Button } from 'components/ui/button/Button'
import { useAppDispatch } from 'hooks/hooks'
import { getProductByCategory } from 'store/slice/productSlice'
import { ISubCategory } from 'types/model'

import arrow from '../../../../../assets/arrow.png'

interface GetByCategoryProps {
  subcategories: ISubCategory
}
export const GetByCategory: React.FC<GetByCategoryProps> = ({ subcategories }) => {
  const dispatch = useAppDispatch()

  const hadleDropdown = (id: string): void => {
    dispatch(getProductByCategory(id))
  }
  return (
    <Button
      onClick={() => {
        hadleDropdown(subcategories._id)
      }}
      styleButtonContainer='flex w-[100%] h-[35px] text-sm  pl-5 cursor-pointer  hover:bg-gray-100 rounded-[3px] items-center'
      key={subcategories._id}
    >
      {subcategories.name}
      <div className='flex justify-end w-full h-auto'>
        <img className='w-auto h-[20px] object-cover px-3' src={arrow} />
      </div>
    </Button>
  )
}
