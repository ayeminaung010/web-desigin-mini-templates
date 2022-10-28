/* Sort */

const containerTag = document.querySelector(".container");
const sortTags = document.querySelectorAll("#sort");
sortTags.forEach((element) => {
  element.addEventListener("click", (event) => {
    const sortType = event.target.value;
    if (sortType === "ascending") {
      // sort ascending
      const videosSortedByAscendingOrder = videos.sort(
        (a, b) => a.uploadDate.getTime() - b.uploadDate.getTime()
      );
      updateSortUI(videosSortedByAscendingOrder);
    } else if(sortType === "descending"){
      // sort descending
      const videosSortedByDescendingOrder = videos.sort(
        (a, b) => b.uploadDate.getTime() - a.uploadDate.getTime()
      );
      updateSortUI(videosSortedByDescendingOrder);
    }else if(sortType === "viewCount"){
      // sort view count
      const videosSortedByDescendingOrder = videos.sort(
        (a, b) => b.viewCount - a.viewCount
      );
      updateSortUI(videosSortedByDescendingOrder);
    }else if(sortType === "azSort"){
      // sort a-z
      const videosSortedByDescendingOrder = videos.sort(
        (a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      );
      updateSortUI(videosSortedByDescendingOrder);
    }
  });
});

const videos = [
  {
    title: 'UN objective',
    thumbnail: "https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=600",
    uploadDate: new Date(2022, 4, 5),
    viewCount: 239347,
  },
  {
    title: 'Everythings will be Alright',
    thumbnail: "https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=600",
    uploadDate: new Date(2021, 6, 5),
    viewCount: 50000,
  },
  {
    title: 'Nga To ThanDarYi',
    thumbnail: "https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&w=600",
    uploadDate: new Date(2022, 6, 12),
    viewCount: 1360532,
  },
  {
    title: 'Lu Tai Lu Tai',
    thumbnail: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=600",
    uploadDate: new Date(2021, 6, 10),
    viewCount: 12477,
  },
];

const updateSortUI = (videos) => {
  containerTag.innerHTML = "";
  videos.forEach((video) => {
    const videoTag = `
    <div class="videoContainer">
    <img src="${video.thumbnail}" alt="" style="width:200px ;height:100px">
      <h6>${video.title}</h6>
      <p>${video.uploadDate.toLocaleDateString()}</p>
      <p>${video.viewCount} views</p>
    </div>
  `;
    containerTag.innerHTML += videoTag;
  });
};

updateSortUI(videos);


