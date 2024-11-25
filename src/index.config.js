export default {
	title:   'Getty Provenance Index',
	baseUrl: 'https://provenance.dev.getty.fargeo.com',
	apiUrl:  'https://data.getty.edu/provenance',
	breadcrumb: {
		title: 'Getty Homepage',
		url:   'https://www.getty.edu',
		crumbs: [
			{
				title: 'Research & Conservation',
				url:   '/research-conservation',
			},
			{
				title: 'Databases, Tools & Technologies',
				url:   '/research/tools',
			},
		],
	},
	navigation: [
		{
			title: 'About the Index',
			url:   '/research/tools/provenance/',
		},
		{
			title: 'What’s Covered?',
			url:   '/research/tools/provenance/charts.html',
		},
		{
			title: 'Remodel Project',
			url:   '/research/tools/provenance/provenance_remodel',
		},
		{
			title: 'FAQ',
			url:   '/research/tools/provenance/faq.html#faq',
		},
	],
	search:  {
		label:  'Search 2.3 million records…:',
		button: 'Search',
	},
	record: {
		intro: 'Record for',
		examples: [
			{
				title: 'Vincent van Gogh',
				url:   '/report/8042aa22-d6ad-310f-9ec6-f1467b24d593',
			},
		],
	},
}
