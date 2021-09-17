module.exports = {
    i18n: {
        locales: ['en-US', 'fr-FR'],
        defaultLocale: 'en-US',
        localeDetection: false,
      },
    async rewrites() {
        return [
            {source: '/next-page', destination: '/next-page'},
            {source: '/another-next-page', destination: '/another-next-page'},
            {source: '/', destination: '/'},
            {source: '/:path*', destination: 'https://www.nextjs.org'}
        ]
    }
}