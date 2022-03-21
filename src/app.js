import loginForm from './components/loginForm/loginForm.hbs';
import signupForm from './components/signupForm/signupForm.hbs';
import feedPhotoCard from './components/feedPhotoCard/feedPhotoCard.hbs';
import feedInfoCard from './components/feedInfoCard/feedInfoCard.hbs';
import userIcon from './components/userIcon/userIcon.hbs';
import './style.scss';

const root = document.getElementById('root');
root.insertAdjacentHTML('afterend', userIcon({
    name: 'Иван Букашка',
    age: 21,
    location: 'Митино-Букашкино'
}));
