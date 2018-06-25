const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [
            // @rule: JS
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                    {
                        loader: "eslint-loader",
                        options: {
                            emitWarning: true,
                            fix: true
                        }
                    },
                ]
            },

            // @rule: Vue
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        extractCSS: true
                    }
                }]
            },

            // @rule: LESS
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                        },
                        {
                            loader: 'less-loader',
                        }
                    ]
                })
            },

            // @rule: CSS
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'postcss-loader',
                    }
                ]
            },

            // @rule: JSON
            {
                test: /\.json$/,
                use: "json-loader"
            }
        ]
    }
}