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
  var element = document.getElementById(containerDivID);
  if (!element) {
    return;
  }
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
    return div;
  }
  for (var i = 0; i < articlesList.length; i++) {
    element.appendChild(getArticleDiv(articlesList[i]));
  }
}
createArticleRecommendations(relatedArticles, "related-div");
