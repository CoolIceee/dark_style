import { NavLink, Outlet } from 'react-router-dom'

import {
  useGetDataCategoryQuery,
  useGetOneCategoryProductQuery
} from '../../../store/get.api/get.api'

interface categoryProps {
  categoryId: string
  categoryName: string
}

export const Goods: React.FC<categoryProps> = ({ categoryId, categoryName }) => {
  const { isFetching, data } = useGetDataCategoryQuery(categoryId)

  const handleClickId = (id: string): string => {
    useGetDataCategoryQuery(categoryId + '/' + id)
    return id
  }

  return (
    <>
      <div className='flex'>
        <div className='w-[300px] h-full mt-10  rounded'>
          <div className='font-bold border-b-2 border-solid'>{categoryName}</div>
          <div className='mt-[10px]'>
            {isFetching ? (
              <div className='pl-5'>Загрузка...</div>
            ) : (
              <>
                {data?.map((item) => {
                  return (
                    <div
                      onClick={() => handleClickId(item._id)}
                      className='flex items-center w-full h-[35px] text-sm  pl-5 cursor-pointer hover:bg-blue-200 rounded-[3px]'
                      key={item._id}
                    >
                      {item.name}
                    </div>
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
