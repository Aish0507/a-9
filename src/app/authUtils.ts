class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        if (firebaseConfig) {
            // Initialize Firebase
            // firebase.initializeApp(firebaseConfig);
            // firebase.auth().onAuthStateChanged((user) => {
            //     if (user) {
            //         sessionStorage.setItem('authUser', JSON.stringify(user));
            //     } else {
            //         sessionStorage.removeItem('authUser');
            //     }
            // });
        }
    }

    /**
     * Registers the user with given details
     */
    registerUser = (email, password) => {
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
    loginUser = (email, password) => {
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
    forgetPassword = (email) => {
        return new Promise((resolve, reject) => {
            // tslint:disable-next-line: max-line-length
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
let _fireBaseBackend = null;

/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};

/**
 * Returns the firebase backend
 */
const getCaNewBackend = () => {
    return _fireBaseBackend;
};

export { initFirebaseBackend, getCaNewBackend };
