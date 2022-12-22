import { NavLink } from 'react-router-dom'

import { useSearchCategoryQuery } from '../../../store/get.api/get.api'

export const Categories: React.FC = () => {
  const { data } = useSearchCategoryQuery('')

  return (
    <>
      <div className='mx-auto mt-5 w-11/12'>
        <ul className='flex justify-around '>
          {data?.map((item) => {
            return (
              <li key={item._id}>
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
