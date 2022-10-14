const images = {
  "Musician playing an acoustic guitar and singing into a microphone":
    "acoustic.jpg",
  "An audience member raises their hands infront of a stage": "audience.jpg",
  "A musician jumps while on stage, facing the crowd": "jump.jpg",
  "A group of rock musicians practice with their instruments": "practice.jpg",
  "A festival stage at night is lit up with a large crown in front":
    "stage.jpg",
};

const collage = document.querySelector(".collage-container");
const eventArea = document.querySelector(".events-container");
const requestButton = document.querySelector("button");

const eventRequest = async () => {
  const res = await (await fetch("http://127.0.0.1:3000/events")).json();
  return res;
};

for (const image in images) {
  img = document.createElement("img");
  img.alt = image;
  img.src = `./images/${images[image]}`;
  collage.append(img);
}

// requestButton.addEventListener("click", async () => {
//   const eventData = await eventRequest();
//   requestButton.style.display = "none";
//   for (let event in eventData.events) {
//     const eventElement = document.createElement("h2");
//     eventElement.innerText = event;
//     eventArea.append(eventElement);
//   }
// });
