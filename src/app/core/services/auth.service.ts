import { Injectable } from '@angular/core';

import { getCaNewBackend } from '../../authUtils';

import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })

export class AuthenticationService {

    user: User;

    constructor() {
    }

    /**
     * Returns the current user
     */
    public currentUser(): User {
        return {
            id: 12,
            username: 'string',
            password: 'string',
            firstName: 'string',
            lastName: 'string',
            token: 'string',
            email: 'string'
        };
    }

    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email: string, password: string) {
        return getCaNewBackend().loginUser(email, password).then((response: any) => {
            const user = response;
            return user;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        getCaNewBackend().logout();
    }
}

