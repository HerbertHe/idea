import Giscus from "@giscus/react";
import "./App.less";
import avatar from "./assets/avatar.jpeg";

const App = () => {
  return (
    <div className="App">
      <div className="idea-text">
        <div className="idea-avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="idea-desc">
          <header className="text-3xl font-bold">Share idea with me!</header>
          <p>Amazing project comes from amazing idea! 💡</p>
          <p>plz leave your idea here! 😯</p>
          <p>Or, you can email to me</p>
          <a href="mailto:hi@ibert.me">hi@ibert.me</a>
        </div>
      </div>
      <div className="idea-comments">
        <Giscus
          id="comments"
          repo="HerbertHe/idea"
          repoId="R_kgDOIojDbQ"
          category="Ideas"
          categoryId="DIC_kwDOIojDbc4CTH7M"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emit-metadata="0"
          input-position="top"
          term="Welcome to share idea with me!"
          theme="preferred_color_scheme"
          lang="en"
        />
      </div>
    </div>
  );
};

export default App;
