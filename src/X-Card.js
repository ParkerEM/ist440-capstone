import { LitElement, html, css } from 'lit';

class XCard extends LitElement {
	static get properties() {
		return {
			endpoint: { type: String },
			phrase: { type: String },
			num_Options: {},
			options: { type: Array },
			card_info: { type: Array },
			card_ID: {},
		}
	}

	static get tag() {
		return 'x-card';
	}

	constructor() {
		super();
		this.phrase = 'Do you know what you want?';
		this.endpoint = '/api/getCard';
		this.num_Options = 2;
		this.options = [{num: 2, text: "Yes"}, {num: 3, text: "No"}];
		this.card_info = [];
		this.card_ID = '';
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
		var qString = `cardID=${input.toString()}`; 
		await fetch(`${this.endpoint}?${qString}`).then(res => res.json()).then(data => {
			this.card_info = [];
			const results = {
				card_ID: data.cardID.value,
				phrase: data.phrase.value,
				num_Options: data["num_Options"],
				options: data["options"],
			}
			this.card_info.push(results);
		});

		return this.card_info;
		// for(var i=0; i<2; i++) {
		// 	this.card_info.options;
		// };
	}

	static get styles() {
		return [css`
			/* :host {
				display: block;
			}
			div {
				display: block;
				border: 2px solid black;
				padding: 5px;
			}
			.x-card {
				box-shadow:0 4px 10px 0 rgba(0,0,0,0.2),0 4px 20px 0 rgba(0,0,0,0.19);
			} */
			button {
				display: inline-block;
				border: 2px solid green;
				padding:8px 16px;
				color:inherit;
				background-color:inherit;
				text-align:center;
				white-space:nowrap;
			}
		`];
	} 

	render() {
		return html`
		<div class="x-card">
			<h3 id="phrase">${this.phrase} Question</h3>
			<br>
			${this.card_info.options.map(item => html`
				<button id="btn-${item.num}" onclick="loadCard(item.num)">${item.text}</button>
			`)}
		</div>`;		
	}
}

customElements.define(XCard.tag, XCard);