const { Fragment } = React

export function NoteImg({ info }) {
    return <Fragment>
        <p>{'<Img Note>'}</p>
        <p>{`title: ${info.title}`}</p>
        <p>{`url: ${info.url}`}</p>
    </Fragment>
}
