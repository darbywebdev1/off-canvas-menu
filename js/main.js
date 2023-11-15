const button = document.querySelector("button");
const body = document.body;

button.addEventListener("click", (event) => {
  console.log("offsite-is-open");
});

button.addEventListener("click", (event) => {
  if (body.classList.contains("offsite-is-open")) {
    body.classList.remove("offsite-is-open");
  } else {
    body.classList.add("offsite-is-open");
  }
});
