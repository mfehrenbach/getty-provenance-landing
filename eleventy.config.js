export default function(eleventyConfig) {
	eleventyConfig.setInputDirectory('page')
	eleventyConfig.setOutputDirectory('_site')
	eleventyConfig.setFrontMatterParsingOptions({ language: 'js' })
}
