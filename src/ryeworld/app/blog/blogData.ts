
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
            'soak bamboo skewers in water',
            'skewer Beef onions and bell peppers',
            'skewer pork belly and green onions',
            'marinate pork belly in gochujang sauce',
            'grill on Iwatani outside',
            'Eat with rice'
        ],
        fullArticle: [
            'There is something magical about grilling on a wire grill with a flame as opposed to in the pan. This was my first time trying out the new Iwatani I bought, and it did not dissapoint.',
            'We skewered a variety of random ahh meats from the fridge, including pork belly, flank steak, and chuck roast on 6 inch bamboo skewers that were much too small.',
            'We began grilling inside on the dining table, but quickly set off the fire alarm 😧😧 Its okay tho, cuz we moved outside and bent hungrily around our little balcony table',
            'The gochujang pork belly was the buss of the night, the caramelization of sugar, the crispy texture from seared pork belly, the tongue coating fat and grilled green onion for a bite and acidity. There is a reason why negima yakitori exists',
            "Other than that, the soy marinated beef chuck steak was also good. Salt and peppered beef flank steak came in last, the quality of meat probably being more important when theres no marinated",
            'Its nice to chill outside, hangout with the roomies, and grill some meat. Albeit the Iwatani is a bit small and a hassle to clean, it is a great addition to the kitchen.',
        ],
        ratings: [
            "Iwatani: 5/5",
            "Gochujang Marinated Pork Belly Green Onion Skewers: 6/5",
            "Flank Steak Skewers: 3/5",
            "Chuck Roast Skewers: 3/5",
            "Corn with Herb Butter: 4/5",
            "Back pain from hunching over: 7/5 (sore for the rest of the night)"
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
            'I never even heard of barley until I started making this stew, but now it is my go-to meal prep that\'s basically a hug in a pot. (not in a freaky way... idk that sounds weird)',
            'Normally, I have this recipe pretty standardized, but this time I switched things up. The beef section at Publix often looks sadder than one of those cheap clothing stores in the mall - you know, the ones that assault your senses with that distinctive smell thats like a chemical cocktail of synthetic fabrics and industrial adhesives...what i imagine a paper factory looks like. This day was no exception - short ribs and chuck roast were looking low-quality with little marbling expensive as hell. Solution? Beef shank.',
            'I seared the beef hunks whole first, creating fond while also controlling the browning/drying up of meat on these thicker cuts. Beef shank\'s got hella intramuscular fat that needs to render out slowly. Good thing I\'m not in a rush.',
            'finally, I sauted the mirepoix and stewed it with chicken stock, garlic, and bay leaves.',
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
            "The steaks turned out unexpectedly fantastic—Publix GreenWise delivering a rare win. We grilled over foil, basting in garlic herb butter and dipping in ssamjang. The honey pork, however, suffered. The honey burned off too fast, leaving it mid at best IMO.",
            "Shoyu chicken was solid but slightly too acidic. Next time, I'll go easier on the vinegar. I tried to make onsen tamago, but it just hard boiled. As much as we try our best to ball, we'll have to ball better next time.",
        ],
        ratings: [
            "Steak: 9/10",
            "Honey Pork: 6/10 (honey burned off)",
            "Shoyu Chicken: 8/10 (too acidic)",
            "Pickled Radishes: 5/10 (too sour!)",
            "Asparagus Pickles: 5/10 (barely ate them)",
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
            "I was watching Kenji Lopez-Alt break down Caesar salad and got inspired at 3am last night. Not the most exciting YT vid to be watching for everyone but ig im weird for that. Even though I didnt have anchovies, fresh parm, and making raw egg dressing in a bird flu pandemic seems like an issue, it turned out perfectly fine.",
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
            "ps~ Spinning water out of the salad might seem like a small step, but it really lets the leaves retain more sauce in each bite.",
            "ps~2~ it was delicious kt and af, im very proud of you",
        ],
        "ratings": [
            "Knife Skills Improvement: 7/10",
            "Steak Execution: 7/10",
            "Salad Creativity: 6/10 (i gotta buy more random shit at the store)",
            "AF & KT Survival Rate: 10/10",
            "Antibiotics + Benadryl + Wine: idk u should probably stop",
        ]
    }
};
