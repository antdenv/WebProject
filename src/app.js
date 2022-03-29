import loginForm from "./components/loginForm/loginForm.hbs";
import signupForm from "./components/signupForm/signupForm.hbs";
import feedPhotoCard from "./components/feedPhotoCard/feedPhotoCard.hbs";
import feedInfoCard from "./components/feedInfoCard/feedInfoCard.hbs";
import userIcon from "./components/userIcon/userIcon.hbs";
import mainPage from "./views/mainPage/mainPage.hbs";
import changeForm from "./components/changeForm/changeForm.hbs";
import matchBlock from "./components/matchBlock/matchBlock.hbs";
import messageBlock from "./components/messageBlock/messageBlock.hbs";
import { mainView } from "./views/mainPage/mainPage.js";
import "./style.scss";

//const root = document.getElementById("root");
// root.innerHTML = loginForm({});
//root.innerHTML = userIcon({ name: "David Jones", age: 25, location: "New York" });
// root.innerHTML = changeForm({});
//root.innerHTML = matchBlock({});
// root.innerHTML = messageBlock({
//     username: "Максимка",
//     message: "Очень длинное сообщение",
//     messageCount: 4,
//     imgsrc: "./static/images/avatar.png",
// });

// dsa = {
//     name: "Максимка",
//     age: 23,
//     location: "Moscow",
//     userPhoto: "../static/images/userPhoto.png",
// };

const main = new mainView(root);
main.render();
