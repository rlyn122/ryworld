interface RecipeCardProps {
    title: string;
    description: string;
  }
  
  export default function RecipeCard({ 
    title, 
    description 
  }: RecipeCardProps) {
    return (
      <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }