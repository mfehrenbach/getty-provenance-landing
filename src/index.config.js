export default {
	title:      'Getty Provenance Index',
	archesUrl:  'https://provenance.dev.getty.fargeo.com',
	apiUrl:     'https://data.getty.edu/provenance',
	breadcrumb: {
		title: 'Getty Homepage',
		crumbs: [
			{
				title: 'Research & Conservation',
				url:   'research-conservation',
			},
			{
				title: 'Databases, Tools & Technologies',
				url:   'research/tools',
			},
		],
	},
	navigation: [
		{
			title: 'About the Index',
			url:   'research/tools/provenance',
		},
		{
			title: 'What’s Covered?',
			url:   'research/tools/provenance/charts.html',
		},
		{
			title: 'Remodel Project',
			url:   'research/tools/provenance/provenance_remodel',
		},
		{
			title: 'FAQ',
			url:   'research/tools/provenance/faq.html#faq',
		},
	],
	search:  {
		label:  'Search <data></data> records…',
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
		intro: 'See record for',
		// TODO Data-URI for these, via 11ty-image?
		examples: [
			{
				// Van Gogh’s “Irises.”
				object: 'c88b3df0-de91-4f5b-a9ef-7b2b9a6d8abb', // In the Collection.
				image:  'fbd08f99-6fd3-4671-80be-0d095cb30ad7', // Verso image.
				report: '8042aa22-d6ad-310f-9ec6-f1467b24d593', // Arches record.
			},
			{
				// Cézanne’s “Still Life with Apples.”
				object: '912e77d2-c887-4c1a-8817-7c2dde0fc12b',
				image:  'a11666c0-a68e-4a10-942a-e938ee68bdf9',
				report: '287a1ff4-9b52-322f-a75c-303cddbceeb1',
			},
			{
				// Manet’s “Rue Mosnier with Flags.”
				object: 'c0e83617-05f7-4e05-9d2d-7c235e678622',
				image:  '8ea48dc4-ddd1-47ae-b9fb-21c3ea0337da',
				report: '8daf18af-f59c-313c-ae9f-80d4e01fbc81',
			},
			{
				// Rembrandt’s “Abduction of Europa.”
				object: 'd91348af-37bf-49cd-8322-f7d4f0751cd9',
				image:  '13e02252-fb7f-4bd5-a8e8-ce4ca096beda',
				report: 'dde29a68-fea4-3f3d-89b2-dbc0688a48ae',
			},
			{
				// Degas’ “After the Bath.”
				object: '52021978-3913-4af4-96b6-6ece69ed1d92',
				image:  '01be71c3-28c4-4479-9137-aa31861fe917',
				report: 'f0a82d9c-6338-34e3-a28e-603b7d6f1581',
			},
			{
				// Monet’s “Wheatstacks.”
				object: '9a9cebf1-6d57-4153-aeac-3d5aa0ad9b2c',
				image:  'ae926817-92dc-4108-b827-329be50bb758',
				report: '1d44a590-d899-34fe-b866-b2b303d34706',
			},
			{
				// Géricault’s “Three Lovers.”
				object: '8452de2e-33d4-4ddd-937a-004d8f56c7ff',
				image:  '10be3af9-92f1-41a2-9cfb-6ccc30378119',
				report: '0f97dcdc-020e-345d-9c14-4ec4d4ad913e',
			},
			{
				// Poussin’s “Landscape with a Calm.”
				object: '9f3d6258-9711-41a8-8d1c-640c39289691',
				image:  '769f2327-0618-4c6c-ad32-7035dd763f26',
				report: '79a305f5-38b3-341b-8c7e-a12e5edcb437',
			},
			{
				// Turner’s “Modern Rome.”
				object: '04dd6563-416d-4f17-ad35-4049dbf36563',
				image:  'ab4b4415-7ea2-407f-9a44-31624bb467ac',
				report: '52a1349e-3451-36fa-8bc7-b0b7db839973',
			},
			{
				// Vernet’s “Calm at a Mediterranean Port.”
				object: '2c187bde-a1c0-4c9f-835f-005d336a8139',
				report: '17f5e2b9-0cd8-39ee-b996-8f43f0317432',
				image:  '93ea9e51-4b0a-42a2-b1f6-475a2e911b5d',
			},
			{
				// Brueghel’s “Entry of the Animals into Noah's Ark.”
				object: 'd144e5f6-1f2b-4739-908f-bd661f85f817',
				image:  '73ba9096-47d8-4095-84d3-1b22e4b98270',
				report: '6c3aa6be-8515-3971-8fa5-b90c80751309',
			},
			{
				// Millet’s “Man with a Hoe.”
				object: '9e4be67e-e28d-4bd3-a026-3ad52411f61a',
				image:  'd80d5a81-edda-4650-9c5b-c3449513552c',
				report: '47a6a315-0cf1-35c1-97ee-e7081703eef9',
			},
		],
	},
	footer: {
		notice:    'The Getty Provenance Index® is a registered trademark of the J. Paul Getty Trust.',
		copyright: '© J. Paul Getty Trust',
		legal: [
			{
				title: 'Privacy Policy',
				url:   'legal/privacy',
			},
			{
				title: 'Cookies Notice',
				url:   'legal/cookies-notice',
			},
			{
				title: 'Terms of Use',
				url:   'legal/terms-of-use',
			},
		],
	},
}
