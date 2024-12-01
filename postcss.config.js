module.exports = {
    parser: 'postcss-scss',
    plugins: {
        'postcss-import': {},
        'postcss-modules': {
            generateScopedName: '[name]__[local]___[hash:base64:5]',
            getJSON: () => { }
        },
        autoprefixer: {},
    },
};