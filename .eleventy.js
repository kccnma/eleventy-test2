
module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');

    return {
        dir: {
            input: 'src',
            output: 'docs' // temporarilly changed from "dist" for github pages demo
        },
        // if posting in a sub directory, use pathPrefix
        // pathPrefix: '/mysubdir/pathtosite/',
    };
};
