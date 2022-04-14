const Header = (title, date, temp) => {
  const parentElement = document.createElement("div");
  const dateSpan = document.createElement("span");
  const headerTitle = document.createElement("h1");
  const tempSpan = document.createElement("span");

  parentElement.classList.add("header");
  dateSpan.classList.add("date");
  tempSpan.classList.add("temp");

  dateSpan.textContent = date;
  headerTitle.textContent = title;
  tempSpan.textContent = temp;

  parentElement.appendChild(dateSpan);
  parentElement.appendChild(headerTitle);
  parentElement.appendChild(tempSpan);

  return parentElement;
};

const headerAppender = (selector) => {
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(Header(`BloomTech News`, `2/11/22`, `32deg`));
};

export { Header, headerAppender };
