module.exports = {
    TWITTER_API_KEYS: {
        consumer_key: ' ',
        consumer_secret: ' ',
        access_token: ' ',
        access_token_secret: ' '
    },
    IP: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
    PORT: process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 8082,
    TWITTER_URL: "https://twitter.com/botcuriosity",
    CAM_BLACKLIST: ['MAHLI', 'CHEMCAM'], // Some cameras (such as the MAHLI) produce photos that are too small or uninteresting
    API_KEY: 'DEMO_KEY', // NASA API Key. Default is "DEMO_KEY", but you can use your own.
    CRON: {
        TIME: '00 00 */3 * * *', // Standard Cron syntax for when posts should be submitted.
        TIMEZONE: 'America/New_York'
    }
};
