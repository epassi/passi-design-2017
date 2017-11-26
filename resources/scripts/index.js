document.addEventListener(`DOMContentLoaded`, event => {
	// Allow scroll-to-top via header title.
	let $headerTitle = document.getElementsByClassName(`header__title`)[0];
	$headerTitle.addEventListener(`click`, event => {
		TweenLite.to(document.documentElement, 0.5, {scrollTop:0});
	});

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
		let pageName = '';
		let $labItems = document.getElementsByClassName(`lab`);
		let $wordItems = document.getElementsByClassName(`word`);

		let activeNavItem = document.getElementsByClassName(`header__nav-item--active`)[0];
		activeNavItem.className = `header__nav-item`;

		let newActivePageName = (event.pageName === '#default') ? 'lab' : event.pageName;
		let newActiveNavItem = document.getElementById(newActivePageName);
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