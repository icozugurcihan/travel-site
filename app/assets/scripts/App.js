import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'

let mobileMenu = new MobileMenu();

const q = new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
q;
const p = new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
p;





if(module.hot){
    module.hot.accept()
}
