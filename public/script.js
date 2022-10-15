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
const londonArea = document.querySelector(".london");
const cities = {};

const eventRequest = async () => {
  const res = await (await fetch("http://127.0.0.1:3000/events")).json();
  return res;
};

const citySection = (city) => {
  if (cities[city]) {
    return cities[city];
  } else {
    const newCitySection = document.createElement("div");
    newCitySection.classList.add("card-container");
    cities[city] = newCitySection;
    return newCitySection;
  }
};

const createTags = (arr) => {
  let tags = "";

  arr.forEach((tag) => {
    tags += `<p class=tag>${tag}</p>`;
  });
  return tags;
};

const populateCards = async () => {
  const data = await eventRequest();
  for (let event in data.events) {
    citySection(data.events[event]["city"]).innerHTML += `
    <card class="event-card">
            <img class="card-image" src="./images/stage.jpg" />
            <h3>${event}</h3>
            <div class="tag-container">
              ${createTags(data.events[event].tags)}
            </div>

            <div class="date">
              <div class="cal-wrapper">
                <img
                  class="calendar"
                  src="./images/calendar.png"
                  alt="calendar icon"
                />
              </div>
              <p>${data.events[event].date}</p>
            </div>
            <div class="date">
              <div class="cal-wrapper">
                <img
                  class="calendar"
                  src="./images/pin.png"
                  alt="location icon"
                />
              </div>
              <p>${data.events[event].venue}</p>
            </div>
            <p class="description">${data.events[event].description}
            </p>
          </card>
        </div>
    `;
  }
  Object.keys(cities).forEach((loc) => {
    let h2 = document.createElement("h2");
    h2.innerText = loc;
    eventArea.append(h2);
    eventArea.append(cities[loc]);
  });
};

populateCards();

// requestButton.addEventListener("click", async () => {
//   const eventData = await eventRequest();
//   requestButton.style.display = "none";
//   for (let event in eventData.events) {
//     const eventElement = document.createElement("h2");
//     eventElement.innerText = event;
//     eventArea.append(eventElement);
//   }
// });
