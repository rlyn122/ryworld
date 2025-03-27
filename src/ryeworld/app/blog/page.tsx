import Link from 'next/link';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { blogData } from './blogData';
export default function Blog() {
    const sortedBlogs = Object.entries(blogData)
    .map(([id, blog]) => ({  ...blog,id }))
    .sort((a, b) => {
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);
    return dateB.getTime() - dateA.getTime();
  });


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-3xl font-bold mb-8 text-center">
        <h1>Blog</h1>
      </header>
      <div className="grid md:grid-cols-2 gap-4">

        {sortedBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.id}`}
            className="group"
          >
            <div className="flex items-center space-x-4 p-4 hover:bg-blue-100 hover:text-black transition-colors rounded-lg">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src={blog.heroImage}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div>
                <h2 className="text-lg font-medium">{blog.title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {blog.description}
                </p>
                {blog.date && (
                  <p className="text-xs text-gray-400 mt-1">
                    {format(parseISO(blog.date), 'MMMM d, yyyy')}
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