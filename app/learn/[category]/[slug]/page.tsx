import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Sidebar from './_components/sidebar';

export async function generateStaticParams() {
  const blogDir = 'learn';
  const categories = fs
    .readdirSync(path.join(blogDir), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const paths = categories.flatMap(category => {
    const files = fs
      .readdirSync(path.join(blogDir, category))
      .filter(file => file.endsWith('.mdx'));
    return files.map(file => ({ params: { category, slug: file.replace('.mdx', '') } }));
  });

  return paths;
}

function getPost({ slug, category }: { slug: string; category: string }) {
  const markdownFile = fs.readFileSync(path.join('learn', category, `${slug}.mdx`), 'utf-8');
  const { data: frontMatter, content } = matter(markdownFile);
  return { frontMatter, slug, content };
}

export default function Page({ params }: { params: { slug: string; category: string } }) {
  const { category, slug } = params;
  const props = getPost({ slug, category });

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 bg-[#3A506B] shadow-md rounded-lg p-2 font-ibm">
        <Sidebar params={{ category }}  />
      </div>
      <div className="w-3/4 pl-5 mx-auto flex flex-col">
        <article className="prose prose-sm md:prose-base lg:prose-lg prose-slate prose-invert flex-grow">
          <h1 className='font-ibm'>{props.frontMatter.title}</h1>
          <MDXRemote source={props.content}></MDXRemote>
        </article>
      </div>
    </div>
  );
}