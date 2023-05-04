import React from 'react';
import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';

function Blog() {
  const [markdowns, setMarkdowns] = React.useState([]);

  React.useEffect(() => {
    const postDir = path.join(__dirname, 'post');
    fs.readdir(postDir, (err, files) => {
      if (err) throw err;

      const markdownFiles = files.filter((file) => path.extname(file) === '.md');

      const markdownPromises = markdownFiles.map((file) => {
        const filePath = path.join(postDir, file);
        return fs.promises.readFile(filePath, 'utf-8');
      });

      Promise.all(markdownPromises)
        .then((markdowns) => setMarkdowns(markdowns))
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <div className="markdown-files">
      {markdowns.map((markdown, index) => (
        <ReactMarkdown key={index}>{markdown}</ReactMarkdown>
      ))}
    </div>
  );
}

export default Blog;

