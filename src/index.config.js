export default {
	title:       'Getty Provenance Index',
	description: 'The Getty Provenance Index® (GPI) contains more than 2.5 million records taken from source material such as archival inventories, auction catalogs, and dealer stock books.',
	archesUrl:   'https://provenance.dev.getty.fargeo.com',
	apiUrl:      'https://data.getty.edu/provenance',
	breadcrumb:  {
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
		button: 'Submit search',
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
	},
	record: {
		intro: 'See record for',
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
				// Cézanne’s “Young Italian Woman at a Table.”
				object: '195de465-e47e-4034-8ff9-bbb94790d8aa',
				image:  '9fc0ac2c-75d7-4d1f-81dd-686115033cdf',
				report: '287a1ff4-9b52-322f-a75c-303cddbceeb1',
			},
			{
				// Cézanne’s “Eternal Feminine”
				object: 'f37d3b17-1527-4605-93d7-df4379f3e8b2',
				image:  '39c49cc4-25ff-4ba4-bc02-6a0366931482',
				report: '287a1ff4-9b52-322f-a75c-303cddbceeb1',
			},
			{
				// Manet’s “Rue Mosnier with Flags.”
				object: 'c0e83617-05f7-4e05-9d2d-7c235e678622',
				image:  '8ea48dc4-ddd1-47ae-b9fb-21c3ea0337da',
				report: '8daf18af-f59c-313c-ae9f-80d4e01fbc81',
			},
			{
				// Manet’s “Portrait of Madame Brunet.”
				object: '7b80ff8c-ba2f-4b40-a267-9408d9273f15',
				image:  'dc8f5f83-f43c-463b-a93a-a5fa76d7de11',
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
				// Degas’ “The Convalescent.”
				object: '62e6f21a-7b0f-48a8-aff7-723321befc53',
				image:  'd90f2fb3-f9b7-4050-93d2-fa33640bc705',
				report: 'f0a82d9c-6338-34e3-a28e-603b7d6f1581',
			},
			{
				// Degas’ “Self-Portrait.”
				object: 'bdd1dc19-b059-4ff7-bcf1-a6e1b94352ae',
				image:  '0820a161-1813-47e6-9300-7fcd870b1f78',
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
				// Géricault’s “Race of the Riderless Horses.”
				object: '26f763e1-078d-4168-ba1b-e074e0d24540',
				image:  '8fe76ec0-34e8-436e-82b8-a831e7fbc7ac',
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
				// Turner’s “Van Tromp, going about to please his Masters.”
				object: '4f509170-650e-4ba8-8493-1a34cf06fdfc',
				image:  '835c16ac-bb27-4201-ba02-3d95bfa2cc21',
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
			{
				// Bouts’ “The Annunciation.”
				object: 'bd596097-af83-44f7-9830-955dbd868279',
				image:  'b02a1200-932c-4cc6-b29c-9daddf40e32c',
				report: 'f425e5e6-8805-32fa-9d2f-8602010dd524',
			},
			{
				// Bouguereau’s “Young Girl Defending Herself against Love.”
				object: '83b4d6a0-9e9b-4660-a9bc-74efb0f7a5c4',
				image:  '4519972a-b71c-4445-9d19-feb9d186d32e',
				report: 'ef03cc8f-1c6b-3848-8b63-e4c27ef22093',
			},
			{
				// Tissot’s “Portrait of the Marquise de Miramon.”
				object: '8d067b34-64d9-4219-8abb-ca18a7336b0e',
				image:  '7f951529-a966-453b-ab1f-2f960b7a565e',
				report: '50dabfb7-ad46-3f51-bf36-91c08b320795',
			},
			{
				// Lorrain’s “Coast View with the Abduction of Europa.”
				object: '01e5106c-a924-4e6e-8c90-6115f4a6a26d',
				image:  'd18a18fd-5c58-4b19-a479-cf445606c1d7',
				report: 'e8afe6f1-94aa-3b9e-bdd6-0096ea21ae63',
			},
			{
				// Renoir’s “Promenade.”
				object: '3c96c8a9-2f86-4384-9d56-d0423600c651',
				image:  '7361d7d9-3907-40f7-b487-d0378c107ef6',
				report: '4cf790d0-1631-3178-a0c3-c414e07041b9',
			},
			{
				// Rembrandt’s “Saint Bartholomew.”
				object: '5de8cebd-36f7-4a33-8774-6ef21ca5da7b',
				image:  'a21fe655-2d17-441c-b224-723041db18b9',
				report: 'dde29a68-fea4-3f3d-89b2-dbc0688a48ae',
			},
			{
				// Monet’s Portal of Rouen Cathedral.”
				object: '182385f7-61c4-4e2b-a815-db26722409f9',
				image:  '286d361b-8da7-4a0a-925f-4ab350e605f5',
				report: '1d44a590-d899-34fe-b866-b2b303d34706',
			},
			{
				// Watteau’s “La Surprise.”
				object: '97dde16c-6e22-46f0-848a-879acfc78271',
				image:  'c145ef8f-d59b-4422-b695-8c9388cbf848',
				report: '72b3c586-3588-3799-be34-f6ad3c235dfd',
			},
			{
				// Segantini’s “Spring in the Alps.”
				object: '3eb47da8-67c8-4932-9308-eb16924067be',
				image:  '719850ea-ca08-4c7d-8d90-542075acd37d',
				report: 'dfbe6a15-9257-307b-b237-2e9906b3b077',
			},
			{
				// Robert’s “Demolition of the Château of Meudon.”
				object: '4f3a72f0-99a1-4361-8715-7a29a6ec7eb8',
				image:  'ed31e38d-068f-41a7-923f-d6daaa174ce7',
				report: 'f9f357bf-c492-3612-b16c-a0ec2d89b4ef',
			},
			{
				// Bassano’s “Miracle of the Quails.”
				object: '4e288fcd-e1c0-4150-b202-131dc3463f24',
				image:  '968c1b0c-9b1d-4526-827e-588437a5ccde',
				report: '5fb5c4fe-07df-327f-8ef7-75f6f61752bf',
			},
			{
				// Manet’s “Jeanne.”
				object: '951295b7-dfb2-42fa-b06e-5a1c350dd88d',
				image:  '0bd92353-059c-466c-87ab-00086c02304e',
				report: '8daf18af-f59c-313c-ae9f-80d4e01fbc81',
			},
			{
				// Pontormo’s “Portrait of a Halberdier.”
				object: '56016db9-20a4-4a99-814b-23ac542a106e',
				image:  '972b5d89-aa07-4572-9075-c82f520fd1fb',
				report: '05a80c5b-5a5f-37a8-9456-bba39a54e28c',
			},
			{
				// Bastida’s “Hall of the Ambassadors.”
				object: '2893d02b-a442-4ee3-a789-2af6360560f3',
				image:  '798f6d57-f0a8-46be-84b3-2544caa56c44',
				report: 'c44c2286-ae0b-335d-90c7-09278e9985e1',
			},
			{
				// Mengs’ “Portrait of José Nicolás de Azara.”
				object: 'b856d28e-e76a-4b46-b570-ec3be93090c9',
				image:  '14ac4123-1aa6-4d2e-8301-f814d1d50ce8',
				report: 'c5b51571-9175-3358-96a7-fa551f5516ca',
			},
			{
				// Zuccaro’s “Cupid and Pan.”
				object: 'da4ff78d-766b-4bdc-92da-118591355a2f',
				image:  '7388a215-a603-4e08-a34a-5cb51acc9fc9',
				report: '76c4e2c0-f235-3f5b-a77e-cf936a90a67e',
			},
			{
				// Tiepolo’s “Alexander the Great and Campaspe.”
				object: '3b76019c-f93e-4839-a696-c89cb44740c1',
				image:  '35b5a2e5-eaba-4b97-9a58-5c73cec3fa90',
				report: '2ac9e24e-de4c-39d4-94d7-7fc8e0b3520c',
			},
			{
				// Titian’s “Portrait of Alfonso d'Avalos.”
				object: '8224442b-7d61-4c10-bbe1-9cb62158ca88',
				image:  'a8cc6391-5bd6-4b56-910f-7546010b3317',
				report: 'e2c5bd6d-1129-397a-823d-eff0df08bd57',
			},
			{
				// Titian’s “Penitent Magdalene.”
				object: 'aaeb7771-929e-4bb8-b0b1-3c2f2ed13a1f',
				image:  '6a3de87b-d5b8-46f6-a8d8-cd70bb8efc39',
				report: 'e2c5bd6d-1129-397a-823d-eff0df08bd57',
			},
			{
				// Canaletto’s “View of the Arch of Constantine.”
				object: '8019f0d7-4736-4189-ab41-bdc8ae0b462d',
				image:  'f70a0611-cd18-467c-97ce-f5590a9aadab',
				report: 'c97c40a1-2cc6-39d4-be5b-c34d2e2b738e',
			},
			{
				// Potter’s “The Piebald Horse.”
				object: 'efd3e697-3407-4cb5-9ab9-208d1c0a22d0',
				image:  '410e5088-5a70-4b89-bf05-e7766cd6fa90',
				report: '5dfb03ff-efdc-3232-a80a-54cabba27cf9',
			},
			{
				// Winterhalter’s “Portrait of Leonilla.”
				object: '63a14b9c-27fd-4405-95ad-415916011db5',
				image:  '74ed2d7b-4458-4881-8358-33da6ed69b90',
				report: 'ff385c4e-eec2-35fc-b070-2c0a9603aa39',
			},
			{
				// Mantegna’s “Adoration of the Magi.”
				object: '450029c7-bd0c-4454-83c9-b297d350c744',
				image:  '036e3014-e564-4533-8385-a7019c6a1b2c',
				report: 'da993e37-2df1-3983-b228-747d837786a6',
			},
			{
				// Lautrec’s “The Model Resting.”
				object: '471ee7fe-24ce-4e5d-9987-63d2729c993d',
				image:  '8f04a57e-cd4f-4d6a-be55-e72348b21a8e',
				report: 'acb1769a-7081-3f72-ab2a-1903854697ec',
			},
			{
				// Pissarro’s “Landscape at Louveciennes.”
				object: 'd3cf849f-486d-455e-bb55-3e38f3f47865',
				image:  '1bf25fe7-1abd-441c-9946-5881985ee75e',
				report: 'c3256e25-4d3a-35db-8bb8-68b0f3ee77f4',
			},
			{
				// De La Tour’s “Musicians' Brawl.”
				object: '46cdc203-edf2-4330-9e3b-43f3ba058598',
				image:  '997d642c-0594-44b9-b9d4-d0526749e5ee',
				report: '9aa3fb9d-d670-3b9d-aff2-d72eb3f89b11',
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
