import React from 'react';
import articleContent from './article-content';

const ArticlesList = () => (
  <>
    <h1>Articles</h1>
    {articleContent.map(article => (
      <h3>{article.title}</h3>
    ))}
  </>
);

export default ArticlesList;
