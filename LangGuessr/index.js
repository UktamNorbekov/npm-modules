const franc = require("franc");
const langs = require("langs");


const langCode = franc('Alle mennesker er fodt frie og');

const language = langs.where("3", langCode);
console.log(language.name)