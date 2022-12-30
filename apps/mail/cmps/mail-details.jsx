const { useParams, useNavigate, Link } = ReactRouterDOM
const { useState, useEffect } = React

import { MailFolderList } from "./mail-folder-list.jsx"

import { MailServices } from "../services/mail.service.js"

export function MailDetails() {
    const { mailId } = useParams()
    const [mail, setMail] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        MailServices.get(mailId)
            .then(setMail)
            .catch((err) => { console.log(err); onGoBack })
    }

    function onGoBack() {
        navigate('/mail')
    }

    function onRemoveMail(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                if (!mail.isDelete) {
                    mail.isDelete = true
                    MailServices.save(mail).then(() => onGoBack())

                } else {
                    MailServices.remove(mailId).then(() => onGoBack())
                }
            })
    }

    function onStarredMail(mailId) {
        MailServices.get(mailId)
            .then((mail) => {
                mail.isStarred = !mail.isStarred
                MailServices.save(mail).then(() => {
                    loadMail()
                })

            })
    }


    if (!mail) return <h2>loading</h2>
    return <section className="mail-details full">
        <section className="mail-content">
            <MailFolderList />
            <div className="mail-info flex">
                <div className="btn-box-details">
                    <Link to={`/mail/compose/${mail.id}`} className="fa fa-thin fa-pencil" title="Edit mail"></Link>

                    <button onClick={() => onRemoveMail(mail.id)} className="fa-regular fa-trash-can" title="Delete"></button>
                    {mail.isStarred ? <button onClick={() => onStarredMail(mail.id)}>⭐</button> : <button onClick={() => onStarredMail(mail.id)} className="star fa-regular fa-star"></button>}
                    <button className="fa-regular fa-envelope-open" onClick={onGoBack} title="Go Back"></button>

                </div>
                <h1>{mail.subject}</h1>
                <h2>From: {mail.from}</h2>
                <div className="mail-info-head flexC">
                    <h4>At: {MailServices.getHumenDate(mail.sentAt)}</h4>
                </div>
                <p>{mail.body} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sint, laudantium ad nobis quae iusto pariatur accusamus? Exercitationem, mollitia molestias autem, eum ratione quae, similique omnis ut alias beatae placeat.</p>
                <small>340 S Lemon Ave #5772, Walnut, California, 91789, United States</small>




            </div>


        </section>
    </section>
}