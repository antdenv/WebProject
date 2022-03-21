import loginForm from './components/loginForm/loginForm.hbs';
import signupForm from './components/signupForm/signupForm.hbs';
import './style.scss';

const root = document.getElementById('root');
root.insertAdjacentHTML('afterend', signupForm({}));
