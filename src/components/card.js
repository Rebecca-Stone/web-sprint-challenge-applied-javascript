import axios from "axios";
// TASK 5
// ---------------------

// Implement this function, which should return the markup you see below.
// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
const Card = (article) => {
  const articleWrapper = document.createElement("div");
  const articleHeader = document.createElement("div");
  const articleAuthor = document.createElement("div");
  const imgContainer = document.createElement("div");
  const authorImg = document.createElement("img");
  const author = document.createElement("span");

  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  articleWrapper.classList.add("card");
  articleHeader.classList.add("headline");
  articleAuthor.classList.add("author");
  imgContainer.classList.add("img-container");

  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  articleWrapper.appendChild(articleHeader);
  articleWrapper.appendChild(articleAuthor);
  articleAuthor.appendChild(imgContainer);
  articleAuthor.appendChild(author);
  imgContainer.appendChild(authorImg);

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  authorImg.src = article.authorPhoto;
  articleHeader.textContent = article.headline;
  author.textContent = `By ${article.authorName}`;

  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  articleWrapper.addEventListener("click", () => {
    console.log(articleHeader);
  });
  return articleWrapper;
};


// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
const cardAppender = (selector) => {
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      const entryPoint = document.querySelector(selector);
      const article = res.data.articles;
      
      // Create a card from each and every article object in the response, using the Card component.
      const javaScript = article.javascript;
      const bootStrap = article.bootstrap;
      const technology = article.technology;
      const jquery = article.jquery;
      const node = article.node;

      // Append each card to the element in the DOM that matches the selector passed to the function.
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