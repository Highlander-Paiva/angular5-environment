import { Injectable } from '@angular/core';

import { Principal } from '../auth/principal.service';
import { AuthServerProvider } from '../auth/auth-session.service';

@Injectable()
export class LoginService {

    constructor(
        private principal: Principal,
        private authServerProvider: AuthServerProvider
    ) {}

    login() {
        let port = (location.port ? ':' + location.port : '');
        if (port === ':9000') {
            // todo-me: Mudar a porta pra 8080 ou o que for o serviço de login
            port = ':9000';
        }
        location.href = '//' + location.hostname + port + '/login';
    }

    logout() {
        this.authServerProvider.logout().subscribe();
        this.principal.authenticate(null);
    }
}
