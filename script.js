window.onload = () => {
	for(let x of document.getElementsByClassName('copyright-year')) x.innerHTML = new Date().getFullYear()
	const languages = ['en', 'fr', 'es'], hl = new URLSearchParams(location.search).get('hl'), lang = hl && languages.includes(hl) ? hl : (navigator.languages.map(s => s.substring(0, 2)).find(s => languages.includes(s)) || 'en')
	for(let l of languages) for(let x of document.getElementsByClassName(l)) x.style.display = l === lang ? "block" : "none"
}
