import { View } from "../view/baseView.js";
import mainPage from "./mainPage.hbs";

/**
 * View class for login page
 */
export class mainView extends View {
    /**
     * Constructor
     * @param {Object} parent
     */
    constructor({ parent: parent = document.body }) {
        super({
            parent: parent,
        });
    }

    /**
     * Render page function
     * @param {Object} props
     */
    render(props = {}) {
        this.parent.insertAdjacentHTML(
            "afterbegin",
            mainPage(
                (props = {
                    name: "Максимка",
                    surname: "Кекер",
                    age: 23,
                    location: "Moscow",
                    userPhoto: "../static/images/userPhoto.png",
                    infoAboutUser:
                        "Эл-Ойын - национальный праздник алтайского народа, проводимый раз в два года (по четным годам). Название праздника можно перевести как «всенародные игры, всенародный праздник». Целью данного мероприятия является сохранение традиций, обычаев алтайского народа, развитие народного творчества, взаимообогащение культур народов.",
                    interests: ["Алтай", "Обогощение культур", "dsa"],
                    username: "Никиточка",
                    message: "Очень длинное сообщение",
                    imgsrc: "../static/images/userPhoto.png",
                    messageCount: 2,
                })
            )
        );
        this.setHandlers();
    }

    /**
     * Function for login user (connect with API)
     * @param {Event} event
     */
    login(event) {
        // TODO: set controller
    }

    /**
     * Function for show errors on page
     * @param {Object} error
     */
    showErrors(error) {
        if (error.emailError) {
            document.getElementById("login").style.borderColor = "#CF5151";
            document.getElementById("email-error").innerHTML = error.emailError;
        }

        if (error.passwordError) {
            document.getElementById("password").style.borderColor = "#CF5151";
            document.getElementById("password-error").innerHTML = error.passwordError;
        }
    }

    /**
     * Function for remove errors from page
     */
    removeErrors() {
        document.getElementById("login").style.borderColor = "#594c74";
        document.getElementById("password").style.borderColor = "#594c74";
        document.getElementById("email-error").style.visibility = "hidden";
        document.getElementById("password-error").style.visibility = "hidden";
    }

    openChat() {
        document.querySelector(".mainPage__messageBlock").classList.toggle("display-none");
        document.querySelector(".mainPage__matchBlock").classList.toggle("display-none");
        document.querySelector(".mainPage__userMessageBlock").classList.toggle("display-flex");
    }

    editBlockSwitcher() {
        document.querySelector(".mainPage__messageBlock").classList.toggle("display-none");
        document.querySelector(".mainPage__matchBlock").classList.toggle("display-none");
        document.querySelector(".mainPage__changeForm").classList.toggle("display-flex");
        document;
    }

    matchBlockSwitcher() {
        document.querySelector(".mainPage__messageBlock").classList.toggle("display-none");
        document.querySelector(".mainPage__matchBlock").classList.toggle("display-flex");
    }

    messageBlockSwitcher() {
        document.querySelector(".mainPage__matchBlock").classList.toggle("display-flex");
        document.querySelector(".mainPage__messageBlock").classList.toggle("display-none");
    }

    /**
     * Add event listeners on elements
     */
    setHandlers() {
        const matchButton = document.getElementById("message__match-button");
        matchButton.addEventListener("click", () => {
            this.matchBlockSwitcher();
        });

        const messageButton = document.getElementById("match__message-button");
        messageButton.addEventListener("click", () => {
            this.messageBlockSwitcher();
        });

        const editButton = document.querySelector(".user-icon__info-box__settings");
        editButton.addEventListener("click", () => {
            this.editBlockSwitcher();
        });

        const userMessage = document.getElementById("block-message");
        userMessage.addEventListener("click", () => {
            this.openChat();
        });
    }

    /**
     * Remove event listeners from elements
     */
    removeHandlers() {
        const form = document.getElementById("form");
        if (form) {
            form.removeEventListener("click", this.login.bind(this));
        }

        this.parent.innerHtml = "";
    }
}
