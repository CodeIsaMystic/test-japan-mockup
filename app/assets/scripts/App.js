import "../styles/styles.css"
import "lazysizes"

import RevealOnScroll from "./modules/RevealOnScroll"

TweenLite.set(".intro, .introHeading", { x: "-101%" })

var lines = new TimelineMax()
  .to(".introHeading", 1, { x: "0%" })
  .to(".intro", 1, { x: "0%" }, "+=0.3")

new RevealOnScroll(document.querySelectorAll(".reveal-img1"), 65)
new RevealOnScroll(document.querySelectorAll(".reveal-img2"), 65)
new RevealOnScroll(document.querySelectorAll(".service-item"), 75)
new RevealOnScroll(document.querySelectorAll(".reveal-imgT"), 65)
new MobileMenu()

if (module.hot) {
  module.hot.accept()
}
