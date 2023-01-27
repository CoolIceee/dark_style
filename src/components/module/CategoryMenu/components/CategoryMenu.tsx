import { Button } from 'components/ui/button/Button'
import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getOneGenderProduct } from 'store/slice/productSlice'

import { getACategory } from '../../../../store/slice/subcategoriesSlice'

import { Content } from './content/Сontent'

interface categoryProps {
  categoryId: string
  categoryName: string
}

export const CategoryMenu: React.FC<categoryProps> = ({ categoryId, categoryName }) => {
  const dispatch = useAppDispatch()

  const handleClickGetProduct = (): void => {
    dispatch(getOneGenderProduct(categoryId))
  }

  useEffect(() => {
    dispatch(getACategory(categoryId))
  }, [dispatch, categoryId])

  const isLoading = useAppSelector((state) => state.subcategory.isLoading)

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 h-full mt-10  rounded'>
          <div className='font-bold border-b-2 border-solid'>
            <Button
              onClick={() => {
                handleClickGetProduct()
              }}
            >
              {categoryName}
            </Button>
          </div>
          <div className='mt-[10px]'>{isLoading ? <div className='pl-5'>Загрузка...</div> : <Content />}</div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
