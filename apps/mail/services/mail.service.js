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
                from: 'Harry potter@.com',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,
            },
            {
                id: 'e102',
                subject: 'Coffee-Making Software',
                body: 'Attention coffee lovers! Theres a revolution coming your way Coffee has been a popular drink since who knows when? But have you ever thought about how much time people spend making their morning cuppa? The process is laborious and cumbersome. It takes so much work for something so simple. But not anymore!AI-powered coffee machines that grind beans, measure coffee grounds, and weigh them for optimal brewing have come to save the day. Allowing you to just take a sip in the morning without any hassle. So easy!Be a part of this tech revolution today by buying a product from a tech company who cares about your daily routine. See exclusive audience insights here',
                isRead: true,
                sentAt: 18761930594,
                to: loggedinUser.email,
                from: 'Coffee-Making@.com',
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
                from: 'Biance@.com',
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
                from: 'GitHub@.com',
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
                from: 'Google platform@.com',
                isDelete: true,
                isStarred: false,
                isDraft: false,
                furterTreatment: false,
            },
            {
                id: 'e107',
                subject: 'bamba',
                body: 'Kids love bamba! Bamba is a tasty and nutritious snack that kids of all ages enjoy, Bamba is a delicious peanut butter-flavored corn puff that kids of all ages love. Made with 100% natural ingredients, Bamba offers an irresistible combination of crunchy and smooth textures. Feed the little ones who refuse to eat their vegetables by giving them something they, Its bamba! Bamba is an Israeli snack that consists of a peanut butter-flavored puffed corn cereal',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Bamba@.com',
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
                subject: 'Shoko',
                body: 'Thirst-quenching water for the people. shoko is a refreshing, calorie-free drink that wont leave you feeling thirsty or weighed down. Try it today! Drink with shoko. A refreshing drink that is sugar-free and full of flavor. Drink up! Life is better when youre hydrated. Keep yourself and your family healthy with shoko drink, the healthier alternative to sodas and other sugary drinks.',
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
                subject: 'Computers',
                body: 'What do you need a computer for? Were the specialists when it comes to computers. Give us a call today! When it comes to computers, you cant get much better than a Lenovo. Built with the highest quality components and backed by world-class customer service, Lenovo is the ultimate choice for desktops and laptops. Order today! For the best in quality and service, you need a computer that was built with care. Our computers are custom-built to order by technicians who understand your needs. Call us today for more information!',
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
                subject: 'House sale',
                body: 'Buy a house. Houses for sale. Call today!Stop looking at houses and buy one. Buying a house is the American dream—but it doesnt have to be complicated or stressful. Let us help you find a home that fits both your needs and budget. Call for more information today!',
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
                subject: 'hospitel document',
                body: 'You dont have to worry about getting a sunburn with sunscreen! Our new lotion is SPF 50 and protects against both UVA and UVB rays. Click here to order today. Dont get a sunburn this year. Reapply sunscreen every 2 hours and reapply after you been in the water or sweating for an extended period of time.',
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
                from: 'DRAFTEST@.com',
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
                from: 'Biance@.com',
                isDelete: false,
                isStarred: false,
                isDraft: false,
                furterTreatment: true,
            },
            {
                id: 'e115',
                subject: 'hospitel document',
                body: 'You dont have to worry about getting a sunburn with sunscreen! Our new lotion is SPF 50 and protects against both UVA and UVB rays. Click here to order today. Dont get a sunburn this year. Reapply sunscreen every 2 hours and reapply after you been in the water or sweating for an extended period of time.',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'kapln@.com',
                isDelete: false,
                isStarred: true,
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
                subject: 'bamba',
                body: 'Kids love bamba! Bamba is a tasty and nutritious snack that kids of all ages enjoy, Bamba is a delicious peanut butter-flavored corn puff that kids of all ages love. Made with 100% natural ingredients, Bamba offers an irresistible combination of crunchy and smooth textures. Feed the little ones who refuse to eat their vegetables by giving them something they, Its bamba! Bamba is an Israeli snack that consists of a peanut butter-flavored puffed corn cereal',
                isRead: false,
                sentAt: 1551133930594,
                to: 'momo@momo.com',
                from: 'Bamba@.com',
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
                from: 'DRAFTEST@.com',
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
                from: 'Harry potter@.com',
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
                from: 'Harry potter@.com',
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
                from: 'Mario8@.com',
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
                from: 'GitHub26@.com',
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