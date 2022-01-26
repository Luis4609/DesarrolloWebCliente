class PhotoGallery {
    constructor() {
      this.API_KEY = "563492ad6f91700001000001a4c79d975c9240afa011f7598bcd6ee5";
      this.galleryDiv = document.querySelector(".container");
    //   this.searchForm = document.querySelector(".header form");
    //   this.loadMore = document.querySelector(".load-more");
    //   this.logo = document.querySelector(".logo");
    //   this.pageIndex = 1;
    //   this.searchValueGlobal = "";
      this.eventHandle();
    }
    eventHandle() {
      document.addEventListener("DOMContentLoaded", () => {
        this.getImg(1);
      });
      this.searchForm.addEventListener("submit", (e) => {
        this.pageIndex = 1;
        this.getSearchedImages(e);
      });
      this.loadMore.addEventListener("click", (e) => {
        this.loadMoreImages(e);
      });
      this.logo.addEventListener("click", () => {
        this.pageIndex = 1;
        this.galleryDiv.innerHTML = "";
        this.getImg(this.pageIndex);
      });
    }
    //Get the image from the API
    async getImg(index) {
      this.loadMore.setAttribute("data-img", "curated");
      const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
      const data = await this.fetchImages(baseURL);
      this.GenerateHTML(data.photos);
      console.log(data);
    }
    async fetchImages(baseURL) {
      const response = await fetch(baseURL, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: this.API_KEY,
        },
      });
      const data = await response.json();
      // console.log(data);
      return data;
    }
    //Genera cada foto individual, con su enlace a la foto original, la IMG en html y el nombre del autor
    GenerateHTML(photos) {
      photos.forEach((photo) => {
        const item = document.createElement("div");
        item.classList.add("item");
        item.innerHTML = `
        <a href='${photo.src.original}' target="_blank">
          <img src="${photo.src.medium}">
          <h3>${photo.photographer}</h3>
        </a>
        `;
        this.galleryDiv.appendChild(item);
      });
    }
    async getSearchedImages(e) {
      this.loadMore.setAttribute("data-img", "search");
      e.preventDefault();
      this.galleryDiv.innerHTML = "";
      const searchValue = e.target.querySelector("input").value;
      this.searchValueGlobal = searchValue;
      const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`;
      const data = await this.fetchImages(baseURL);
      this.GenerateHTML(data.photos);
      e.target.reset();
    }
    async getMoreSearchedImages(index) {
      // console.log(searchValue)
      const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`;
      const data = await this.fetchImages(baseURL);
      console.log(data);
      this.GenerateHTML(data.photos);
    }
    loadMoreImages(e) {
      let index = ++this.pageIndex;
      const loadMoreData = e.target.getAttribute("data-img");
      if (loadMoreData === "curated") {
        // load next page for curated]
        this.getImg(index);
      } else {
        // load next page for search
        this.getMoreSearchedImages(index);
      }
    }
  }
  
  const gallery = new PhotoGallery();
  