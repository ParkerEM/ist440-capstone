import { LitElement, html, css } from 'lit';

class XElement extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
			city: { type: String, reflect: true },
			weather: { type: Object }
		}
	}

	constructor() {
		super();
		this.city = 'Boston';
		this.weather = {};
		this.endpoint = '/api/weather';
	}

	updated(changedProperties) {
		changedProperties.forEach((old, propName) => {
			if (propName === 'city') {
				this.getWeather(this[propName]);
			}
		});
	}

	async getWeather(city) {
		const weather = await fetch(`${this.endpoint}?city=${city}`).then(res => res.json());
		this.weather = weather?.weather[0];
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
			<p>
			
			</p>
		`
	}
}

customElements.define('x-element', XElement);