import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_STOARGE_KEY = 'emailsDB'
const USER_EMAIL_STOARGE_KEY = 'userEmailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


_createEmails()
// _createUser()
export const MailServices = {
    query,
    get,
    remove,
    save,
    getHumenDate,
    getEmptyMail,
    getDefaultFilter,
}

function _createEmails() {
    let emails = storageService.loadFromStorage(EMAIL_STOARGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            {
                id: 'e101',
                subject: 'Miss you!',
                body: 'Would love to catch up sometimes lets Celebrate Argentinas win with a nice drink at the beach',
                isRead: false,
                sentAt: 1551133930594,
                to: loggedinUser.email,
                from: 'Harry potter'
            },
            {
                id: 'e102',
                subject: 'Your paypal account is log off',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: loggedinUser.email,
                from: 'Harry potter'

            },
            {
                id: 'e103',
                subject: 'sdarot.tv',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email

            },
            {
                id: 'e104',
                subject: 'Nomics.com news',
                body: 'Most Active Exchanges 1.	Binance	$27.9B 2.	Coinbase Exchange	$1.16B3.	Lbank	$981M4.	HitBTC	$850M5.	CryptoMarket	$776m',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
            {
                id: 'e105',
                subject: 'GitHub',
                body: '0 included private minutes $0.00 USD GitHub Packages 0GB of 10GB included data transfer out $0.00 USDStorage for Actions and Packages 0.0GB of 2.0GB included storage $0.00 USD Total $4.00 USD Charged to: Visa(* *** **** **** ***) Transaction ID: CH_3M4545454545454L4UDate: 22 Dec 2022 10 05AM PSTFor service through: 2023 - 01 -GitHub Inc88 Colin P.Kelly Jr.StreetSan Francisco CA 94107------------------------------------VAT / GST paid directly by GitHub where applicable',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
            {
                id: 'e106',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
            {
                id: 'e107',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter'

            },
        ]
        storageService.saveToStorage(EMAIL_STOARGE_KEY, emails)
        console.log('from server no good')
    }

}

// function _createUser() {
//     let user = storageService.loadFromStorage(USER_EMAIL_STOARGE_KEY)
//     if (!user) {
//         user = {
//             email: 'user@appsus.com',
//             fullname: 'Mahatma Appsus',
//             mails: [
//                 {
//                     id: utilService.makeId(),
//                     subject: 'Miss you!',
//                     body: 'Would love to catch up sometimes',
//                     isRead: '',
//                     sentAt: 1551133930594,
//                     to: 'momo@momo.com',
//                     from: 'user@appsus.com'
//                 },
//             ]
//         }
//         storageService.saveToStorage(USER_EMAIL_STOARGE_KEY, user)
//         console.log('from server no good')
//     }
// }

function getDefaultFilter() {
    return { from: '', isRead: '' }
}

function getEmptyMail() {
    const mail = {
        subject: '',
        body: '',
        isRead: false,
        sentAt: new Date(),
        to: '',
        from: 'user@appsus.com'
    }
    return mail
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(EMAIL_STOARGE_KEY)
        .then(mails => {
            if (filterBy.from) {
                const regex = new RegExp(filterBy.from, 'i')
                mails = mails.filter(mail => regex.test(mail.from))
            }
            if (filterBy.isRead === true) {
                mails = mails.filter(mail => mail.isRead === true)
            } else {
                mails = mails.filter(mail => mail.isRead === false)
            }
            return mails
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