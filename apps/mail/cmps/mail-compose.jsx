const { useState, useEffect } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

import { MailServices } from '../services/mail.service.js'

export function EmailCompose() {
    const [sentMail, setSentMail] = useState(MailServices.getEmptyMail())



    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setSentMail((prevMail) => ({ ...prevMail, [field]: value }))
    }

    function onSaveMail(ev) {
        ev.preventDefault()
    }

    return <section>
        <div className="flex">
            <h2>new mail</h2>
            <Link to={'/mail'}><button>x</button></Link>

        </div>
        <form action="" onSubmit={onSaveMail} className="flexC">
            <input type="text" onChange={handleChange} placeholder="to:" />
            <input type="text" placeholder="subject:" />
            <textarea id="" name="" rows="30" />


            <button>sent</button>
        </form>
    </section>
}