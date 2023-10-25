//next + prev button slider
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};
document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

//map data timeline
const listChallenger = [
  {
    day: "09/10/2023",
    number: "Thử thách 0",
    name: "Xây dựng website theo mẫu cho sẵn",
    link: "https://tt1-ine.vercel.app/",
  },
  {
    day: "17/10/2023",
    number: "Thử thách 1",
    name: "Xây dựng website Portfolio cá nhân",
    link: "https://hoanghh.thuctap.inevn.com/tt1/index.html",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 2",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 3",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 4",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 5",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 6",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 7",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 8",
    name: "Coming soon",
    link: "Coming soon",
  },
  {
    day: "09/10/2023",
    number: "Thử thách 9",
    name: "Coming soon",
    link: "Coming soon",
  },
];

var Challdata = document.querySelector(".box");

document.getElementById("challen").innerHTML = listChallenger
  .map(
    (challenger) =>
      `<li id ="challList">
        <span class="timeline-point"></span>
        <span class="date">${challenger.day}</span>
        <div class="timeline-content">
          <h1>${challenger.number}</h1>
          <h2>${challenger.name}</h2>
          <a href="${challenger.link}">${challenger.link}</a>
        </div>
      </li>`
  )
  .join("");

//animation progress
const line = document.querySelector(".timeline-innerline");

let i = 0;
let i2 = 1;
let target1 = document.querySelector(".timeline ul");
let target2 = document.querySelectorAll(".timeline ul li");

const timeline_events = document.querySelectorAll("ul li");

console.log(timeline_events);

function showTime(e) {
  e.querySelector(".timeline-point").style.background = "blue";
  e.querySelector(".date").style.opacity = "100%";
  e.querySelector(".timeline-content").style.opacity = "100%";
  e.querySelector(".timeline-content").style.transform = "translateY(0px)";
}

console.log(target2);

function slowLoop() {
  setTimeout(function () {
    showTime(timeline_events[i]);
    timelineProgress(i + 1);
    i++;
    if (i < timeline_events.length) {
      slowLoop();
    }
  }, 800);
}

//% thanh progress, chuyen doc va ngang
function timelineProgress(value) {
  let progress = `${(value / timeline_events.length) * 100}%`;
  if (window.matchMedia("(min-width: 870px)").matches) {
    line.style.width = progress;
    line.style.height = "4px";
  } else {
    line.style.height = progress;
    line.style.width = "4px";
  }
}

//kiem tra viec giao nhau cua ul li va progress, showTime
let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
        if (window.matchMedia("(min-width: 870px)").matches) {
          slowLoop();
        } else {
          showTime(entry.target);
          timelineProgress(i2);
          i2++;
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 1, rootMargin: "0px 0px -50px 0px" }
);

if (window.matchMedia("(min-width: 870px)").matches) {
  observer.observe(target1);
} else {
  target2.forEach((t) => {
    observer.observe(t);
  });
}
