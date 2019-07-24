export default {
    s3: {
        REGION: "us-west-2",
        BUCKET: "metaphoto-us-west-2-dev-metaphotodatabucket-8jec596nfltl"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://api.metaphoto.ajmiller.net/dev"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: process.env.UserPoolId,
        APP_CLIENT_ID: process.env.UserPoolClientId,
        IDENTITY_POOL_ID: process.env.IdentityPoolId
    }
};
