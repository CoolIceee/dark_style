import { IProduct } from '../../../types/model'
interface productProps {
  product: IProduct[] | undefined
}
export const Cards: React.FC<productProps> = ({ product }) => {
  return (
    <>
      <div className=' mx-auto  w-11/12  mt-10'>
        <div className=' mx-auto flex w-a  flex-wrap  '>
          {product?.map((item) => {
            return (
              <div className='w-[280px] h-[500px] mt-10 m-5 bg-slate-50' key={item._id}>
                <img className=' w-full h-[260px] object-cover' src={item.photo[0]} />

                <div></div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
