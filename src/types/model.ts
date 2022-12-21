export interface ICategory {
  _id: string
  name: string
  __v: number
}

 export interface ISubcategories {
   _id: string
   name: string
   category: string
   floorCategory: string
   __v: number
 }