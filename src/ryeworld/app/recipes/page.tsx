import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

export default function RecipesPage() {
  const recipes = [
    {
      id: 'caesar',
      title: 'Caesar Salad',
      description: 'A classic salad with crisp romaine lettuce, crunchy croutons, and a creamy, tangy dressing. Topped with shaved parmesan and optional grilled chicken for a hearty meal.',
      image: '/caesar/caesar.JPEG',
      date: '2024-03-22',
    },
    {
      id: 'shoyu',
      title: 'KBBQ & Shoyu',
      description: 'A delightful Korean BBQ experience featuring marinated meats grilled to perfection, served with a rich shoyu (soy sauce) based marinade. Includes banchan sides and the ultimate grilling experience.',
      image: '/shoyu/grill_setup.JPEG',
      date: '2024-03-06',
    },
    {
      id: 'beefbarley',
      title: 'Beef Barley Stew',
      description: 'A comforting, hearty stew packed with tender beef chunks, nutritious barley, and a medley of vegetables. Perfect for cold days and guaranteed to warm you from the inside out.',
      image: '/beefbarley/postsear.JPEG',
      date: '2024-03-20',
    }
  ].sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={`/recipes/${recipe.id}`}
            className="group"
          >
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 hover:text-black transition-colors rounded-lg">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-medium">{recipe.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {recipe.description}
                </p>
                {recipe.date && (
                  <p className="text-xs text-gray-400 mt-1">
                    {format(parseISO(recipe.date), 'MMMM d, yyyy')}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}