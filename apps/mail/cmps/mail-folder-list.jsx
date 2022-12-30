const { NavLink, Link, useNavigate } = ReactRouterDOM


export function MailFolderList() {
    return <section className="mail-folder-list flexC">
        <NavLink to="/mail" className="fa fa-light fa-inbox" title="inbox"></NavLink>
        <NavLink to="/mail/compose" className="fa fa-light fa-circle-plus" title="New mail"></NavLink>
        <NavLink to="/mail/sent" className="fa-regular fa-paper-plane" title="sent"></NavLink>
        <NavLink to="/mail/read/wereRead" className="fa-regular fa-envelope-open" title="were read"></NavLink>
        <NavLink to="/mail/delete/delete" className="fa-regular fa-trash-can" title="Delete Mails"></NavLink>
        <NavLink to="/mail/starred/:starred" className="fa-regular fa-star"></NavLink>
        <a className="fa-regular fa-clock" href="" ></a>
        <NavLink to="/mail/draft/:draft" className="fa-brands fa-firstdraft"></NavLink>

    </section>
}