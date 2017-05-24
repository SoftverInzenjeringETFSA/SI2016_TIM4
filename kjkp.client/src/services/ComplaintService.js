import AccountService from './AccountService';

var queryString = require('query-string');

var url = 'http://localhost:8080/';




var header = new Headers({
    'Content-Type': 'application/json; charset=utf8'
});

var ComplaintService = new function () {
    //var auth = AccountService.getAuthInfo();

    this.postComplaint = (text, priv) => {
        return fetch(url + 'zalbe/dodaj_zalbu', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                tekst: text,
                privatna: priv,
                korisnikID: 1
            })
        });
    }
}

export default ComplaintService;
