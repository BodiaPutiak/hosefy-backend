const HouseInfo = require('../models/houseInfo.model');
const getDataFromGoogleApi = require('../utils/utils');

const UPLOADS_BASE_URL = `${process.env.DOMAIN}/uploads/`;

const houseInfoController = {
  async getAllHouseInfo(req, res) {
    try {
      const houses = await HouseInfo.find({}).exec();
      const serializedHouses = houses.map((house) => house.toJSON());
      res.json(serializedHouses);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  async createHouseInfo(req, res) {
    try {
      const { address, name, description } = req.body;
      const imgPath = UPLOADS_BASE_URL + req.file.filename;
      const geocodingResponse = await getDataFromGoogleApi(address);
      const { lat, lng } = geocodingResponse.results[0].geometry.location;
      const newHouseInfo = new HouseInfo({
        name,
        description,
        position: { lat, lng },
        img: imgPath,
      });
      await newHouseInfo.save();
      res.status(201).json({ message: 'Marker created successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};

module.exports = houseInfoController;
