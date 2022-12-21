import { NavLink } from 'react-router-dom'

import { useSearchCategoryQuery } from '../../../store/category/category.api'

export const Categories: React.FC = () => {
  const { data } = useSearchCategoryQuery('')

  return (
    <>
      <div className='mx-auto mt-5 w-11/12'>
        <ul className='flex justify-around '>
          {data?.map((item) => {
            return (
              <li key={item._id}>
                <NavLink
                  className={'focus:border-blue-600 border-solid border-b-2 border-white'}
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
