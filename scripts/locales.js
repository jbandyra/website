const fs = require("fs");
const path = require("path");
const Airtable = require("airtable");
require("dotenv").config();

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const airDB = Airtable.base(process.env.AIRTABLE_BASE);
try {
  fs.readdirSync("locales");
} catch (error) {
  fs.mkdirSync("locales");
}

async function getLocalesData(languageKey) {
  let data = null;
  await airDB("general")
    .select()
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          data = { ...data, [record.get("key")]: record.get(languageKey) };
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
        fs.writeFile(
          `locales/${languageKey}/common.json`,
          JSON.stringify(data),
          function (err) {
            if (err) return console.log(err);
            console.log("Locales data fetched.");
          }
        );
      }
    );
}
getLocalesData("en");
getLocalesData("pl");
