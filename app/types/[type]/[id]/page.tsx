import Image from "next/image";
import React from "react";

const getRecipeDetails = async (id: string) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  return res.json();
};

export default async function Page({ params }: { params: { id: string } }) {
  const recipeDetails = await getRecipeDetails(params.id);

  const details = recipeDetails.meals[0];
  const ingredients = Object.keys(details)
    .filter((key) => key.indexOf("Ingredient") > 0)
    .map((ingKey) => details[ingKey])
    .filter(Boolean);

  //   console.log(details);
  console.log(ingredients);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <Image
          unoptimized
          src={details.strMealThumb}
          alt="Recipe image"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="p-5">
        <h1 className="text-2xl font-medium">
          Recipe Name: <span>{details.strMeal}</span>
        </h1>
        <div className="tags my-4 ">
          <p className="text-2xl font-medium my-2">Ingredients:</p>
          {ingredients.map((ing, idx) => (
            <span
              key={idx}
              className="bg-blue-500 text-white py-1 px-2 inline-block rounded mr-2 mb-2"
            >
              {ing}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  return <div>Page</div>;
}
