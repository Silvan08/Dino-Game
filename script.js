const hog = document.getElementById("hog")
const rock = document.getElementById("rock")
const score = document.getElementById("score")



function jump() {
  hog.classList.add("jump-animation")
  setTimeout(() => hog.classList.remove("jump-animation"), 750)
}

document.addEventListener("keypress", (event) => {
  if (!hog.classList.contains("jump-animation")) {
    jump()
  }
})


setInterval(() => {
  const hogTop = parseInt(
    window.getComputedStyle(hog).getPropertyValue("top"),
  )
  const rockLeft = parseInt(
    window.getComputedStyle(rock).getPropertyValue("left"),
  )
  score.innerText = parseInt(score.innerText) + 2;


  if (rockLeft < 0) {
    rock.style.display = "none"
  } else {
    rock.style.display = ""
  }

  if (rockLeft < 50 && rockLeft > 0 && hogTop > 150) {
  score.innerText = 0
  }
}, 50)
