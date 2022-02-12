// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
const Header = (title, date, temp) => {
  const parentElement = document.createElement("div");
  const dateSpan = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const tempSpan = document.createElement("span");

  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  parentElement.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  dateSpan.textContent = date;
  headerTitle.textContent = title;
  tempSpan.textContent = temp;

  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>

  parentElement.appendChild(dateSpan);
  parentElement.appendChild(headerTitle);
  parentElement.appendChild(tempSpan);

  return parentElement;
};

// TASK 2
// ---------------------
// Implement this function taking a css selector as its only argument.
const headerAppender = (selector) => {
  // It should create a header using the Header component above, passing arguments of your choosing.
  const entryPoint = document.querySelector(selector);

  // It should append the header to the element in the DOM that matches the given selector.
  entryPoint.appendChild(Header(`BloomTech News`, `2/11/22`, `32deg`));
};

export { Header, headerAppender };
