
interface blogContent {
    title: string;
    date: string;
    description: string;
    heroImage: string;
    ingredients: string[];
    instructions: string[];
    fullArticle: string[];
    ratings: string[];
}

export const blogData: { [key: string]: blogContent } = {
    'yakiniku3.27': {
        title: 'Yakiniku',
        date: '2025-03-28',
        description: 'Busting out the new Iwatani',
        heroImage: '/blogs/yakink/food.JPEG',
        ingredients: [
            'Pork Belly',
            'Flank Steak',
            'Chuck Roast',
            'Bell Peppers',
            'Onions',
            'Mushrooms',
            'Corn',
            'Gochujang'
        ],
        instructions: [
            'Soak bamboo skewers in water',
            'Skewer Beef onions and bell peppers',
            'Skewer pork belly and green onions',
            'marinate pork belly in gochujang sauce',
            'Grill on Iwatani outside',
            'Eat with rice'
        ],
        fullArticle: [
            'There is something magical about grilling on a wire grill with a flame as opposed to in the pan. This was my first time trying out the new Iwatani I bought, and it did not dissapoint.',
            'We skewered a variety of random ahh meats from the fridge, including pork belly, flank steak, and chuck roast on 6 inch bamboo skewers that were much too small.',
            'We set began grilling inside and quickly set off the fire alarm.',
            'We moved outside and grilled the rest of the meat. I also made a gochujang marinade for the pork belly, which was a hit.',
            'Its nice to chill outside, smoke a cig with the guys and grill some meat. Albeit the Iwatani is a bit small and a hassle to clean, it is a great addition to the kitchen.',
        ],
        ratings: [
            "Iwatani: 5/5",
            "Gochujang Marinated Pork Belly Green Onion Skewers: 6/5",
            "Flank Steak Skewers: 3/5",
            "Chuck Roast Skewers: 3/5",
            "Corn with Herb Butter: 4/5",
        ]
    },
    'beefbarley': { 
        title: 'Beef Barley Stew: A Gut-Healing Comfort Food',
        date:'2025-03-20',
        description: 'poverty version of Kenji Lopez Alt\'s beef and barley stew.',
        heroImage: '/blogs/beefbarley/postsear.JPEG', // Replace with your actual image path
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
            'I never even heard of barley until I started making this stew, but now it is my go-to meal prep that\'s basically a hug in a pot.',
            'This time, I switched things up. The beef section at Publix looked sadder than my post-Mexico stomach - short ribs and chuck roast were looking low-quality and expensive as hell. Solution? Beef shank.',
            'Here\'s the pro move: sear the beef hunks whole first. This creates fond and lets you control the browning on these thicker cuts. Beef shank\'s got hella intramuscular fat that needs to render out slowly. Good thing I\'m not in a rush.',
            'Bonus: Throw the bones in the oven and feed the bone marrow to your hungry roomates. turns out bone marrow is just mostly a bunch of fat. then again ig fat is flavor :/'
        ],
        ratings: [
            'Beef Texture: 9/10',
            'Flavor Depth: 8/10',
            'Meal Prep Efficiency: 10/10',
            'Gut Healing Potential: 11/10'
        ]
    },
    "shoyu": {
        title: "Late Night Steak, Pork, & Chicken",
        date:'2025-03-06',
        description:
            "Last get-together before spring break 🥥",
        heroImage: "/blogs/shoyu/grill_setup.JPEG",
        ingredients: [
            "Chicken Thigh",
            "Bell Pepper",
            "Onion",
            "Ginger",
            "Garlic",
            "Brown Rice",
            "Radish",
            "Shoyu Sauce with herbs, green onion, and parsley",
            "Green Onion",
            "Red Lettuce",
            "Eggs",
            "Asparagus",
            "4 New York Strip Steaks",
            "Honey-Marinated Pork",
        ],
        instructions: [
            "Braise shoyu chicken with herbs and marinade.",
            "Grill New York strip steaks with garlic herb butter.",
            "Marinade and Grill Honey Pork",
            "Serve with pickled radish, spicy asparagus, and garlic spinach.",
        ],
        fullArticle: [
            "Tonight's the last get-together before spring break. Friends are flying in, and we're making a meal out of whatever's left in the fridge. The plan: throw a bunch of meat on the grill.",
            "Finding propane was a nightmare. After a two-hour wild goose chase, I got it at REI (F*ck Me). To my suprise, I found four beautifully marbled strip steaks and a nice pork shoulder at Publix. Salted the steaks, let the pork soak, and fired up the camping grill (its just a hotpot grill).",
            "The steaks turned out unexpectedly fantastic—Publix GreenWise delivering a rare win. We grilled over foil, basting in garlic herb butter and dipping in ssamjang. The honey pork, however, suffered. The honey burned off too fast, leaving it mid-tier at best.",
            "Shoyu chicken was solid but slightly too acidic. Next time, I'll go easier on the vinegar. The onsen tamago? Let's just say it turned into a hard-boiled L. We ball, but we'll ball better next time.",
        ],
        ratings: [
            "Steak: 9/10",
            "Honey Pork: 6/10 (honey burned off)",
            "Shoyu Chicken: 8/10 (too acidic)",
            "Pickled Radishes: 7/10 (too sour!)",
            "Asparagus Pickles: 7/10 (barely ate them)",
            "Red Lettuce: N/A (it's just lettuce)",
            "Onsen Egg: N/A (ended up hard-boiled :/)",
        ],
    },
    "caesar": {
        title: "Caesar Salad Dressing",
        date:'2025-03-22', 
        description:
            "Ayy picture is kinda aesthetic isnt it..",
        heroImage: "/blogs/caesar/caesar.JPEG",
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
            "Egg (unpasteurized, f**ck you)",
        ],
        instructions: [
            "Infuse olive oil with grated garlic, then strain.",
            "Chop multigrain bread, toss in garlic oil, and bake for homemade croutons.",
            "Whisk egg yolk, Dijon, Worcestershire, lemon juice, and Parmesan into a dressing.",
            "Slowly drizzle in olive oil while whisking to emulsify.",
            "Toss romaine in dressing and top with Parmesan and croutons.",
        ],
        fullArticle: [
            "I was watching Kenji Lopez-Alt break down Caesar salad and got inspired at 3am last night. Not the most exciting YT vid to be watching for everyone but ig im weird for that. No tengo anchovies, also, making raw egg dressing in a bird flu pandemic feels reckless. But we ball—carefully.",
            "Caesar dressing is an emulsification game. The egg yolk holds oil and acid together, creating that iconic creamy texture. Worcestershire steps in for anchovies, and Dijon adds extra depth.",
            "The highlight were the Croutons. Infused olive oil with garlic, tossed in chopped multigrain bread, and baked till golden.",
            "Dressing turned out decent. Couldn't match the umami depth of anchovies, but layering flavors worked. Kinda weird to be making salads but its easy what can i say.",
        ],
        ratings: [
            "Croutons: 9/10 (crispy af)",
            "Dressing: 7/10 (missing anchovy punch)",
            "Overall Salad: 8/10 (would make again)",
            "Bird Flu Anxiety: 3/10 (survived 💯💯)",
        ],
    },
    
    "tuesdayaf": {
        "title": "Kitchen Lessons: Kt and Af",
        "date": "2025-03-26",
        "description": "Please don't cut yourself",
        "heroImage": "/blogs/tuesdayaf/hero.JPEG",
        "ingredients": [
            "Flank steak",
            "Romaine lettuce",
            "Cabbage",
            "Onions",
            "Bell peppers",
            "Corn",
            "Apples",
            "Dijon mustard",
            "Graza olive oil",
            "Rice vinegar",
            "Honey",
            "Soy sauce",
            "Soft boiled eggs",
            "Sesame sticks",
            "Fresh herbs"
        ],
        "instructions": [
            "Marinate soft boiled eggs in soy sauce and herbs",
            "Prepare vinaigrette with Dijon, olive oil, rice vinegar, and honey",
            "Oversalt and grill flank steak",
            "Boil corn and prepare vegetable mix",
            "Assemble salad with romaine and toppings",
        ],
        "fullArticle": [
            "The menu tonight emerged from the typical 'what's in the fridge' moment. Flank steak as our protein and a rainbow of vegetables fresh from the garden (publix again).",
            "Knife skills were the first hurdle. My most 'incapable' friend AF learned to chop onions and bell peppers.",
            "Idk whose reading this, but if you like sushi I'll say this:",
            "If sushi is like the Mona Lisa of culinary art - precise, meticulous, and calculated,",
            "Then salad is like those people on tiktok who throw paint at a wall and call it a day.",
            "So lets throw some paint at the wall:",
            "Soy soft boiled eggs, sesame sticks, apples, corn, onions, bell peppers, and everything in your mom's pantry",
            "Most importantly, sauce it with a vinaigrette and it comes together great! 😺😺", 
            "KT 'incapable student no.2' oversalted but grilled the flank steak to perfection",
            "ps~ Spinning water out of the salad might seem like a small step, but it's these details that separate home cooking from great home cooking.",
            "ps~2~ it was delicious kt and af, im just kidding",
        ],
        "ratings": [
            "Knife Skills Improvement: 8/10",
            "Steak Execution: 9/10",
            "Salad Creativity: 9/10",
            "AF & KT Survival Rate: 10/10",
            "Antibiotics + Benadryl + Wine: idk u should probably stop",
            "Overall Culinary Experience: 9/10"
        ]
    }
};
