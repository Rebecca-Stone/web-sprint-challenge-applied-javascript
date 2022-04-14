import axios from "axios";

const Card = (article) => {
  const articleWrapper = document.createElement("div");
  const articleHeader = document.createElement("div");
  const articleAuthor = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const author = document.createElement("span");

  articleWrapper.classList.add("card");
  articleHeader.classList.add("headline");
  articleAuthor.classList.add("author");
  imgContainer.classList.add("img-container");

  articleWrapper.appendChild(articleHeader);
  articleWrapper.appendChild(articleAuthor);
  articleAuthor.appendChild(imgContainer);
  articleAuthor.appendChild(author);
  imgContainer.appendChild(authorImg);

  authorImg.src = article.authorPhoto;
  articleHeader.textContent = article.headline;
  author.textContent = `By ${article.authorName}`;

  articleWrapper.addEventListener("click", () => {
    // console.log(articleHeader);
  });
  return articleWrapper;
};

const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      const entryPoint = document.querySelector(selector);
      const article = res.data.articles;

      const javaScript = article.javascript;
      const bootStrap = article.bootstrap;
      const technology = article.technology;
      const jquery = article.jquery;
      const node = article.node;

      for (let i = 0; i < javaScript.length; i++) {
        const newCard = Card(javaScript[i]);
        entryPoint.appendChild(newCard);
      }

      for (let i = 0; i < bootStrap.length; i++) {
        const newCard = Card(bootStrap[i]);
        entryPoint.appendChild(newCard);
      }

      for (let i = 0; i < technology.length; i++) {
        const newCard = Card(technology[i]);
        entryPoint.appendChild(newCard);
      }

      for (let i = 0; i < jquery.length; i++) {
        const newCard = Card(jquery[i]);
        entryPoint.appendChild(newCard);
      }

      for (let i = 0; i < node.length; i++) {
        const newCard = Card(node[i]);
        entryPoint.appendChild(newCard);
      }
    })
    .catch((err) => console.error(err));
};

export { Card, cardAppender };
