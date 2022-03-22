import loginForm from './components/loginForm/loginForm.hbs';
import signupForm from './components/signupForm/signupForm.hbs';
import feedPhotoCard from './components/feedPhotoCard/feedPhotoCard.hbs';
import feedInfoCard from './components/feedInfoCard/feedInfoCard.hbs';
import userIcon from './components/userIcon/userIcon.hbs';
import signInPage from './views/signInPage/signInPage.hbs';
import {SignInView} from './views/signInPage/signInPage.js';
import changeForm from './components/changeForm/changeForm.hbs';
import matchBlock from './components/matchBlock/matchBlock.hbs';
import messageBlock from './components/messageBlock/messageBlock.hbs';
import './style.scss';

const root = document.getElementById('root');
root.innerHTML = changeForm({});

