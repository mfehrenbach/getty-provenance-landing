const searchForm = document.getElementById('search').form
const searchUrl = searchForm.dataset.searchUrl
delete searchForm.dataset.searchUrl

searchForm.onsubmit = (event) => {
	event.preventDefault()
	const searchValue = event.target.search.value
	const searchParams = `?term-filter=[{"inverted":false,"type":"string","context":"","context_label":"","id":"${searchValue}","text":"${searchValue}","value":"${searchValue}","selected":true}]&language=*`
	window.location.href = searchUrl + searchParams
}
