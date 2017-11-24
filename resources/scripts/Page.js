// Thank you:
// https://www.ynonperek.com/2017/08/24/vanilla-single-page-router-architecture/

class Page {
	constructor(url) {
		// this.url = `pages/` + url;
		this.url = url;
	}

	load() {
		return $.get(this.url).then(res => this.html = res);
	}

	show(view) {
		view.innerHTML = this.html;
	}
}