const searchForm = document.getElementById('search').form
const searchUrl = searchForm.dataset.baseUrl + '/search'
delete searchForm.dataset.baseUrl

searchForm.onsubmit = (event) => {
	event.preventDefault()
	const searchValue = event.target.search.value
	const searchParams = `?term-filter=[{"inverted":false,"type":"string","context":"","context_label":"","id":"${searchValue}","text":"${searchValue}","value":"${searchValue}","selected":true}]&language=*`
	window.location.href = searchUrl + searchParams
}

const apiHeading = document.querySelector('h2[data-api-url')
const apiUrl = apiHeading.dataset.apiUrl
delete apiHeading.dataset.apiUrl

const sparqlQuery = `
	SELECT (COUNT(DISTINCT ?obj) AS ?count) WHERE {
		?sub ?pred ?obj .
	}
`

fetch(`${apiUrl}/sparql?query=${encodeURIComponent(sparqlQuery)}&format=application/sparql-results+json`)
	.then(response => response.json())
	.then(data => {
		const totalRecords = Number(data.results.bindings[0].count.value).toLocaleString()
		const countElement = `
			<p>${totalRecords} records</p>
		`

		apiHeading.insertAdjacentHTML('afterend', countElement)
	})
	.catch(error => { throw new Error(error) })