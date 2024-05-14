// lib/getBlogs.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getBlogs = (category: string) => {
    const blogDir = 'learn';
    const categoryDir = path.join(blogDir, category);
    const files = fs.readdirSync(categoryDir).filter((file) => file.endsWith('.mdx'));

    const blogs = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(categoryDir, filename), 'utf-8');
        const { data: frontMatter } = matter(fileContent);
        return {
            meta: frontMatter,
            slug: filename.replace('.mdx', ''),
        };
    });

    return blogs;
};