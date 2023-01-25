import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { getOneGenderProduct, getProductByCategory, getSubcategoryProduct } from 'store/slice/productSlice'

import arrow from '../../../assets/arrow.png'
import { getACategory } from '../../../store/slice/subcategoriesSlice'

interface categoryProps {
  categoryId: string
  categoryName: string
}

export const Goods: React.FC<categoryProps> = ({ categoryId, categoryName }) => {
  const dispatch = useAppDispatch()

  const hadleDropdown = (id: string): void => {
    dispatch(getProductByCategory(id))
  }
  const handleClickProductCategory = (id: string): void => {
    dispatch(getSubcategoryProduct(id))
  }
  const handleClickGetProduct = (): void => {
    dispatch(getOneGenderProduct(categoryId))
  }

  useEffect(() => {
    dispatch(getACategory(categoryId))
  }, [dispatch, categoryId])

  const subcategories = useAppSelector((state) => state.subcategory.subcategories)
  const isLoading = useAppSelector((state) => state.subcategory.isLoading)

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 h-full mt-10  rounded'>
          <div className='font-bold border-b-2 border-solid'>
            <div
              onClick={() => {
                handleClickGetProduct()
              }}
            >
              {categoryName}
            </div>
          </div>
          <div className='mt-[10px]'>
            {isLoading ? (
              <div className='pl-5'>Загрузка...</div>
            ) : (
              subcategories?.map((item) => {
                return (
                  <div key={item._id}>
                    <div
                      onClick={() => {
                        hadleDropdown(item._id)
                      }}
                      className='flex w-auto h-[35px] text-sm  pl-5 cursor-pointer  hover:bg-gray-100 rounded-[3px] items-center'
                      key={item._id}
                    >
                      {item.name}
                      <div className='flex justify-end w-full h-auto'>
                        <img className='w-auto h-[20px] object-cover px-3' src={arrow} />
                      </div>
                    </div>
                    {item.subcategoryProduct?.map((turnkey) => {
                      return (
                        <div
                          onClick={() => {
                            handleClickProductCategory(turnkey._id)
                          }}
                          className='cursor-pointer flex items-center px-3 text-xs w-[90%] ml-auto py-2 hover:bg-gray-100 rounded-[3px]'
                          key={turnkey._id}
                        >
                          <div className='bg-blue-600 w-2 h-2 rounded-[100%] mr-2'></div>
                          {turnkey.name}
                        </div>
                      )
                    })}
                  </div>
                )
              })
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
