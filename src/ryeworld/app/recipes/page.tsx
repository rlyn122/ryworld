"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // In a real application, you would fetch this data from an API
    const fetchRecipes = async () => {
      try {
        // Simulate API call with mock data
        // Replace this with your actual API call
        setTimeout(() => {
          const mockRecipes = [
            {
              id: '1',
              title: 'Sourdough Rye Bread',
              slug: 'sourdough-rye-bread',
              description: 'A classic sourdough bread with rye flour.',
              category: 'Breads'
            },
            {
              id: '2',
              title: 'Rye Chocolate Chip Cookies',
              slug: 'rye-chocolate-chip-cookies',
              description: 'Delicious cookies made with rye flour for a nutty flavor.',
              category: 'Desserts'
            },
            {
              id: '3',
              title: 'Rye Pancakes',
              slug: 'rye-pancakes',
              description: 'Hearty breakfast pancakes using rye flour.',
              category: 'Breakfast'
            }
          ];
          setRecipes(mockRecipes);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to load recipes');
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (slug: string) => {
    router.push(`/recipes/${slug}`);
  };

  if (loading) return <div className="container mx-auto p-4 text-center">Loading recipes...</div>;
  if (error) return <div className="container mx-auto p-4 text-red-500 text-center">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipes</h1>
      <p className="flash-colors">DISCLAIMER!!! These are mock recipes/placeholders for nowww. Come back soon to peep it</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer max-w-sm mx-auto"
            onClick={() => handleRecipeClick(recipe.slug)}
          >
            <h2 className="text-xl font-semibold mb-2 text-center">{recipe.title}</h2>
            <p className="text-gray-600 mb-3 text-center">{recipe.description}</p>
            <div className="flex justify-center">
            <span className="inline-block bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">
              {recipe.category}
            </span>
            </div>
            <div className="text-center mt-4">
              <Link href={`/recipes/${recipe.slug}`} className="text-blue-500 hover:underline">
                View Recipe
              </Link>
      </div>
    </div>
        ))}
      </div>
    </div>
  );
}

