module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/images');

  return {
    dir: { input: 'src', output: 'dist' },
    passthroughFileCopy: true,
    templateFormats: ['pug', 'md', 'css', 'html', 'yml'],
    htmlTemplateEngine: 'pug',
  };
};
