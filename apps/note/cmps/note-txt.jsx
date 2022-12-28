const { Fragment } = React

export function NoteTxt({ info }) {
    return <Fragment>
        <p>{'<Text Note>'}</p>
        <p>{`txt: ${info.txt}`}</p>
        </Fragment>
}
