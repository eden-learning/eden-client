import Airtable from 'airtable';
import * as DbConst from '../helpers/dbHelper';

// Add Airtable functions
const airtableFns = {
  writeEmailToDb(email) {
    const base = new Airtable({ apiKey: DbConst.AIRTABLE_EMAIL.apiKey }).base(
      DbConst.AIRTABLE_EMAIL.base
    );

    base(DbConst.AIRTABLE_EMAIL.table).create(
      [
        {
          fields: {
            Emails: String(email).trim(),
          },
        },
      ],
      (err, records) => {
        if (err) {
          return;
        }
        records.forEach(() => {});
      }
    );
  },
  callFns() {
    airtableFns.writeEmailToDb();
  },
};

export default airtableFns;
