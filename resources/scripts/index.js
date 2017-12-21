const HEADER_SHADOW_THRESHOLD = 40; // Pixels scrolled before shadow appears.


document.addEventListener(`DOMContentLoaded`, event => {
	// Allow scroll-to-top via header title.
	let $headerTitle = document.getElementsByClassName(`header__title`)[0];
	$headerTitle.addEventListener(`click`, event => {
		// Animate window.scrollTo(0, 0)
		TweenLite.to(window, 0.5, {scrollTo:{y:0, autoKill:false}}); // autoKill:false fixes jumpy scroll on iOS
	});

	const router = new Router(
		{
			art: new Page(`art.html`),
			word: new Page(`word.html`),
			life: new Page(`life.html`),
			'#default': new Page(`art.html`)
		},
		document.querySelector(`.main`)
	);

	router.addEventListener(`change`, event => {
		let pageName = '';
		let $artItems = document.getElementsByClassName(`art`);
		let $wordItems = document.getElementsByClassName(`word`);

		let activeNavItem = document.getElementsByClassName(`header__nav-item--active`)[0];
		activeNavItem.className = `header__nav-item`;

		let newActivePageName = (event.pageName === '#default') ? 'art' : event.pageName;
		let newActiveNavItem = document.getElementById(newActivePageName);
		newActiveNavItem.className = `header__nav-item--active`;

		for (let $art of $artItems) {
			$art.addEventListener(`click`, event => {
				window.location = $art.dataset.href;
			});
		}

		for (let $word of $wordItems) {
			$word.addEventListener(`click`, event => {
				window.location = $word.dataset.href;
			});
		}
	});
});