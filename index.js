const {
	Extension,
	INPUT_METHOD,
	PLATFORMS,
} = require('deckboard-kit');
const fetch = require('node-fetch');

class CallUrl extends Extension {
	constructor() {
		super();
		this.name = 'Deckboard Call Url';
		this.platforms = [PLATFORMS.WINDOWS, PLATFORMS.MAC];
		this.configs = null;
		this.inputs = [
			{
				label: 'URL to Call',
				value: 'url-to-call',
				icon: 'link',
				mode: 'custom-value',
				fontIcon: 'fas',
				color: '#ff29df',
				input: [
					{
						label: 'URL to call',
						ref: 'urlToCall',
						type: INPUT_METHOD.INPUT_TEXT
					}
				]
			}
		];
	}

	// Executes when the extensions loaded every time the app start.
	initExtension() {
		return;
	}

	execute(action, args) {
		switch (action) {
			case 'url-to-call':
				fetch(args.urlToCall);
				break;
			default:
				break;
		}
	};
}

module.exports = sendData => new CallUrl(sendData);
