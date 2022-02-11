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

  authorImg.src = article.authorPhoto;
  articleHeader.textContent = article.headline;
  author.textContent = `By ${article.authorname}`;

  articleWrapper.appendChild(articleHeader);
  articleWrapper.appendChild(articleAuthor);
  articleAuthor.appendChild(imgContainer);
  articleAuthor.appendChild(author);
  imgContainer.appendChild(authorImg);

  articleWrapper.addEventListener("click", () => {
    console.log(articleHeader);
  });
  return articleWrapper;
};



const cardAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/articles`)
    .then((res) => {
      const entryPoint = document.querySelector(selector);
      const article = res.data.articles;

      for (let i = 0; i < article.length; i++) {
        const newCard = Card(article.i);
        entryPoint.appendChild(newCard);
        console.log(article.i);
      }
    })
    .catch((err) => console.error(err));
};
// TASK 5
// ---------------------
// Implement this function, which should return the markup you see below.

// It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.

// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!

// The text inside elements will be set using their `textContent` property (NOT `innerText`).

// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

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

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.

// It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).

// However, the articles do not come organized in a single, neat array. Inspect the response closely!

// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

export { Card, cardAppender };

//ideas

// const articleArray = [];

// const javaScript = articles.javascript;
// const bootStrap = articles.bootstrap;
// const technology = articles.technology;
// const jquery = articles.jquery;
// const node = articles.node;

// articleArray.push(javaScript, bootStrap, technology, jquery, node);
// console.log(articleArray);

// articles.forEach((i) => {
//   const newArticles = Card(i);
//   entryPoint.appendChild(newArticles);
//   console.log(newArticles);
// });
