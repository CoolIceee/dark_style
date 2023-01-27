import { useAppSelector } from 'hooks/hooks'

import { GetByCategory } from '../buttons/GetByCategory'
import { GetBySubcategory } from '../buttons/GetBySubcategory'
export const Content: React.FC = () => {
  const subcategories = useAppSelector((state) => state.subcategory.subcategories)
  return (
    <>
      {subcategories?.map((item) => {
        return (
          <div key={item._id}>
            <GetByCategory subcategories={item} />
            {item.subcategoryProduct?.map((turnkey) => {
              return <GetBySubcategory key={turnkey._id} subcategoryProduct={turnkey} />
            })}
          </div>
        )
      })}
    </>
  )
}
