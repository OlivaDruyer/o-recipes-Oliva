export interface Recipe {
    "id": 0,
    "title": "string",
    "slug": "string",
    "thumbnail": "string",
    "author": "string",
    "difficulty": "string",
    "description": "string",
    "instructions": string[];// Tableau de chaînes de caractères pour les instructions
    "ingredients": Ingredients[]; 
}
  

  export interface Ingredients {
    "name": "string",
    "id": 0,
    "quantity": 0,
    "unit": "string"
  }
