import { LitElement, html, css } from 'lit';

class XCard extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
			phrase: { type: String },
			num_Options: {},
			options: { type: Array },
			card_info: { type: Array },
			card_id: {},
		}
	}

	static get tag() {
		return 'x-card';
	}

	constructor() {
		super();
		this.phrase = 'Do you know what you want?';
		this.endpoint = '/api/';
		this.num_Options = 2;
		this.options = [{key: 002, value: Yes}, {key: 003, value: No}];
		this.card_info = [];
		this.card_id = '';
	}

	updated(changedProperties) {
		changedProperties.forEach((old, propName) => {
			if (propName === 'phrase') {
				this.getCard(this[propName]);
			}
		});
	}

	static getCard() {
		this.card_info = [this.card_id, this.phrase, this.num_Options, this.options]
		return this.card_info;
	}

	async loadCard(input) {
		// await fetch('&{this.endpoint}?q=${input}').then(res => res.json())
		// .then(data => {
		// 	this.card_info = [];
		// 	const results = {
		// 		card_id: data.ID.value,
		// 		phrase: data.phrase.value,
		// 		num_Options: data.num_Options.value,
		// 		options: data.options,
		// 	}
		// 	this.card_info.push(results);
		// });

		// for(var i=0; i<2; i++) {
		// 	this.card_info.options;
		// };
	}

	static get styles() {
		return [
			...super.styles, 
			css`
			:host {
				display: block;
			}
			p {
				display: block;
				border: 2px solid black;
				padding: 5px;
			}
			.button {
				display: inline-flex;
				border: 2px solid green;
				padding: 2px;
			}`
		];
	} 

	render() {
		return html`
		<p><label id="phrase">${this.phrase} Question</label>
			${this.options.map(item => html`
				<button id="${item.key}" onclick="loadCard(item.key)" >${item.value} </button>
			`)}
			<!-- <button id="option1">${options[0].value} Yes</button> 
			<button id="option2">${options.getvalue[1]} No</button> -->
		</p>`;		
	}
}

customElements.define(XCard.tag, XCard);