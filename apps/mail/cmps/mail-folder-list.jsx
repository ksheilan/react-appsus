const { NavLink } = ReactRouterDOM


export function MailFolderList() {
    return <section className="mail-folder-list flexC">
        <NavLink to="/mail" className="fa fa-light fa-inbox" title="Inbox"></NavLink>
        <NavLink to="/mail/compose" className="fa fa-light fa-circle-plus" title="New mail"></NavLink>
        <NavLink to="/mail/sent" className="fa-regular fa-paper-plane" title="Sent"></NavLink>
        <NavLink to="/mail/read/wereRead" className="fa-regular fa-envelope-open" title="Were Read"></NavLink>
        <NavLink to="/mail/delete/delete" className="fa-regular fa-trash-can" title="Delete Mails"></NavLink>
        <NavLink to="/mail/starred/starred" className="fa-regular fa-star" title="Star Ons"></NavLink>
        <NavLink to="/mail/treatment/treatment" className="fa-regular fa-clock" title="Furter Treatment"></NavLink>
        <NavLink to="/mail/draft/draft" className="fa-brands fa-firstdraft" title="drafts"></NavLink>

    </section>
}