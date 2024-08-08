const searchForm = document.getElementById('search').form

const constructQuery = (event) => {
	event.preventDefault()

	const searchValue = event.target.search.value

	console.log(`Search for “${searchValue}”`)
}

searchForm.onsubmit = constructQuery
