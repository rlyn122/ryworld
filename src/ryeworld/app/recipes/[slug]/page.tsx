import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

// Define an interface for recipe content
interface RecipeContent {
  title: string;
  description: string;
  heroImage: string;
  ingredients: string[];
  instructions: string[];
  fullArticle: string[];
  ratings: string[];
}

interface PageProps {
  params: { slug: string };
}

// Mock data - in a real app, this would come from a CMS or database
const recipeData: { [key: string]: RecipeContent } = {
  'beefbarley': {
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
  },
  "shoyu": {
    title: "Shoyu Chicken & Late Night Grill",
    description:
      "A last get-together before spring break called for a fridge-clearout feast: shoyu chicken, grilled steak, and kimchi radish rice bowls.",
    heroImage: "/shoyu/grill_setup.JPEG",
    ingredients: [
      "Shredded Shoyu Chicken (savory)",
      "Bell Pepper",
      "Onion",
      "Ginger",
      "Garlic",
      "Brown Rice",
      "Kimchi Radish (acid)",
      "Shoyu Sauce with herbs, green onion, and parsley (fat)",
      "Green Onion (garnish)",
      "Onsen Tamago",
      "Asparagus",
      "4 New York Strip Steaks",
      "Honey-Marinated Pork",
    ],
    instructions: [
      "Prepare shoyu chicken with herbs and marinade.",
      "Grill New York strip steaks with garlic herb butter.",
      "Stir-fry bell peppers and onions.",
      "Prepare rice bowls with all ingredients, topping with kimchi radish and onsen tamago.",
      "Serve with pickled radish, spicy asparagus, and garlic spinach.",
    ],
    fullArticle: [
      "Tonight’s the last get-together before spring break. Friends are flying in, and we’re making a meal out of whatever’s left in the fridge. The plan: rice bowls featuring shoyu chicken, grilled steak, and a surprise onsen tamago attempt.",
      "Finding propane was a nightmare. After a two-hour wild goose chase, I pivoted to four beautifully marbled strip steaks and honey-marinated pork. Salted the steaks, let the pork soak, and fired up the camping grill.",
      "The steaks turned out unexpectedly fantastic—Publix GreenWise delivering a rare win. We grilled over foil, basting in garlic herb butter and dipping in ssamjang. The honey pork, however, suffered. The honey burned off too fast, leaving it mid-tier at best.",
      "Shoyu chicken was solid but slightly too acidic. Next time, I’ll go easier on the vinegar. The onsen tamago? Let’s just say it turned into a hard-boiled L. We ball, but we’ll ball better next time.",
    ],
    ratings: [
      "Steak: 9/10",
      "Honey Pork: 6/10 (honey burned off)",
      "Shoyu Chicken: 8/10 (too acidic)",
      "Pickled Radishes: 7/10 (too sour!)",
      "Asparagus Pickles: 7/10 (barely ate them)",
      "Red Lettuce: N/A (it’s just lettuce)",
      "Onsen Egg: N/A (ended up hard-boiled :/)",
    ],
  },
  "caesar": {
    title: "Caesar Salad: The Anchovy-Free Experiment",
    description:
      "Inspired by Kenji Lopez-Alt but short on anchovies, this Caesar salad embraces improvisation with Worcestershire and Dijon.",
    heroImage: "/caesar/caesar.JPEG",
    ingredients: [
      "Romaine lettuce",
      "Garlic",
      "Dijon mustard",
      "Worcestershire sauce",
      "Parmesan cheese",
      "Croutons (homemade)",
      "Lemon",
      "Olive oil",
      "Salt and pepper",
      "Egg (pasteurized, playing it safe)",
    ],
    instructions: [
      "Infuse olive oil with grated garlic, then strain.",
      "Chop multigrain bread, toss in garlic oil, and bake for homemade croutons.",
      "Whisk egg yolk, Dijon, Worcestershire, lemon juice, and Parmesan into a dressing.",
      "Slowly drizzle in olive oil while whisking to emulsify.",
      "Toss romaine in dressing and top with Parmesan and croutons.",
    ],
    fullArticle: [
      "I was watching Kenji Lopez-Alt break down Caesar salad and got inspired. Problem? No anchovies. Also, making raw egg dressing in a bird flu pandemic feels reckless. But we ball—carefully.",
      "Caesar dressing is an emulsification game. The egg yolk holds oil and acid together, creating that iconic creamy texture. Worcestershire steps in for anchovies, and Dijon adds extra depth.",
      "The highlight? Croutons. Infused olive oil with garlic, tossed in chopped multigrain bread, and baked them to golden perfection. Absolute gold.",
      "Dressing turned out decent. Couldn’t match the umami depth of anchovies, but layering flavors worked. Next time, I might cave and get anchovy paste.",
    ],
    ratings: [
      "Croutons: 9/10 (crispy perfection)",
      "Dressing: 7/10 (missing anchovy punch)",
      "Overall Salad: 8/10 (would make again)",
      "Bird Flu Anxiety: 3/10 (we survived)",
    ],
  }
  // Add more recipes here as needed
};

export default function RecipePage({ params }: PageProps) {
  // Fetch recipe data

  const { slug } = params;

  const recipe = recipeData[slug];

  // If recipe not found, show 404
  if (!recipe) {
    notFound();
  }

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
          ◎[▪‿▪]◎ Bon Appétit!
        </p>
      </footer>
    </article>
  );
}

// Generate static params for build-time generation
export async function generateStaticParams() {
  // Wrap the data in a Promise, though it's already async by default
  return new Promise((resolve) => {
    resolve(Object.keys(recipeData).map((slug) => ({ slug })));
  });
}
