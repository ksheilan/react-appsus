import { utilService } from "../../../services/util.service.js"
import { NoteVideo } from "./note-video.jsx"

export function NoteTxt({ val }) {
    function processText() {
        let textContent = val.split(utilService.youtubeRegEx)
        if (textContent[1]) {
            return textContent.map(txt => {
                if (!utilService.youtubeRegEx.test(txt)) return <div key={utilService.makeId()}><p>{txt}</p></div>
                else return <div key={utilService.makeId()}><NoteVideo /></div>
            })
        }

        return textContent[0]
    }
    return <div className="text">
        {processText()}
    </div>
}
