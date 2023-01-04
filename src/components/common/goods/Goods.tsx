import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { getOneDataSubcategories } from '../../../store/features/subcategoriesSlice'

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
  
  return (
    <>
      <div className='flex'>
        <div className='w-[280px] h-full mt-10  rounded'>
          <div className='font-bold border-b-2 border-solid'>{categoryName}</div>
          <div className='mt-[10px]'>
            {isLoading ? (
              <div className='pl-5'>Загрузка...</div>
            ) : (
              <>
                {subcategories?.map((item) => {
                  return (
                    <NavLink
                      to={item.name}
                      className='flex items-center w-full h-[35px] text-sm  pl-5 cursor-pointer hover:bg-blue-200 rounded-[3px]'
                      key={item._id}
                    >
                      {item.name}
                    </NavLink>
                  )
                })}
              </>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
