import { NavLink } from 'react-router-dom'

import { useSearchCategoryQuery } from '../../../store/get.api/get.api'

export const Categories: React.FC = () => {
  const { data } = useSearchCategoryQuery('')

  return (
    <>
      <div className='mx-auto mt-5 w-auto'>
        <ul className='flex justify-between '>
          {data?.map((item) => {
            return (
              <li className='text-[14px]' key={item._id}>
                <NavLink className='' to={item._id}>
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
