// Category model
export interface ICategory {
  _id: string
  name: string
  __v: number
}

export interface IBasket {
  _id: string
  user: string
  product: IProduct
  __v: number
}

export interface IUser {
  like: any[]
  _id: string
  email: string
  login: string
  password: string
  basket: any[]
  __v: number
}
export interface typeProduct {
  _id: string
  name: string
  category: string
  floorCategory: string
  __v: number
}
export interface IProduct {
  _id: string
  name: string
  people: string[]
  gender: string
  typeProduct: typeProduct
  brand: string
  photo: string[]
  dimensions: string[]
  description: string
  price: number
  quantity: number
  __v: number
}

export interface ISubCategory {
  _id: string
  name: string
  subcategoryProduct: any[]
  __v: number
}

export interface ISubcategories {
  _id: string
  name: string
  category: ISubCategory
  floorCategory: string
  __v: number
}

export interface IToken {
  exp: number
  iat: number
  id: string
  name: string
  __v: number
}

export interface IProductCategory {
  _id: string
  name: string
  subcategory: string
  __v: number
}
