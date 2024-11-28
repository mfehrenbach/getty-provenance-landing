import webC from '@11ty/eleventy-plugin-webc'
import Image from '@11ty/eleventy-img'
import Fetch from '@11ty/eleventy-fetch'
import jsBeautify from 'js-beautify'
import fs from 'fs'
import { getCarriedOutBy, getPrimaryName } from '@thegetty/linkedart.js'

export default function(eleventyConfig) {
	// Setup.
	eleventyConfig.addPlugin(webC)
	eleventyConfig.setDataFileSuffixes(['.config'])
	eleventyConfig.setInputDirectory('src/index.webc')
	eleventyConfig.setOutputDirectory('public')

	// Helpers.
	eleventyConfig.addFilter('gettyUrl', (path) => `https://www.getty.edu/${path}`)
	eleventyConfig.addFilter('exampleSrc', async (image) => {
		const src = `https://media.getty.edu/iiif/image/${image}/full/3000,/0/default.jpg`
		const imageContents = await Image(src, {
			formats: ['webp'],
			widths: [3000],
			dryRun: true,
		})
		return `data:image/webp;base64,${imageContents.webp.shift().buffer.toString('base64')}`
	})

	// Use `eleventy-fetch` for per-build cached Collection API responses.
	const getObjectData = async (object) =>
		await Fetch(`https://data.getty.edu/museum/collection/object/${object}`, {
			duration: '*',
			type: 'json',
		})

	eleventyConfig.addFilter('exampleName', async (example) => getCarriedOutBy(await getObjectData(example.object)).shift()._label)
	eleventyConfig.addFilter('exampleUrl', async (example) => `${(await getObjectData(example.object)).subject_of.shift().id}?canvas=${example.image}`)
	eleventyConfig.addFilter('exampleCaption', async (example) => {
		const objectData = await getObjectData(example.object)
		const title = getPrimaryName(objectData)
		const date = objectData.produced_by.timespan.identified_by.shift().content
		const name = await eleventyConfig.getFilter('exampleName')(example)

		return `<em>${title}</em>, ${date}, ${name}. The J. Paul Getty Museum.`
	})

	// Filters don’t have data context, so pass it from page: https://github.com/11ty/eleventy/issues/2844
	eleventyConfig.addFilter('reportUrl', (data, report) => `${data.archesUrl}/report/${report}`)

	// Do some post-build formatting.
	const beautifyOptions = {
		break_chained_methods:      true,
		extra_liners:               [],
		indent_empty_lines:         false,
		indent_inner_html:          true,
		indent_with_tabs:           true,
		preserve_newlines:          false,
		selector_separator_newline: true,
		space_around_combinator:    true,
		wrap_line_length:           0,
	}

	eleventyConfig.addTransform('beautify', async (content) => jsBeautify.html(content, beautifyOptions))

	// And inline the font files.
	eleventyConfig.addTransform('base64FontFile', async (content) => {
		for (const match of content.matchAll(/\(data:font\/woff2;base64,([^)]+)\)/g)) {
			content = content.replace(match[0], `(data:font/woff2;base64,${(await fs.promises.readFile(match[1])).toString('base64')})`)
		}
		return content
	})

	// TODO Remove CSS comments from compiled output!
}
