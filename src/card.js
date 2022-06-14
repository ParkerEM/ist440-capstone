import { LitElement, html, css } from 'lit';

class Card extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
		}
	}

	constructor() {
		super();
		this.endpoint = '/api/';
	}

	updated(changedProperties) {
		changedProperties.forEach((old, propName) => {
			if (propName === 'city') {
				this.getWeather(this[propName]);
			}
		});
	}

	static get styles() {
		return css`
			:host {
				display: block;
			}
			.overcast {
				color: white;
				background-color: #555555;
			}
			.mist {
				color: blue;
				background-color: black;
			}
			.clear.sky {
				color: black;
				background-color: blue;
			}
			.snow {
				background-color: orange;
				color: white;
			}
		`;
	}
	render() {
		return html`
			
		`
	}
}

customElements.define('custom-card', Card);