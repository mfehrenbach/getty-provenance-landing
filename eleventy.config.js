import webC from '@11ty/eleventy-plugin-webc'
import jsBeautify from 'js-beautify'

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(webC)
	eleventyConfig.ignores.add('readme.md')
	eleventyConfig.setFrontMatterParsingOptions({ language: 'js' })
	eleventyConfig.setInputDirectory('index.webc')
	eleventyConfig.setOutputDirectory('_site')

	const beautifyOptions = {
		"break_chained_methods": true,
		"extra_liners": [],
		"indent_empty_lines": false,
		"indent_inner_html": true,
		"indent_with_tabs": true,
		"preserve_newlines": false,
		"selector_separator_newline": true,
		"space_around_combinator": true,
		"wrap_line_length": 0,
	}

	eleventyConfig.addTransform('beautify', async (content) => jsBeautify.html(content, beautifyOptions))
}
