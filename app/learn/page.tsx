import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Image from 'next/image';
import matter from 'gray-matter';

export default function Category({ params: { category } }: { params: { category: string } }) {
  const blogDir = 'learn';
  const descriptionDir = 'description';

  const folders = fs.readdirSync(path.join(blogDir), { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const descriptions: { [key: string]: string } = {};

  fs.readdirSync(descriptionDir).forEach(filename => {
    const fileContent = fs.readFileSync(path.join(descriptionDir, filename), 'utf-8');
    const { data: frontMatter } = matter(fileContent);
    const slug = filename.replace('.mdx', '');
    descriptions[slug] = frontMatter.description;
  });

  return (
    <main className="flex flex-col items-center justify-center max-h-screen ">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4 font-">My Next.js Linux site</h1>
        <h2 className="text-2xl font-bold mb-8">Latest Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {folders.map(folder => (
            <div key={folder} className="rounded-xl shadow-lg  overflow-hidden cursor-pointer hover:shadow-xl hover:bg-[#E8E8E8] hover:text-black hover:translate-x-2 transition duration-300">
              <Link href={`/learn/${folder}`} key={folder}>
                <div className="flex flex-col items-center justify-center p-6">
                  <div className="rounded-xl overflow-hidden mb-4">
                    <Image src={`/${folder}.png`} width={100} height={250} alt={folder} />
                  </div>
                  <h3 className="text-xl font-bold font-ibm">{folder}</h3>
                  <p className="text-center mt-3 font-semibold font-mont  ">{descriptions[folder]}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
