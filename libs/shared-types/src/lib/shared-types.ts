interface Product {
  brand: string
  additives: string[]
  allergens: string[]
  categories: string[]
  code: string
  countries: string[]
  threatened_species: string[]
  name: string
  quantity: string
  quantity_unit: string
  grade: string
  ecoscore_grade: string
  food_groups: string[]
  product_image_url: string
  ingredients_image_url: string
  nutrition_image_url: string
  uploader: string
  uploader_id: string
  ingredients: {
    text: string
    vegan?: string
    vegetarian?: string
  }[]
  ingredients_text: string
  ingredients_text_with_allergens: string
  nutriments: {
    carbohydrates: number
    fat: number
    saturated_fat: number
    sugars: number
    salt: number
  }
  nutriscore_data?: {
    grade: string
    category_available: number
    nutrients_available: number
    nutriscore_applicable: number
    nutriscore_computed: number
    data: {
      energy: number
      fiber?: number
      fruits_vegetables_nuts_colza_walnut_olive_oils?: number
      is_beverage?: number
      is_cheese?: number
      is_fat?: number
      is_water?: number
      proteins?: number
      sodium?: number
    }
  }[]
}

export { Product }
