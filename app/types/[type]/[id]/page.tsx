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
//   console.log(ingredients);
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
        <h1 className="text-3xl font-bold font-mono text-blue-950">
          {details.strMeal}
        </h1>
        <div className="tags my-4">
          <p className="text-2xl my-2  text-blue-950 font-mono font-semibold">
            Ingredients
          </p>
          {ingredients.map((ing, idx) => (
            <span
              key={idx}
              className="bg-blue-500 font-sans text-white text-base py-1 px-2 inline-block rounded mr-2 mb-2"
            >
              {ing}
            </span>
          ))}
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-semibold my-2 font-mono text-blue-950">
            Instructions
          </h3>
          <p className="font-sans text-base mr-2 mb-2">
            {details.strInstructions}
          </p>
        </div>
        {details.strYoutube && (
          <div className="my-4">
            <p className="text-2xl font-semibold my-2 font-mono text-blue-950">
              Watch on YouTube
            </p>
            <a
              href={details.strYoutube}
              target="_blank"
              className="font-sans text-base mr-2 mb-2"
            >
              How to make{" "}
              <span className="underline text-blue-500">
                {details.strYoutube}
              </span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
