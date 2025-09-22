const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const CONTENT_DIR = path.join(process.cwd(), 'src/content');

function getAllContentPaths(type) {
  const dirPath = path.join(CONTENT_DIR, type);
  const fileNames = fs.readdirSync(dirPath);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(dirPath, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: slug,
    };
  });
}
module.exports = {
  getAllContentPaths,
};
