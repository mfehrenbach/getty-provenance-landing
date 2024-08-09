const searchForm = document.getElementById('search').form
const searchUrl = searchForm.dataset.baseUrl + '/search'
delete searchForm.dataset.baseUrl

searchForm.onsubmit = (event) => {
	event.preventDefault()
	const searchValue = event.target.search.value
	const searchParams = `?term-filter=[{"inverted":false,"type":"string","context":"","context_label":"","id":"${searchValue}","text":"${searchValue}","value":"${searchValue}","selected":true}]&language=*`
	window.location.href = searchUrl + searchParams
}
