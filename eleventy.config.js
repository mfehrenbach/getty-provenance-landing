import webC from '@11ty/eleventy-plugin-webc'
import fs from 'fs'
import jsBeautify from 'js-beautify'

export default function(eleventyConfig) {
	// Setup.
	eleventyConfig.addPlugin(webC)
	eleventyConfig.setDataFileSuffixes(['.config'])
	eleventyConfig.setInputDirectory('src/index.webc')
	eleventyConfig.setOutputDirectory('public')

	// URL constructors.
	eleventyConfig.addFilter('gettyUrl', (path) => 'https://www.getty.edu' + path)
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
		for (const match of content.matchAll(/base64,([^)]+)\)/g)) {
			content = content.replace(match[0], `base64,${(await fs.promises.readFile(match[1])).toString('base64')})`)
		}
		return content
	})

	// TODO Remove CSS comments from compiled output!
}
