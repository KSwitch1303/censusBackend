const Citizen = require('../models/citizen');

const getAllCitizens = async (req, res) => {
    try {
        const citizens = await Citizen.find();
        res.json(citizens);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addCitizen = async (req, res) => {
    const { name, age, address, lga, state, dob, gender } = req.body;

    const citizen = new Citizen({ name, age, address, lga, state, dob, gender });

    try {
        const newCitizen = await citizen.save();
        res.status(201).json(newCitizen);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllCitizens,
    addCitizen,
};
