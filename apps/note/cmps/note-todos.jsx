const { Fragment } = React

// For now, we are using utilService to make a unique ID for each todo
import { utilService } from "../../../services/util.service.js"

export function NoteTodos({ info }) {
    return <Fragment>
        <p>{'<Todo Note>'}</p>
        <p>{`label: ${info.label}`}</p>
        <ul>
            {info.todos.map(todo => <li key={utilService.makeId()}>{todo.txt}</li>)}
        </ul>
    </Fragment>
}
