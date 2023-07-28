import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";


async function fetchImages(searchValue, page = 1){
    const params = new URLSearchParams({
    key: "38504208-f94c2aebed741322dbdb10afd",
    q : searchValue,
    image_type : "photo",
    orientation: "horizontal",
    safesearch : true,
    per_page: 40,
    page: `${page}`
    });

      const {data} = await axios.get(`${BASE_URL}?${params}`);
    return data;

}

export { fetchImages};