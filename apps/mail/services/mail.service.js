import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const EMAIL_STOARGE_KEY = 'emailsDB'

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}


_createEmails()

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
                isRead: true,
                sentAt: 1551133930594,
                to: loggedinUser.email,
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,
            },
            {
                id: 'e102',
                subject: 'Your paypal account is log off',
                body: 'Would love to catch up sometimes',
                isRead: true,
                sentAt: 18761930594,
                to: loggedinUser.email,
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e103',
                subject: 'sdarot.tv',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 2628133430894,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e104',
                subject: 'Nomics.com news',
                body: 'Most Active Exchanges 1.	Binance	$27.9B 2.	Coinbase Exchange	$1.16B3.	Lbank	$981M4.	HitBTC	$850M5.	CryptoMarket	$776m',
                isRead: false,
                sentAt: 265553430894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,

            },
            {
                id: 'e105',
                subject: 'GitHub',
                body: '0 included private minutes $0.00 USD GitHub Packages 0GB of 10GB included data transfer out $0.00 USDStorage for Actions and Packages 0.0GB of 2.0GB included storage $0.00 USD Total $4.00 USD Charged to: Visa(* *** **** **** ***) Transaction ID: CH_3M4545454545454L4UDate: 22 Dec 2022 10 05AM PSTFor service through: 2023 - 01 -GitHub Inc88 Colin P.Kelly Jr.StreetSan Francisco CA 94107------------------------------------VAT / GST paid directly by GitHub where applicable',
                isRead: false,
                sentAt: 26281338894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e106',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 26245133550894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: true,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e107',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e108',
                subject: 'GitHub',
                body: '0 included private minutes $0.00 USD GitHub Packages 0GB of 10GB included data transfer out $0.00 USDStorage for Actions and Packages 0.0GB of 2.0GB included storage $0.00 USD Total $4.00 USD Charged to: Visa(* *** **** **** ***) Transaction ID: CH_3M4545454545454L4UDate: 22 Dec 2022 10 05AM PSTFor service through: 2023 - 01 -GitHub Inc88 Colin P.Kelly Jr.StreetSan Francisco CA 94107------------------------------------VAT / GST paid directly by GitHub where applicable',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e109',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e110',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e111',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: true,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e112',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: true,
                isDraft: false,
                furterTreatment: false,

            },
            {
                id: 'e113',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'DRAFTEST',
                isDelete: false,
                isStarred: false,
                isDraft: true,
                furterTreatment: false,

            },
            {
                id: 'e114',
                subject: 'Nomics.com news',
                body: 'Most Active Exchanges 1.	Binance	$27.9B 2.	Coinbase Exchange	$1.16B3.	Lbank	$981M4.	HitBTC	$850M5.	CryptoMarket	$776m',
                isRead: false,
                sentAt: 265553430894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: true,
            },
            {
                id: 'e115',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e116',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: true,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e117',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: true,
                isDraft: false,
                furterTreatment: false,

            },
            {
                id: 'e118',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'DRAFTEST',
                isDelete: false,
                isStarred: false,
                isDraft: true,
                furterTreatment: false,

            },
            {
                id: 'e119',
                subject: 'Nomics.com news',
                body: 'Most Active Exchanges 1.	Binance	$27.9B 2.	Coinbase Exchange	$1.16B3.	Lbank	$981M4.	HitBTC	$850M5.	CryptoMarket	$776m',
                isRead: false,
                sentAt: 265553430894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: true,
            },
            {
                id: 'e120',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 26245133550894,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: true,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e120',
                subject: 'לוח דרושים',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Harry potter',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e121',
                subject: 'GitHub',
                body: '0 included private minutes $0.00 USD GitHub Packages 0GB of 10GB included data transfer out $0.00 USDStorage for Actions and Packages 0.0GB of 2.0GB included storage $0.00 USD Total $4.00 USD Charged to: Visa(* *** **** **** ***) Transaction ID: CH_3M4545454545454L4UDate: 22 Dec 2022 10 05AM PSTFor service through: 2023 - 01 -GitHub Inc88 Colin P.Kelly Jr.StreetSan Francisco CA 94107------------------------------------VAT / GST paid directly by GitHub where applicable',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
            {
                id: 'e122',
                subject: 'Google Maps Platform',
                body: 'Would love to catch up sometimes',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: loggedinUser.email,
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,


            },
        ]
        storageService.saveToStorage(EMAIL_STOARGE_KEY, emails)
        console.log('from server no good')
    }

}

function getDefaultFilter() {
    return { from: '', isRead: '', isDelete: false, isStarred: '', isDraft: false, furterTreatment: '' }
}

function getEmptyMail() {
    const mail = {
        subject: '',
        body: '',
        isRead: false,
        sentAt: Date.now(),
        to: '',
        from: loggedinUser.email,
        isDelete: false,
        isStarred: false,
        isDraft: false,
        furterTreatment: false,
    }
    return mail
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(EMAIL_STOARGE_KEY)
        .then(mails => {
            if (filterBy.isDelete === false) {
                mails = mails.filter(mail => mail.isDelete === false)
            }
            if (filterBy.isDraft === false) {
                mails = mails.filter(mail => mail.isDraft === false)
            }
            if (filterBy.from) {
                const regex = new RegExp(filterBy.from, 'i')
                mails = mails.filter(mail => regex.test(mail.from))
            }
            if (filterBy.isRead) {
                mails = mails.filter(mail => mail.isRead === true)
            }
            if (filterBy.isDelete) {
                mails = mails.filter(mail => mail.isDelete === true)
            }
            if (filterBy.isStarred) {
                mails = mails.filter(mail => mail.isStarred === true)
            }
            if (filterBy.isDraft) {
                mails = mails.filter(mail => mail.isDraft === true)

            }
            if (filterBy.furterTreatment) {
                mails = mails.filter(mail => mail.furterTreatment === true)

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
    var theDate = new Date(timestamp)
    var dateString = theDate.toGMTString()
    return dateString.substring(5, 26)
}