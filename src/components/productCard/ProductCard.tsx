import { IProduct } from 'types/model'

import { ButtonBehavior } from '../../modules/ReceiptProducts/components/ButtonBehavior'

interface ProductProps extends React.HTMLProps<HTMLAnchorElement> {
  product: IProduct
  styleCardContainer?: string
}

export const ProductCard: React.FC<ProductProps> = ({ product, styleCardContainer }) => {
  return (
    <div className={styleCardContainer}>
      <div className='w-full h-[80%]'>
        <img src={product.photo[0]} className='object-cover w-full h-full' />
      </div>
      <div className='w-[90%] mx-auto'>
        <div>
          <div>{product.price}</div>
          <div>{product.name}</div>
        </div>
        <div>
          <ButtonBehavior product={product} />
        </div>
      </div>
    </div>
  )
}
