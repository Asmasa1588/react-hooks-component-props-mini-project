import React from "react";
import { Article } from "./Article";

export const ArticleList = ({ children }) => {
  return (
    <main>
      {children.map((article) => (
        <Article
          key={article.id}
          title={article.title}
          date={article.date}
          preview={article.preview}
          minutes={article.minutes}
        />
      ))}
    </main>
  );
};
