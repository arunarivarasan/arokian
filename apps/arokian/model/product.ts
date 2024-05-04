import { BSON, Realm } from 'realm'

class Product extends Realm.Object<Product> {
  _id: BSON.ObjectId = new BSON.ObjectId()
  name!: string
  brand!: string
  category!: string
  code!: string
  image!: string
  ingredientsImage!: string
  createdAt: Date = new Date()
  user_id!: string

  static primaryKey = '_id'
}

export default Product
