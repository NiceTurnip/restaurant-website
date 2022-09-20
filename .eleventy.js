module.exports = function(eleventyConfig) {
   
    /* Allow Markdown files to accept class name additions to elements*/
    const markdownIt = require('markdown-it');
    const markdownItAttrs = require('markdown-it-attrs');

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }
    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs);
    eleventyConfig.setLibrary('md', markdownLib);
    
    // Folders to be included at build time
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('css');

    // Return your Object options:
    return {
      dir: {
        input: "src",                   //Files to Convert
        output: "public"                //Static Pages Folder
        
      },

      dataTemplateEngine: 'njk',        // Specify njk as Templating Engine
      markdownTemplateEngine:'njk',     // Specify njk for Markdown Files
      passThroughFileCopy: "true"       // Allow the parsing of files inside specified Passthrough folders
    }
  };