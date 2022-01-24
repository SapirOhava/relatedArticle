const relatedArticles = [
  {
    title: "best travel places for fall",
    img: "./photos/autumn.jpeg",
    url: "https://www.google.com/",
  },
  {
    title: "things you didnt noticed happend on avengers",
    img: "./photos/avengers.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "the most cutest dogs you have ever seen!",
    img: "./photos/BeFunky.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "most dangerous places to travel",
    img: "./photos/a1.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "shopping secrets",
    img: "./photos/shopping.jpg",
    url: "https://www.google.com/",
  },
];

let element = document.getElementById("relatedDiv");
relatedArticles.forEach((item) => {
  let div = document.createElement("div");
  div.className = "relatedArticleIMGDiv";
  let image = document.createElement("img");
  image.setAttribute("src", item.img);
  image.className = "relatedArticleImage";
  image.addEventListener("click", function () {
    window.location.replace(item.url);
  });
  let title = document.createElement("label");
  title.textContent = item.title;
  title.className = "relatedArticleTitle";
  div.appendChild(image);
  div.appendChild(title);
  element.appendChild(div);
});
