//import loginForm from "./components/loginForm/loginForm.hbs";
//import userIcon from "./components/userIcon/userIcon.hbs";
import changeForm from "./components/changeForm/changeForm.hbs";
import matchBlock from "./components/matchBlock/matchBlock.hbs";
import messageBlock from "./components/messageBlock/messageBlock.hbs";
import "./style.scss";

const root = document.getElementById("root");
// root.innerHTML = loginForm({});
//root.innerHTML = userIcon({ name: "David Jones", age: 25, location: "New York" });
//root.innerHTML = changeForm({});
//root.innerHTML = matchBlock({});
root.innerHTML = messageBlock({
    username: "Максимка",
    message: "Очень длинное сообщение",
    messageCount: 4,
    imgsrc: "./static/images/avatar.png",
});
