import Image from 'next/image';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogData } from '../blogData';
import { format, parseISO } from 'date-fns';


interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function blogPage(props: PageProps) {
  const params = await props.params;
  // Fetch blog data

  const { slug } = params;

  const blog = blogData[slug];

  // If blog not found, show 404
  if (!blog) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Hero Section */}

      <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
        <h2>{format(parseISO(blog.date),'MMMM d, yyyy')}</h2>
        <p className="text-base/6 tracking-[-0.01em] text-gray-600">
          {blog.description}
        </p>
      </header>

      {/* Hero Image */}
      <Suspense fallback={<div className="w-full h-[250px] bg-gray-200 rounded-lg animate-pulse"></div>}>
        <div className="w-full h-[350px] relative mb-8">
          <Image
            src={blog.heroImage}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 1000px) 200vw, 768px"
          />
        </div>
      </Suspense>

      {/* Two-column layout for desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
      {/* Ingredients Section */}
          <section className="mb-8 bg-gray-50 p-4 rounded-lg text-gray-800">
            <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-5">
          {blog.ingredients.map((ingredient, index) => (
                <li key={index} className="mb-2 text-sm">{ingredient}</li>
          ))}
        </ul>
      </section>

          {/* Ratings Section */}
          <section className="mb-8 bg-gray-50 p-4 rounded-lg text-gray-800">
            <h2 className="text-xl font-semibold mb-3">Ratings</h2>
            <ul className="list-none">
              {blog.ratings.map((rating, index) => (
                <li key={index} className="mb-2 font-medium text-sm">{rating}</li>
          ))}
            </ul>
      </section>
        </div>

        <div className="md:col-span-2">
          {/* Instructions Section */}
      <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Cooking Process</h2>
            <ol className="list-decimal pl-5">
              {blog.instructions.map((step, index) => (
                <li key={index} className="mb-3">{step}</li>
        ))}
            </ol>
      </section>

          {/* Full Article */}
      <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">The Story Behind the Dish</h2>
            {blog.fullArticle.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
      </section>
        </div>
      </div>

    </article>
  );
}

// Generate static params for build-time generation
export async function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({
    slug: slug
  }));
}
