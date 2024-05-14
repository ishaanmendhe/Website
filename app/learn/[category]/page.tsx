import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function Category({ params: { category } }: { params: { category: string } }) {
  const blogDir = 'learn';
  const categoryDir = path.join(blogDir, category);

  const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.mdx'));
  const blogs = files.map(filename => {
    const fileContent = fs.readFileSync(path.join(categoryDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace('.mdx', ''),
    };
  });

  return (
    <main className="flex flex-col">
      <div className='text-3xl font-bold font-ibm'>Topics in {category} :</div>
      <div className='p-5 mt-5'>
        {blogs.map(blog => (
          <Link href={`/learn/${category}/${blog.slug}`} passHref key={blog.slug}>
            <div className="py-2 flex justify-between align-middle gap-2">
              <h3 className="text-lg font-bold font-ibm hover:text-yellow-600"><li>{blog.meta.title}</li></h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}