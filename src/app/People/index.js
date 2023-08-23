const WookieePeople = require('./wookieePeople');
const CommonPeople = require('./CommonPeople');

const peopleFactory = async (id, lang) => {
    let people = lang === 'wookiee' ? new WookieePeople(id) : new CommonPeople(id);
    await people.init();
    return people;
}

module.exports = { peopleFactory }
