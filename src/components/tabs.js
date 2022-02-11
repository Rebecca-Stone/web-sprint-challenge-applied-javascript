import axios from "axios";

// TASK 3
// ---------------------

// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
const Tabs = (topics) => {
  // then the function returns the markup below.
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const parentElement = document.createElement("div");

  parentElement.classList.add("topics");
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  for (let i = 0; i < topics.length; i++) {
    const tabs = document.createElement("div");
    parentElement.appendChild(tabs);
    tabs.classList.add("tab");
    // The text inside elements will be set using their `textContent` property (NOT `innerText`).
    tabs.textContent = topics[i];
  }

  return parentElement;
};

// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
const tabsAppender = (selector) => {
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it with a console.log!).
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((res) => {
      const entryPoint = document.querySelector(selector);
      // Find the array of topics inside the response, and create the tabs using the Tabs component.
      const topics = res.data.topics;
      // Append the tabs to the element in the DOM that matches the selector passed to the function.
      entryPoint.appendChild(Tabs(topics));
    })
    .catch((err) => console.error(err));
};
export { Tabs, tabsAppender };
