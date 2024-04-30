import { BSON, ObjectSchema, Realm } from 'realm'

class AddProduct extends Realm.Object<AddProduct> {
  _id!: BSON.ObjectId
  name!: string

  static schema: ObjectSchema = {
    name: 'AddProduct',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      name: { type: 'string', indexed: true },
      brand: { type: 'string' },
      category: { type: 'string' },
      code: { type: 'string' },
      image: { type: 'string' },
      ingredientsImage: { type: 'string' }
    }
  }
}

export default AddProduct
