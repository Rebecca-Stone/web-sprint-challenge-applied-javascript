import axios from "axios";

const Tabs = (topics) => {
  const parentElement = document.createElement("div");
  parentElement.classList.add("topics");
  for (let i = 0; i < topics.length; i++) {
    const tabs = document.createElement("div");
    parentElement.appendChild(tabs);
    tabs.classList.add("tab");
    tabs.textContent = topics[i];
  }
  return parentElement;
};

const tabsAppender = (selector) => {
  axios
    .get(`http://localhost:5000/api/topics`)
    .then((res) => {
      const entryPoint = document.querySelector(selector);
      const topics = res.data.topics;
      entryPoint.appendChild(Tabs(topics));
    })
    .catch((err) => console.error(err));
};
export { Tabs, tabsAppender };
