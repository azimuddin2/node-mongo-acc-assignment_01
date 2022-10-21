const fs = require('fs');

const userData = fs.readFileSync('public/users.json');
const users = JSON.parse(userData);


module.exports.random = (req, res) => {
    const values = Object.values(users)
    const randomValue = values[parseInt(Math.random() * values.length)]
    console.log(randomValue)
    res.send(randomValue)
}

module.exports.getAllUsers = (req, res, next) => {
    const { limit, page } = req.query;
    res.json(users.slice(0, limit));
};

module.exports.saveUser = (req, res) => {
    console.log(req.query);
    users.push(req.body);
    res.send(users);
};

module.exports.getUserDetail = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find(user => user.id === Number(id));
    res.send(foundUser);
};

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    const newData = users.find(user => user.id === Number(id));
    newData.id = Number(id);
    newData.contact = req.body.contact;
    res.send(newData);
};

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const userData = users.filter(user => user.id !== Number(id));
    res.send(userData);
};


module.exports.bulkUpdateUser = (req, res) => {
    const ids = req.body;
    const  newData = users.find(user => user.id === Number(ids));

    newData.ids = Number(ids);
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    res.send(newData);
};