import Image from 'next/image';
import { Suspense } from 'react';

export default function beefbarley() {
  const recipe = {
    title: 'Beef Barley Stew: A Gut-Healing Comfort Food',
    description: 'After a rough bout of food poisoning in Mexico, I needed something that would both comfort my soul and rebuild my decimated gut microbiome. Enter: the ultimate beef and barley stew.',
    heroImage: '/beefbarley/postsear.JPEG', // Replace with your actual image path
    ingredients: [
      'Beef shank',
      'Barley',
      'Chicken stock',
      'Mirepoix (onions, carrots, celery)',
      'Garlic',
      'Herbs (thyme, bay leaf)',
      'Salt and pepper'
    ],
    instructions: [
      'Sear beef whole',
      'Chop beef into cubes',
      'Sauté mirepoix',
      'Simmer/broil beef in chicken stock (1.5 hours)',
      'Return vegetables and barley',
      'Simmer additional 30 minutes'
    ],
    fullArticle: [
      'After a rough bout of food poisoning in Mexico, I needed something that would both comfort my soul and rebuild my decimated gut microbiome. Enter: the ultimate beef and barley stew. My go-to meal prep that\'s basically a hug in a pot.',
      'This time, I switched things up. The beef section at the store looked sadder than my post-Mexico stomach - short ribs and chuck roast were looking low-quality and expensive as hell. Solution? Beef shank. Game changer.',
      'Here\'s the pro move: sear the beef whole first. This creates an insane fond and lets you control the browning on these thicker cuts. Beef shank\'s got mad intramuscular fat that needs to render out slowly. No rush, we\'re making magic happen.',
      'Bonus round: those beef shanks? Throw the bones in the oven and get some killer bone marrow going. Talk about nose-to-tail cooking.'
    ],
    ratings: [
      'Beef Texture: 9/10',
      'Flavor Depth: 8/10',
      'Meal Prep Efficiency: 10/10',
      'Gut Healing Potential: 11/10'
    ]
  };

  return (
    <article className="article-content">
      {/* Hero Section */}
      <header className="mb-8">
        <h1>{recipe.title}</h1>
        <p className="text-base/6 tracking-[-0.01em] text-gray-600">
          {recipe.description}
        </p>
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

      {/* Ingredients Section */}
      <section className="mb-8">
        <h2>Ingredients</h2>
        <ul className="list-disc pl-5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="mb-2">{ingredient}</li>
          ))}
        </ul>
      </section>

      {/* Instructions Section */}
      <section className="mb-8">
        <h2>Cooking Process</h2>
        <ol className="list-decimal pl-5">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-3">{step}</li>
          ))}
        </ol>
      </section>

      {/* Full Article */}
      <section className="mb-8">
        <h2>The Story Behind the Dish</h2>
        {recipe.fullArticle.map((paragraph, index) => (
          <p key={index} className="article-paragraph">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Ratings Section */}
      <section className="mb-8">
        <h2>Ratings</h2>
        <ul className="list-none">
          {recipe.ratings.map((rating, index) => (
            <li key={index} className="mb-2 font-medium">{rating}</li>
          ))}
        </ul>
      </section>

      {/* Signature Ending */}
      <footer className="mt-8 text-center">
        <p className="text-sm text-gray-500">
          Pro tip: this stew gets better every day. Meal prep game: absolutely destroyed. Mexico food poisoning: consider yourself avenged. ◎[▪‿▪]◎
        </p>
      </footer>
    </article>
  );
}