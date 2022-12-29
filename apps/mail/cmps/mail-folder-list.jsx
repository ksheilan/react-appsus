const { NavLink, Link, useNavigate } = ReactRouterDOM


export function MailFolderList({ setFilterBySent, setFilterByOpen }) {
    // const [filterBy, setFilterBy] = useState(MailServices.getDefaultFilter())

    return <section className="mail-folder-list flexC">
        <NavLink to="/mail/compose" className="fa fa-light fa-circle-plus" title="New mail"></NavLink>
        <a onClick={() => setFilterBySent()} className="fa-regular fa-paper-plane" title="sent"></a>
        <a onClick={() => setFilterByOpen()} className="fa-regular fa-envelope-open" title="were read"></a>
        <a className="fa-regular fa-star" href="" ></a>
        <a className="fa-regular fa-clock" href="" ></a>
        <a href="" className="fa fa-light fa-pencil"></a>
        <a className="fa-brands fa-firstdraft" href="" ></a>

    </section>
}