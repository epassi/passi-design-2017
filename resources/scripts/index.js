document.addEventListener(`DOMContentLoaded`, event => {
	const router = new Router(
		{
			lab: new Page(`lab.html`),
			word: new Page(`word.html`),
			life: new Page(`life.html`),
			'#default': new Page(`lab.html`)
		},
		document.querySelector(`.main`)
	);

	router.addEventListener(`change`, event => {
		let $labItems = document.getElementsByClassName(`lab`);
		let $wordItems = document.getElementsByClassName(`word`);

		let activeNavItem = document.getElementsByClassName(`header__nav-item--active`)[0];
		activeNavItem.className = `header__nav-item`;

		let newActiveNavItem = document.getElementById(event.pageName);
		newActiveNavItem.className = `header__nav-item--active`;

		for (let $lab of $labItems) {
			$lab.addEventListener(`click`, event => {
				window.location = $lab.dataset.href;
			});
		}

		for (let $word of $wordItems) {
			$word.addEventListener(`click`, event => {
				window.location = $word.dataset.href;
			});
		}
	});
});

