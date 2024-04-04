import { Injectable } from '@nestjs/common';
import axios from "axios";
import { ProductData } from './products.model';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
  ];

  findAll() {
    return this.products;
  }

  async findOne(id: number) {
   // return this.products.find(product => product.id === id);
   try {
    const response = await axios.get(
      `https://world.openfoodfacts.org/api/v0/product/${id}.json`
    );

    if(response.data.status === 0) {
      throw new Error(response.data.status_verbose);
    }

    return this.extractProductData(response.data.product);
    // return response.data.product;
   }
    catch (error) {
      console.error(error);
    }
}

extractProductData(jsonData): ProductData {
  const productData: ProductData = {
    brand: jsonData.brands,
    additives: jsonData.additives_original_tags || [],
    allergens: jsonData.allergens_from_ingredients.split(',').map((allergen: string) => allergen.trim()),
    categories: jsonData.categories.split(',').map((category: string) => category.trim()),
    code: jsonData.code,
    countries: jsonData.countries.split(',').map((country: string) => country.trim()),
    threatened_species: jsonData.threatened_species || [],
    name: jsonData.product_name,
    quantity: jsonData.product_quantity,
    quantity_unit: jsonData.product_quantity_unit,
    grade: jsonData.nutrition_grade_fr,
    ecoscore_grade: jsonData.ecoscore_grade,
    food_groups: jsonData.food_groups.split(',').map((group: string) => group.trim()),
    product_image_url: jsonData.image_front_url,
    ingredients_image_url: jsonData.image_ingredients_url,
    nutrition_image_url: jsonData.image_nutrition_url,
    uploader: jsonData.creator,
    uploader_id: jsonData.photographers_tags[0],
    ingredients: jsonData.ingredients.map((ingredient) => ({
      text: ingredient.text,
      vegan: ingredient.vegan,
      vegetarian: ingredient.vegetarian,
    })),
    ingredients_text: jsonData.ingredients_text,
    ingredients_text_with_allergens: jsonData.ingredients_text_with_allergens,
    nutriments: {
      carbohydrates: jsonData.nutriments.carbohydrates_100g,
      fat: jsonData.nutriments.fat_100g,
      saturated_fat: jsonData.nutriments['saturated-fat_100g'],
      sugars: jsonData.nutriments.sugars_100g,
      salt: jsonData.nutriments.salt_100g,
    }
  };

  return productData;
}
}



