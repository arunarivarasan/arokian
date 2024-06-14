import { BSON, Realm } from 'realm'

type Product = {
  name: string
  brand: string
  categories: string[]
  code: string
  productImage: string
  ingredientsImage: string
  createdAt: Date
  user_id: string
  quality: string
  description: string
}

class ProductLocal extends Realm.Object<Product> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  name!: string
  brand!: string
  categories!: string[]
  code!: string
  productImage!: string
  ingredientsImage!: string
  createdAt: Date = new Date()
  user_id!: string
  quality!: string
  description = ''

  static primaryKey = '_id'
}

export { ProductLocal }
export type { Product }
