import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const getList = (path) => {
  const directory = join(process.cwd(), path);
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const fullPath = join(directory, file);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      ...data,
      slug: file.replace(".md", ""),
      createdAt: data.date ? Number(new Date(data.date)) : null,
    };
  });
};

export const getFileBySlug = async (path, slug) => {
  const directory = join(process.cwd(), path);
  const fullPath = join(directory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content: markdownContent } = matter(fileContents);

  return {
    ...data,
    slug,
    createdAt: data.date ? Number(new Date(data.date)) : null,
  };
};
