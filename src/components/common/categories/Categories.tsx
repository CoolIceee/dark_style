import { useAppDispatch, useAppSelector } from 'hooks/hooks'
import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { getCategory } from 'store/features/categorySlice'

export const Categories: React.FC = () => {
  const isPath = useLocation()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getCategory())
  }, [dispatch])
  const category = useAppSelector((state) => state.category.category)

  return (
    <>
      <div className='mx-auto mt-5 w-auto'>
        <ul className='flex justify-between '>
          {category?.map((item) => {
            return (
              <li className='text-[14px]' key={item._id}>
                <NavLink
                  className={
                    isPath.pathname === '/' + item._id
                      ? 'border-b-[3px] border-solid border-blue-600'
                      : ''
                  }
                  to={item._id}
                >
                  {item.name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
