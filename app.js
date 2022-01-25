var relatedArticles = [
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
  {
    title: "These Destinations Don't Quite Match Peoples Expectations",
    img: "http://i.imgur.com/Yl5JfFv.jpg",
    url: "https://www.google.com/",
  },
];

function createArticleRecommendations(articlesList, containerDivID) {
  function getArticleDiv(articleObject) {
    var div = document.createElement("div");
    div.className = "related-article-img-div";
    var image = document.createElement("img");
    var anchor = document.createElement("a");
    anchor.setAttribute("href", articleObject.url);
    image.setAttribute("src", articleObject.img);
    image.className = "related-article-image";
    var title = document.createElement("label");
    title.textContent = articleObject.title;
    title.className = "related-article-title";
    anchor.className = "related-article-anchor";
    anchor.appendChild(image);
    anchor.appendChild(title);
    div.appendChild(anchor);
    containerDivID.appendChild(div);
  }
  for (var i = 0; i < articlesList.length; i++) {
    getArticleDiv(articlesList[i]);
  }
}
var element = document.getElementById("related-div");
createArticleRecommendations(relatedArticles, element);
