// import { useAppDispatch, useAppSelector } from 'hooks/hooks'
// import { useEffect, useState } from 'react'
// import { addShoppingCart } from 'store/features/productSlice'
// import { dataUser } from 'store/features/userSlice'
// import { IProduct } from '../../../types/model'
// import addBasket from '../../../assets/addBasket.png'
// import basketAdd from '../../../assets/basketAdd.png'

// interface dataProps {
//   data: IProduct
// }

// export const ShoppingCartButton: React.FC<dataProps> = ({ data }) => {
//   const dispatch = useAppDispatch()
//   const isAddBasLoading = useAppSelector((state) => state.product.isAddBasLoading)

//   const user = useAppSelector((state) => state.user.userDate)
//   const IDPeople = user.map((idUser) => {
//     return idUser._id
//   })

//  const a = user.map((savedItems) => {
//     return savedItems.basket.map((items) => {
//       return data._id === items
//     })
//   })
//   const handleClickAddBasketProduct = (id: string): void => {
//       console.log(a)
//     // dispatch(addShoppingCart(id))
//     // dispatch(dataUser())
//   }
//   useEffect(() => {
//     dispatch(dataUser())
//   }, [dispatch])
//   return (
    
    // <>
    /* {isAddBasLoading ? (
        <div>loading</div>
      ) : ( */
    // user.map((savedItems) => {
    //   return savedItems.basket.map((items) => {
    //     return data._id === items ? (
    //       <div
    //         onClick={() => {
    //           handleClickAddBasketProduct(data._id)
    //         }}
    //         className={
    //           'w-[30px] h-[30px] bg-blue-600 rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
    //         }
    //       >
    //         <img className={'w-[20px] h-[20px]'} src={basketAdd} alt='like' />
    //       </div>
    //     ) : (
    //       <div
    //         onClick={() => {
    //           handleClickAddBasketProduct(data._id)
    //         }}
    //         className={
    //           'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
    //         }
    //       >
    //         <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
    //       </div>
    //     )
    //   })
    // })

    // data.people.map((item) => {
    //     console.log('====================================');
    //     console.log(item);
    //     console.log('====================================');
    //   return item === IDPeople[0] ? (
    //     <div
    //       onClick={() => {
    //         handleClickAddBasketProduct(data._id)
    //       }}
    //       className={
    //         'w-[30px] h-[30px] bg-blue-600 rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
    //       }
    //     >
    //       <img className={'w-[20px] h-[20px]'} src={basketAdd} alt='like' />
    //     </div>
    //   ) : (
    //     <div
    //       onClick={() => {
    //         handleClickAddBasketProduct(data._id)
    //       }}
    //       className={
    //         'w-[30px] h-[30px] bg-white rounded-[5px] border-[1px] border-gray-200 ml-auto flex justify-center items-center'
    //       }
    //     >
    //       <img className={'w-[15px] h-[15px]'} src={addBasket} alt='like' />
    //     </div>
    //   )
    //     // })
    //   )}
    // </>
//   )
// }

// user?.map((item) => {
//           const IDPeople = product.map((idUser) => {
//            return item.basket.map((people) => {
//               return people === idUser._id
//             })
//           })
//           console.log(IDPeople)

//         })
