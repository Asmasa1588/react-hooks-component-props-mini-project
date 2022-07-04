import React from "react";
import blogData from "../data/blog";
import { Header } from "./Header";
import { ArticleList } from "./ArticleList";
import {About} from "./About"

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name="Jupiter's Blog" />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList>{blogData.posts}</ArticleList>
    </div>
  );
}

export default App;
