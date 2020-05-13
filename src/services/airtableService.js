import * as DbConst from '../helpers/dbHelper';

let Airtable = require('airtable');

export const writeEmailToDb =(email)=>{
    var base = new Airtable({apiKey: DbConst.AIRTABLE_EMAIL.apiKey}).base(DbConst.AIRTABLE_EMAIL.base);
    base(DbConst.AIRTABLE_EMAIL.table).create([
    {
        "fields": {
        "Emails": String(email).trim()
        }
    }
    ], function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });
}