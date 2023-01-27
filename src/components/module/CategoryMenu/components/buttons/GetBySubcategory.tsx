import { Button } from 'components/ui/button/Button'
import { useAppDispatch } from 'hooks/hooks'
import { getSubcategoryProduct } from 'store/slice/productSlice'
import { IProductCategory } from 'types/model'

interface GetBySubcategoryProps {
  subcategoryProduct: IProductCategory
}
export const GetBySubcategory: React.FC<GetBySubcategoryProps> = ({ subcategoryProduct }) => {
  const dispatch = useAppDispatch()

  const handleClickProductCategory = (id: string): void => {
    dispatch(getSubcategoryProduct(id))
  }
  return (
    <Button
      onClick={() => {
        handleClickProductCategory(subcategoryProduct._id)
      }}
      styleButtonContainer='cursor-pointer flex items-center px-3 text-xs w-[90%] ml-auto py-2 hover:bg-gray-100 rounded-[3px]'
      key={subcategoryProduct._id}
    >
      <div className='bg-blue-600 w-2 h-2 rounded-[100%] mr-2'></div>
      {subcategoryProduct.name}
    </Button>
  )
}
