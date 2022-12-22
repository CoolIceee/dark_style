import { useGetProductQuery } from '../../../../store/get.api/get.api'
import { Cards } from '../../../app/cards/Cards'

export const MainProducts: React.FC = () => {
  const { data } = useGetProductQuery('')

  return (
    <>
      <Cards product={data} />
    </>
  )
}
