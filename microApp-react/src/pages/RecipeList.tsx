import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const recipes = [
  {
    id: 1,
    name: "Classic Margherita Pizza",
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  },
  // Add more recipes here if needed
];

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function getRecipes() {
      try {
        const response = await fetch("https://dummyjson.com/recipes");
        const result = await response.json();
        setRecipes(result.recipes); // Assuming the API response has a 'recipes' field
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    }

    getRecipes();
  }, []);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Recipe List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link
              to={`/react/recipe/${recipe.id}`}
              className="block hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-32 sm:h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold no-underline text-black ">
                  {recipe.name}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
