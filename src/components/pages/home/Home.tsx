import { useSearchCategoryQuery } from '../../../store/category/category.api'

export const Home: React.FC = () => {
  const { data } = useSearchCategoryQuery('')
  console.log(data)
  return (
    <>
      <div>
        {data?.map((item: any) => {
          return <div key={item._id}>{item.name}</div>
        })}
      </div>
    </>
  )
}
