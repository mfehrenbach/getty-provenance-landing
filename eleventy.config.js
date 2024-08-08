import webC from "@11ty/eleventy-plugin-webc"

export default function(eleventyConfig) {
	eleventyConfig.addPlugin(webC)
	eleventyConfig.ignores.add("readme.md")
	eleventyConfig.setFrontMatterParsingOptions({ language: 'js' })
	eleventyConfig.setInputDirectory('index.webc')
	eleventyConfig.setOutputDirectory('_site')
}
