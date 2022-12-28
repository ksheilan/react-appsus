const { NavLink, Link, useNavigate } = ReactRouterDOM


export function MailFolderList() {
    return <section className="mail-folder-list flexC">
        <NavLink to="/mail/compose" className="fa fa-light fa-circle-plus"></NavLink>
        <a className="fa fa-light fa-pencil" href="" ></a>
        <a className="fa-regular fa-envelope-open" href="" ></a>
        <a className="fa-regular fa-star" href="" ></a>
        <a className="fa-regular fa-clock" href="" ></a>
        <a className="fa-regular fa-paper-plane" href="" ></a>
        <a className="fa-brands fa-firstdraft" href="" ></a>

    </section>
}