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
		label:  'Search <data></data> records…:',
		types: [
			{
				title: 'Any type',
				value: '',
			},
			{
				title: 'Activity',
				value: '734d1558-bfad-11ea-a62b-3af9d3b32b71',
			},
			{
				title: 'Bidding',
				value: '21d83275-e88f-11ea-9fb6-0a1706e75f30',
			},
			{
				title: 'Digital Object',
				value: '0044f7da-b4b6-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Event',
				value: '7c2205b2-baee-11ea-81b2-3af9d3b32b71',
			},
			{
				title: 'Exhibition Concept',
				value: '2a7fb09a-bfa5-11ea-a62b-3af9d3b32b71',
			},
			{
				title: 'Group',
				value: 'd6774bfc-b4b4-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Person',
				value: '9ffb6fcc-b4b4-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Personage',
				value: '9ce6d277-2f6f-11ed-b195-0a9473e82189',
			},
			{
				title: 'Physical Object',
				value: '1810d182-b4b5-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Place',
				value: 'f6e89030-b4b4-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Provenance Activity',
				value: '3d461890-b4b5-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Set',
				value: 'bdba56bc-b4b5-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Textual Work',
				value: '6dad61aa-b4b5-11ea-84f7-3af9d3b32b71',
			},
			{
				title: 'Visual Work',
				value: '933ee880-b4b5-11ea-84f7-3af9d3b32b71',
			},
		],
		button: 'Search',
	},
	record: {
		intro: 'Record for',
		examples: [
			{
				title: 'Vincent van Gogh',
				id:    '8042aa22-d6ad-310f-9ec6-f1467b24d593',
			},
		],
	},
	footer: {
		title:     'Getty Provenance Index®',
		copyright: '© J. Paul Getty Trust',
		legal: [
			{
				title: 'Privacy Policy',
				url:   '/legal/privacy',
			},
			{
				title: 'Cookies Notice',
				url:   '/legal/cookies-notice',
			},
			{
				title: 'Terms of Use',
				url:   '/legal/terms-of-use',
			},
		],
	},
}
