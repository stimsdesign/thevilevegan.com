const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy ("./src/style.css");
    eleventyConfig.addPassthroughCopy ("./src/assets");
    
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    eleventyConfig.addFilter("postDateFilter", (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: "UTC",
        }).setLocale('en').toLocaleString(DateTime.DATE_FULL);
    });
    
    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}