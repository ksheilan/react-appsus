const { useState, useEffect, Fragment } = React
const { Link } = ReactRouterDOM

import { MailServices } from '../services/mail.service.js'

export function DataTableRow({ email }) {

    const [isExpanded, setIsExpanded] = useState(false)

    return <Fragment>
        <tr onClick={() => {
            setIsExpanded(!isExpanded)
        }}>
            <td><input type="checkbox" /></td>
            <td><button className="fa-regular fa-star"></button></td>
            <td></td>
            <td>{email.subject}</td>
            <td>{email.body}</td>
            <td></td>
            <td>{MailServices.getHumenDate(email.sentAt)}</td>
        </tr>
        <tr hidden={!isExpanded}>
            <td colSpan="6">
                <p>Lorem ipsum dolor</p>
            </td>
        </tr>
    </Fragment>

}
