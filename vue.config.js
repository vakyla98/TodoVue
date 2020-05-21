module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/TodoVue/dist'
        : '/dist'
}