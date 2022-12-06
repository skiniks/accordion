export default class Accordion {
	constructor(domNode) {
		// Store the DOM node.
		this.rootEl = domNode;
		this.buttonEl = this.rootEl.querySelector("button[aria-expanded]");
		// Get the content element.
		const controlsId = this.buttonEl.getAttribute("aria-controls");
		this.contentEl = document.getElementById(controlsId);
		// Set the initial state.
		this.buttonEl.setAttribute("aria-expanded", "false");
		this.open = false;
		this.contentEl.setAttribute("hidden", "");
		// Bind the event handler.
		this.buttonEl.addEventListener("click", this.onButtonClick.bind(this));
	}

	onButtonClick() {
		this.toggle(!this.open);
	}

	toggle(open) {
		// Bail if the state is already set.
		if (open === this.open) {
			return;
		}
		// Update the state to open.
		this.open = open;
		// Update the button and content attributes.
		this.buttonEl.setAttribute("aria-expanded", `${open}`);
		if (open) {
			this.contentEl.removeAttribute("hidden");
		} else {
			this.contentEl.setAttribute("hidden", "");
		}
	}
	// Public methods for opening and closing the accordion.
	open() {
		this.toggle(true);
	}
	close() {
		this.toggle(false);
	}
}
