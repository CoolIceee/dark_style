export interface IBasket {
  _id: string
  user: string
  product: IProduct
}

export interface IProduct {
  _id: string
  name: string
  itemName: string
  brand: string
  people: string[]
  gender: string
  typeProduct: typeProduct
  category: string
  photo: string[]
  dimensions: string[]
  description: string
  price: number
  discountPrice: number
  quantity: number
}

export interface ICategory {
  _id: string
  name: string
}

export interface IUser {
  like: any[]
  _id: string
  email: string
  login: string
  password: string
  basket: any[]
}

export interface typeProduct {
  _id: string
  name: string
  category: string
  floorCategory: string
}

export interface ISubCategory {
  _id: string
  name: string
  subcategoryProduct: IProductCategory[]
}

export interface ISubcategories {
  _id: string
  name: string
  category: ISubCategory
  floorCategory: string
}

export interface IToken {
  exp: number
  iat: number
  id: string
  name: string
}

export interface IProductCategory {
  _id: string
  name: string
  subcategory: string
}
