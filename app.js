const menuBtn = document.querySelector('.hamburger')
const sideNav = document.querySelector('nav')
const closeBtn = document.querySelector('.close-menu')
const bodyOverlay = document.querySelector('.overlay')
const bodyScroll = document.querySelector('body')
const navLinks = document.querySelectorAll('.nav__link')

menuBtn.addEventListener('click', function () {
	sideNav.classList.add('open')
	bodyOverlay.classList.add('enabled')
	bodyScroll.classList.add('disable-scroll')
})

closeBtn.addEventListener('click', function () {
	sideNav.classList.remove('open')
	bodyOverlay.classList.remove('enabled')
	bodyScroll.classList.remove('disable-scroll')
})

navLinks.forEach((e) => {
	e.addEventListener('click', function () {
		sideNav.classList.remove('open')
		bodyOverlay.classList.remove('enabled')
		bodyScroll.classList.remove('disable-scroll')
	})
})

window.addEventListener('click', function (e) {
	if (!sideNav.contains(e.target) && !closeBtn.contains(e.target) && !menuBtn.contains(e.target)) {
		sideNav.classList.remove('open')
		bodyOverlay.classList.remove('enabled')
		bodyScroll.classList.remove('disable-scroll')
	}
})
