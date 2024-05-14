import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from "next/link";

export default function Sidebar({ params: { category } }: { params: { category: string } }) {
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
    <div className="sidebar bg-[#3A506B] text-[#E8E8E8] flex flex-col">
      <h2 className="sidebar-title px-4 py-2 text-lg font-bold uppercase">{category}</h2>
      <nav className="sidebar-nav flex-grow">
        <ul>
          {blogs.map(blog => (
            <li key={blog.slug} className="sidebar-link">
              <Link href={`/learn/${category}/${blog.slug}`} passHref>
                <div className="px-4 py-2 hover:bg-[#1E293B] transition-colors duration-200">
                  {blog.meta.title}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}