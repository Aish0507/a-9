class CaNewAuthBackend {
    constructor() {}
    /**
     * Registers the user with given details
     */
    registerUser = (email: any, password: any) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: 12,
                username: 'string',
                password: 'string',
                firstName: 'string',
                lastName: 'string',
                token: 'string',
                email: 'string'
            });
        });
    }

    /**
     * Login user with given details
     */
    loginUser = (email: any, password: any) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: 12,
                username: 'string',
                password: 'string',
                firstName: 'string',
                lastName: 'string',
                token: 'string',
                email: 'string'
            });
        });
    }

    /**
     * forget Password user with given details
     */
    forgetPassword = (email: any) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: 12,
                username: 'string',
                password: 'string',
                firstName: 'string',
                lastName: 'string',
                token: 'string',
                email: 'string'
            });
        });
    }

    /**
     * Logout the user
     */
    logout = () => {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    }

    setLoggeedInUser = (user) => {
        sessionStorage.setItem('authUser', JSON.stringify(user));
    }

    /**
     * Returns the authenticated user
     */
    getAuthenticatedUser = () => {
        if (!sessionStorage.getItem('authUser')) {
            return null;
        }
        return JSON.parse(sessionStorage.getItem('authUser'));
    }

    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}

// tslint:disable-next-line: variable-name
const _caNewBackend = null;

/**
 * Returns the firebase backend
 */
const getCaNewBackend = () => {
    return _caNewBackend;
};

export { getCaNewBackend };
