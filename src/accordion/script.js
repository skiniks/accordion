import Accordion from "./accordion";
export { Accordion };
export default Accordion;

const accordions = document.querySelectorAll(".wp-block-rss-accordion h3");

accordions.forEach((accordionEl) => {
	new Accordion(accordionEl);
});
