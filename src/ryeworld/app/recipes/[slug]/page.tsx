import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Define an interface for recipe content
interface RecipeContent {
  title: string;
  description: string;
  heroImage: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: string;
  cookTime?: string;
  servings?: number;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Mock data - new recipes
const recipeData: { [key: string]: RecipeContent } = {
  'sourdough-rye-bread': {
    title: 'Sourdough Bread',
    description: 'A rustic artisan sourdough bread with a crispy crust and chewy interior. Made with a natural starter for that distinctive tangy flavor that only true sourdough can deliver.',
    heroImage: '/recipes/cat.jpg',
    ingredients: [
      '500g bread flour',
      '350g water',
      '100g active sourdough starter',
      '10g salt',
      'Rice flour (for dusting)',
    ],
    instructions: [
      'Mix flour, water, and starter in a large bowl until just combined. Let rest for 30 minutes (autolyse).',
      'Add salt and fold dough to incorporate. Let rest for 30 minutes.',
      'Perform stretch and folds every 30 minutes for 2-3 hours until dough develops strength.',
      'Shape the dough and place in a floured banneton. Refrigerate overnight (8-12 hours).',
      'Preheat oven with Dutch oven to 500°F (260°C). Bake with lid on for 20 minutes, then remove lid and bake for 20-25 more minutes.',
      'Cool completely before slicing.',
    ],
    prepTime: '24 hours',
    cookTime: '45 mins',
    servings: 8
  },
  'rye-chocolate-chip-cookies': {
    title: 'Chocolate Chip Cookies',
    description: 'Classic chocolate chip cookies with a perfect balance of crispy edges and chewy centers. Loaded with chocolate chunks and a hint of sea salt for that irresistible sweet-salty combo.',
    heroImage: '/recipes/dawg.PNG',
    ingredients: [
      '225g unsalted butter, softened',
      '200g brown sugar',
      '100g granulated sugar',
      '2 large eggs',
      '1 tsp vanilla extract',
      '300g all-purpose flour',
      '1 tsp baking soda',
      '1/2 tsp salt',
      '350g chocolate chips or chunks',
      'Flaky sea salt for topping',
    ],
    instructions: [
      'Cream butter and both sugars until light and fluffy.',
      'Add eggs one at a time, then vanilla, mixing well after each addition.',
      'Whisk together flour, baking soda, and salt. Gradually add to wet ingredients.',
      'Fold in chocolate chips. Chill dough for at least 2 hours or overnight.',
      'Preheat oven to 350°F (175°C). Scoop dough onto baking sheets.',
      'Bake for 10-12 minutes until edges are golden but centers still soft.',
      'Sprinkle with sea salt while warm. Cool on baking sheets for 5 minutes before transferring to wire racks.',
    ],
    prepTime: '3 hours',
    cookTime: '12 mins',
    servings: 24
  },
  'rye-pancakes': {
    title: 'Fluffy Buttermilk Pancakes',
    description: 'Light, airy, and tender buttermilk pancakes that are perfect for weekend breakfasts. Serve with maple syrup, fresh berries, and a dollop of whipped butter for an indulgent morning treat.',
    heroImage: '/recipes/dogi.gif',
    ingredients: [
      '240g all-purpose flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '1/2 tsp baking soda',
      '1/2 tsp salt',
      '475ml buttermilk',
      '2 large eggs',
      '3 tbsp melted butter, plus more for cooking',
      '1 tsp vanilla extract',
      'Maple syrup, for serving',
      'Fresh berries, for serving',
    ],
    instructions: [
      'Whisk together flour, sugar, baking powder, baking soda, and salt in a large bowl.',
      'In a separate bowl, whisk buttermilk, eggs, melted butter, and vanilla until combined.',
      'Pour wet ingredients into dry ingredients and stir just until moistened. A few lumps are okay.',
      'Heat a griddle or non-stick pan over medium heat. Lightly butter the surface.',
      'Pour 1/4 cup batter for each pancake. Cook until bubbles form on top, then flip and cook until golden brown.',
      'Keep pancakes warm in a 200°F (95°C) oven while cooking the remaining batter.',
      'Serve with maple syrup and fresh berries.',
    ],
    prepTime: '15 mins',
    cookTime: '20 mins',
    servings: 4
  }
};

export default async function RecipePage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const recipe = recipeData[slug];

  // If recipe not found, show 404
  if (!recipe) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/recipes" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Recipes
      </Link>

      {/* Hero Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        
        {/* Recipe metadata */}
        {(recipe.prepTime || recipe.cookTime || recipe.servings) && (
          <div className="flex flex-wrap gap-4 mb-6">
            {recipe.prepTime && <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">Prep: {recipe.prepTime}</div>}
            {recipe.cookTime && <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">Cook: {recipe.cookTime}</div>}
            {recipe.servings && <div className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800">Servings: {recipe.servings}</div>}
          </div>
        )}
      </header>

      {/* Hero Image */}
      <Suspense fallback={<div>Loading image...</div>}>
        <div className="w-full h-[400px] relative mb-8">
          <Image
            src={recipe.heroImage}
            alt={recipe.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </Suspense>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Ingredients Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Ingredients</h2>
          <ul className="space-y-2 list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="mb-2">{ingredient}</li>
            ))}
          </ul>
        </section>

        {/* Instructions Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Instructions</h2>
          <ol className="space-y-3 list-decimal pl-5">
            {recipe.instructions.map((step, index) => (
              <li key={index} className="mb-2">{step}</li>
            ))}
          </ol>
        </section>
      </div>

    </div>
  );
}

// Generate static params for build-time generation
export async function generateStaticParams() {
  return Object.keys(recipeData).map((slug) => ({
    slug: slug
  }));
}
