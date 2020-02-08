export const Global = Object.freeze({

    jwt: {
        secret: 'secretKey',
        expiresIn: '3600s',
    },

    httpErrorMessage: {
        userAlreadyExists: 'User already registered',
        secretKey: 'secretKey',
        invalidCredentials: 'Wrong email or Password',
        invalidToken: 'Invalid Token',
        missingToken: 'Missing Token',
        invalidLogin: 'Invalid Login',
        invalidEmail: 'Invalid Email',
        emailRequire: 'Email Required',
        cannotFindData: 'can not Find Data',
        badRequest: 'badRequest',
        passwordRequired: 'passwordRequired',
        changePasswordFails: 'changePasswordFails',
        invalidFileType: 'invalidFileType',
        cannotRetrieveData: 'cannotRetrieveData',
        cannotUpdateData: 'cannotUpdateData',
        cannotAuthorizeData: 'cannotAuthorizeData',
        cannotDeleteData: 'cannotDeleteData',
        somethingWentWrong: 'Something went wrong',
        shipmentAlreadyAccepted: 'Shipment already accepted',
    },
});
