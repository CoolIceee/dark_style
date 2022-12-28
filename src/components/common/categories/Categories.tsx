import { NavLink, useLocation } from 'react-router-dom'

import { useSearchCategoryQuery } from '../../../store/get.api/get.api'

export const Categories: React.FC = () => {
  const { data } = useSearchCategoryQuery('')
  const isPath = useLocation()
  return (
    <>
      <div className='mx-auto mt-5 w-auto'>
        <ul className='flex justify-between '>
          {data?.map((item) => {
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
