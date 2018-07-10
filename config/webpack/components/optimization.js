const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const optimization = {
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    },
                    output: {
                        comments: false
                    },
                    ecma: 5, // specify one of: 5, 6, 7 or 8
                    keep_classnames: false,
                    keep_fnames: false,
                    ie8: false,
                    nameCache: null, // or specify a name cache object
                    safari10: false,
                    toplevel: false,
                    warnings: false,
                }
            })
        ]
    },
};

module.exports = optimization;