var format = require("util").format;

module.exports = {
    blocks: {
        websd: {
            process: function(block) {
                var style = block.kwargs["style"] || "default";
                var tmpl = '<div class="wsd" wsd_style="%s"><pre>%s</pre></div>';
                return format(tmpl, style, block.body);
            }
        }
    },
    book:{
        js: ["http://www.websequencediagrams.com/service.js"]
    }
};
