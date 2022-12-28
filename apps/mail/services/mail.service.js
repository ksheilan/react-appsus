import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_STOARGE_KEY = 'emailsDB'

_createEmails()

export const MailServices = {
    query,
    get,
    remove,
    save,
    getHumenDate,
}


function _createEmails() {
    let emails = storageService.loadFromStorage(EMAIL_STOARGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from:'Harry potter'
            },
            {
                id: 'e102',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from:'Harry potter'

            },
            {
                id: 'e103',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from:'Harry potter'

            },
        ]
        storageService.saveToStorage(EMAIL_STOARGE_KEY, emails)
        console.log('from server no good')
    }

}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
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