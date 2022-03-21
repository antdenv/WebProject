import {View} from '../view/baseView.js';
import signInPage from './signInPage.hbs';

export class SignInView extends View {
    constructor({
        parent: parent = document.body
    }) {
        super({
            parent: parent
        });
    }

    render(props = {}) {
        this.parent.insertAdjacentHTML('afterbegin', signInPage({}));
        this.setHandlers();
    }

    login(event) {}

    showErrors(error) {
        if (error.emailError ) {
            document.getElementById('login').style.borderColor = '#CF5151';
            document.getElementById('email-error').innerHTML = error.emailError;
        }
         
        if (error.passwordError) {
            document.getElementById('password').style.borderColor = '#CF5151';
            document.getElementById('password-error').innerHTML = error.passwordError;
        }
    }

    removeErrors() {
        document.getElementById('login').style.borderColor = '#594c74';
        document.getElementById('password').style.borderColor = '#594c74';
        document.getElementById('email-error').style.visibility = 'hidden';
        document.getElementById('password-error').style.visibility = 'hidden';
    }

    setHandlers() {}

    removeHandlers() {
        const form = document.getElementById('form');
        if (form) {
            form.removeEventListener('click', this.login.bind(this));
        }

        this.parent.innerHtml = '';
    }
}
