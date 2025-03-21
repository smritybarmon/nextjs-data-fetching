import MealsSearchInput from "./components/MealsSearchInput";
import { Roboto } from "next/font/google";
export const metadata = {
  title: "All Meals",
  description: "Generated by create next app",
};
const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function MealsPage({ searchParams }) {
  const query = await searchParams;
  const fetchMeals = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();

      return data.meals;
    } catch (error) {
      console.error("Error fetching meals:", error);
      return [];
    }
  };
  const meals = await fetchMeals();
  console.log("meals", meals);

  return (
    <div>
      <MealsSearchInput></MealsSearchInput>
      <div className="grid grid-cols-04 gap-6">
        {(meals || []).map((meal) => {
          return (
            <div key={meal.idMeal} className={roboto.className}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h1 className="text-2xl">Name: {meal.strMeal}</h1>
              <h2 className="text-xl">Category: {meal.strCategory}</h2>
              <h2 className="text-xl">Area: {meal.strArea}</h2>

              <p>Instructions: {meal.strInstructions}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
