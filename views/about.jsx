const { Outlet, NavLink, Link } = ReactRouterDOM

export function About() {
    return <section className="about">
        <h3>We love build apps in react</h3>
        <p>This app was made..</p>

        <nav>
            <Link to="/about">Index</Link> |
            <NavLink to="/about/team">Team</NavLink> |
            <NavLink to="/about/vision">Vision</NavLink>
        </nav>
        <div className="nested-route">
            <Outlet />
        </div>

    </section>
}
