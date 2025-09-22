import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = join(process.cwd(), 'src/content');

function getAllContentPaths(type) {
  const dirPath = join(CONTENT_DIR, type);
  const fileNames = readdirSync(dirPath);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = join(dirPath, fileName);
    const fileContents = readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: slug,
    };
  });
}

export default {
  getAllContentPaths,
};
