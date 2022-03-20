(function () {
  const imgs = document.getElementsByTagName("img");

  const handler = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      const imgElement = entry.target;
      if (imgElement.intersectionRatio > 0) {
        if (imgElement.getAttribute("src") == "loading.gif") {
          imgElement.src = imgElement.getAttribute("data-src");
          handler.unobserve(imgElement);
        }
      }
    });
  });

  for (let i = 0; i < imgs.length; i++) {
    handler.observe(imgs[i]);
  }
})();
