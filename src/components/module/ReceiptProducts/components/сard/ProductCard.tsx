import { IProduct } from 'types/model'

interface ProductProps extends React.HTMLProps<HTMLAnchorElement> {
  product?: IProduct
  styleCardContainer?: string
}

export const ProductCard: React.FC<ProductProps> = ({ styleCardContainer, children }) => {
  return <div className={styleCardContainer}>{children}</div>
}
