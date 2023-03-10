export function MailStarSwitch({ mail, onStarredMail }) {
    function getMailStarBtn() {
        if (mail.isStarred) {
            return <button title="UnMark Star" onClick={() => onStarredMail(mail.id)} className="fa-sharp fa-solid fa-star" style={{ color: "#fafa37" }} ></button>
        } else {
            return <button title="Mark As Star" onClick={() => onStarredMail(mail.id)} className="fa fa-regular fa-star"></button>
        }

    }
    return getMailStarBtn()
}