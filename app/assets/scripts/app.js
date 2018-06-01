import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
var featureItem = new RevealOnScroll($(".feature-item"),"85%");
var testimonial = new RevealOnScroll($(".testimonial"), "60%");