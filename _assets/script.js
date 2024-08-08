const searchForm = document.getElementById('search').form

const constructQuery = (event) => {
	event.preventDefault()

	const baseUrl = 'https://provenance.dev.getty.fargeo.com/search'
	const searchValue = event.target.search.value
	const searchParams = `?term-filter=[{"inverted":false,"type":"string","context":"","context_label":"","id":"${searchValue}","text":"${searchValue}","value":"${searchValue}","selected":true}]&language=*`

	window.location.href = baseUrl + searchParams
}

searchForm.onsubmit = constructQuery
