import { Product } from '../model'
const productList: Product[] = [
  {
    name: 'Jimjam Pops',
    brand: 'Britannia',
    categories: [
      'Snacks',
      'Sweet snacks',
      'Biscuits and cakes',
      'Biscuits',
      'Biscuits/Cookies (Shelf Stable)',
      'Cream biscuit'
    ],
    code: '8901063029309',
    productImage:
      'https://images.openfoodfacts.org/images/products/890/106/302/9309/front_en.20.400.jpg',
    ingredientsImage:
      'https://images.openfoodfacts.org/images/products/890/106/302/9309/ingredients_en.14.400.jpg',
    createdAt: new Date(),
    user_id: 'admin',
    quality: 'High',
    description: ''
  },
  {
    name: 'Corn Flakes',
    brand: 'Kelloggs',
    categories: [
      'Plant-based foods and beverages',
      'Plant-based foods',
      'Breakfasts',
      'Cereals and potatoes',
      'Cereals and their products',
      'Breakfast cereals',
      'Flakes',
      'Cereal flakes',
      'Extruded cereals',
      'Extruded flakes',
      'Corn flakes'
    ],
    code: '8901499010216',
    productImage:
      'https://images.openfoodfacts.org/images/products/890/149/901/0216/front_en.4.400.jpg',
    ingredientsImage:
      'https://images.openfoodfacts.org/images/products/890/149/901/0216/ingredients_en.7.400.jpg',
    createdAt: new Date(),
    user_id: 'admin',
    quality: 'Low',
    description: ''
  },
  {
    name: 'Parle-G gold 75g',
    brand: 'Parle',
    code: '8901719125478',
    categories: [
      'Snacks',
      'Sweet snacks',
      'Biscuits and cakes',
      'Biscuits',
      'Dry biscuits',
      'Plain biscuit',
      'Gluco biscuit'
    ],
    productImage:
      'https://images.openfoodfacts.org/images/products/890/171/912/5478/front_en.7.400.jpg',
    ingredientsImage:
      'https://images.openfoodfacts.org/images/products/890/171/912/5478/ingredients_en.9.400.jpg',
    createdAt: new Date(),
    user_id: 'admin',
    quality: 'High',
    description: ''
  },
  {
    name: 'Maaza Original 600ml',
    code: '8901764092206',
    brand: 'Maaza',
    categories: ['Beverages', 'Sweetened beverages'],
    productImage:
      'https://images.openfoodfacts.org/images/products/890/176/409/2206/front_en.3.400.jpg',
    ingredientsImage:
      'https://images.openfoodfacts.org/images/products/890/176/409/2206/ingredients_en.8.400.jpg',
    createdAt: new Date(),
    user_id: 'admin',
    quality: 'High',
    description: ''
  }
]

export default productList
