import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { getOneDataSubcategories } from '../../../store/features/subcategoriesSlice'
import arrow from '../../../assets/arrow.png'
import { getProductCategory } from 'store/features/productCategorySlice'

interface categoryProps {
  categoryId: string
  categoryName: string
}

export const Goods: React.FC<categoryProps> = ({ categoryId, categoryName }) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getOneDataSubcategories(categoryId))
  }, [dispatch, categoryId])

  const subcategories = useAppSelector((state) => state.subcategory.subcategories)
  const isLoading = useAppSelector((state) => state.subcategory.isLoading)
  const productCategory = useAppSelector((state) => state.pCategory.productCategory)

  const [dropdown, setDropdown] = useState(false)

  const hadleDropdown = (id: string): void => {
    setDropdown(!dropdown)
    dispatch(getProductCategory(id))
  }

  return (
    <>
      <div className='flex'>
        <div className='w-1/5 h-full mt-10  rounded'>
          <div className='font-bold border-b-2 border-solid'>
            <NavLink to={`/${categoryId}`}>{categoryName}</NavLink>
          </div>
          <div className='mt-[10px]'>
            {isLoading ? (
              <div className='pl-5'>Загрузка...</div>
            ) : (
              subcategories?.map((item) => {
                return (
                  <div key={item._id}>
                    <NavLink
                      onClick={() => hadleDropdown(item._id)}
                      to={item.name}
                      className='flex w-auto h-[35px] text-sm  pl-5 cursor-pointer  hover:bg-gray-100 rounded-[3px] items-center'
                      key={item._id}
                    >
                      {item.name}
                      <div className='flex justify-end w-full h-auto'>
                        <img className='w-auto h-[20px] object-cover px-3' src={arrow} />
                      </div>
                    </NavLink>
                    {item.subcategoryProduct?.map((turnkey) => {
                      return (
                        <div
                          className='cursor-pointer flex items-center px-3 text-xs w-[200px] m-auto py-2 hover:bg-gray-100 rounded-[3px]'
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
