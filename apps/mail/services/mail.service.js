import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_STOARGE_KEY = 'emailsDB'
const USER_EMAIL_STOARGE_KEY = 'userEmailsDB'

_createEmails()
_createUser()
export const MailServices = {
    query,
    get,
    remove,
    save,
    getHumenDate,
    getEmptyMail,
}


function _createEmails() {
    let emails = storageService.loadFromStorage(EMAIL_STOARGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: '',
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'
            },
            {
                id: 'e102',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: '',
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
            {
                id: 'e103',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: '',
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
        ]
        storageService.saveToStorage(EMAIL_STOARGE_KEY, emails)
        console.log('from server no good')
    }

}

function _createUser() {
    let user = storageService.loadFromStorage(USER_EMAIL_STOARGE_KEY)
    if (!user) {
        user = {
            email: 'user@appsus.com',
            fullname: 'Mahatma Appsus',
            mails: [
                {
                    id: utilService.makeId(),
                    subject: 'Miss you!',
                    body: 'Would love to catch up sometimes',
                    isRead: '',
                    sentAt: 1551133930594,
                    to: 'momo@momo.com',
                    from: 'user@appsus.com'
                },
            ]
        }
        storageService.saveToStorage(USER_EMAIL_STOARGE_KEY, user)
        console.log('from server no good')
    }
}




function getEmptyMail() {
    const mail = {
        subject: '',
        body: '',
        isRead: '',
        sentAt: new Date(),
        to: '',
        from: 'user@appsus.com'
    }
}

function query() {
    return storageService.query(EMAIL_STOARGE_KEY)
        .then(emails => {
            return emails
        })
}

function get(mailId) {
    return storageService.get(EMAIL_STOARGE_KEY, mailId)
}


function save(mail) {
    if (mail.id) {
        return storageService.put(EMAIL_STOARGE_KEY, mail)
    } else {
        return storageService.post(EMAIL_STOARGE_KEY, mail)
    }
}

function remove(mailId) {
    return storageService.remove(EMAIL_STOARGE_KEY, mailId)
}



function getHumenDate(timestamp) {
    var theDate = new Date(timestamp);
    var dateString = theDate.toGMTString();
    return dateString
}