import { ProductCard } from 'components/productCard/ProductCard'
import { useAppSelector } from 'hooks/hooks'

export const ReceiptProducts: React.FC = () => {
  const product = useAppSelector((state) => state.product.product)

  return (
    <div className='flex flex-wrap'>
      {product?.map((item) => {
        return (
          <>
            <ProductCard
              key={item._id}
              product={item}
              styleCardContainer={
                'w-[240px] h-[auto] ml-5 mt-5 cursor-pointer overflow-hidden border-[1px] border-gray-200 rounded-[8px] hover:scale-[1.03] transition ease-in shadow-lg shadow-gray-200'
              }
            />
          </>
        )
      })}
    </div>
  )
}
