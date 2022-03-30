import "../styles/styles.css"
import "lazysizes"

import RevealOnScroll from "./modules/RevealOnScroll"

/* No time to test and implement animations
I just added some chunk of reusable code 
but I will comment it out for matters of time
TweenLite.set(".intro, .introHeading", { x: "-101%" })

var lines = new TimelineMax()
.to(".introHeading", 1, { x: "0%" })
.to(".intro", 1, { x: "0%" }, "+=0.3")

new RevealOnScroll(document.querySelectorAll(".reveal-img1"), 65)
new RevealOnScroll(document.querySelectorAll(".reveal-img2"), 65)
*/

if (module.hot) {
  module.hot.accept()
}
