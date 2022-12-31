import { utilService } from "../../../services/util.service.js"

export function NoteVideo({vidUrl}) {

    return <iframe width="100%"
        src={vidUrl.replace('watch?v=', 'embed/')}>
    </iframe>
}
