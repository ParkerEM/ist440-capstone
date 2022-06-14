import { LitElement, html, css } from 'lit';

class Card extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
			phrase: { type: String },
			num_Options: {},
			options: { type: Array },
		}
	}

	constructor() {
		super();
		this.phrase = 'Do you know what you want?';
		this.endpoint = '/api/';
		this.num_Options = 2;
		this.options = {Yes, No};
	}

	updated(changedProperties) {
		changedProperties.forEach((old, propName) => {
			if (propName === 'phrase') {
				this.getCard(this[propName]);
			}
		});
	}

	static getCard(input,) {
		this.phrase = input;

	}

	static get styles() {
		return css`
			p {
				display: block;
			}
		`;
	} 

	render() {
		return html`
			<label id="phrase" name="phrase">${this.phrase} Question</label>
			<button id="option1">${options[0].value} Yes</button> 
			<button id="option2">${options.getvalue[1]} No</button>
		`
	}
}

customElements.define('custom-card', Card);