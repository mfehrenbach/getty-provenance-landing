const searchForm = document.getElementById('search').form
const searchUrl = searchForm.dataset.archesUrl + '/search'
delete searchForm.dataset.archesUrl

searchForm.onsubmit = (event) => {
	event.preventDefault()
	const searchValue = event.target.search.value
	const searchType = event.target.type.value
		? `&resource-type-filter=[{"graphid":"${event.target.type.value}","name":"${event.target.type.selectedOptions[0].text}","inverted":false}]`
		: ''
	const searchParams = `?term-filter=[{"inverted":false,"type":"string","context":"","context_label":"","id":"${searchValue}","text":"${searchValue}","value":"${searchValue}","selected":true}]&language=*${searchType}`
	window.location.href = searchUrl + searchParams
}

const apiUrl = searchForm.dataset.apiUrl
const apiData = searchForm.querySelector('data')
delete searchForm.dataset.apiUrl

if (localStorage.getItem('totalRecords')) {
	apiData.textContent = Number(localStorage.getItem('totalRecords')).toLocaleString()
	apiData.value = localStorage.getItem('totalRecords')
}

const sparqlQuery = `
	SELECT (COUNT(DISTINCT ?obj) AS ?count) WHERE {
		?sub ?pred ?obj .
	}
`

fetch(`${apiUrl}/sparql?query=${encodeURIComponent(sparqlQuery)}&format=application/sparql-results+json`)
	.then(response => response.json())
	.then(data => {
		const totalRecords = data.results.bindings[0].count.value
		localStorage.setItem('totalRecords', totalRecords)
		apiData.textContent = Number(totalRecords).toLocaleString()
		apiData.value = totalRecords
	})
	.catch(error => { throw new Error(error) })