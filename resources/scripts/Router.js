// Thank you:
// https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/

class Router extends Reactor {
	constructor(routes, view) {
		super();
		this.registerEvent(`change`);

		this.routes = routes;
		this.view = view;
		window.onhashchange = this.hasChanged.bind(this);
		this.hasChanged();
	}

	async hasChanged(event) {
		if (window.location.hash.length > 0) {
			const pageName = window.location.hash.substr(2);
			this.show(pageName);
		} else if (this.routes['#default']) {
			this.show('#default');
		}
	}

	async show(pageName) {
		const page = this.routes[pageName];
		await page.load();
		this.view.innerHTML = ``;
		page.show(this.view);
		this.dispatchEvent(`change`, {pageName});
	}
}