// Remember to import the data and Dog class!
import { dogProfiles } from "./Dog.js";

const likeBtn = document.getElementById("likebtn");
const nopeBtn = document.getElementById("nopebtn");

likeBtn.addEventListener("click", (e) => {
  getNextDogLike();
});

nopeBtn.addEventListener("click", (e) => {
  getNextDogNope();
});

const getNextDogLike = () => {
  document.getElementById("liketext").classList.add("show");
  nopeBtn.setAttribute("disabled", "");
  dogProfiles.shift();
  setTimeout(() => {
    renderProfile();
    nopeBtn.removeAttribute("disabled");
    document.getElementById("liketext").classList.remove("show");
  }, 1000);
};

const getNextDogNope = () => {
  document.getElementById("nopetext").classList.add("show");
  likeBtn.setAttribute("disabled", "");
  dogProfiles.shift();
  setTimeout(() => {
    renderProfile();
    likeBtn.removeAttribute("disabled");
    document.getElementById("nopetext").classList.remove("show");
  }, 1000);
};

const renderProfile = () => {
  document.getElementById("profileElement").innerHTML = `<img
  class="dogphoto"
  src=${dogProfiles[0].avatar}
  alt="picture of dog"
  />
<div class="tindog-text">
  <h1 class="dog-name">${dogProfiles[0].name}, ${dogProfiles[0].age}</h1>
  <p class="dog-text">${dogProfiles[0].bio}</p>
</div>`;
};

renderProfile();
