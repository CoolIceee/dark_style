import { useGetDataCategoryQuery } from '../../../store/get.api/get.api'

interface categoryProps {
  categoryId: string
}

export const Goods: React.FC<categoryProps> = (props) => {
  const { data } = useGetDataCategoryQuery(props.categoryId)

  return (
    <>
      <div>
        {data?.map((item) => {
          return <div key={item._id}>{item.name}</div>
        })}
      </div>
    </>
  )
}
