const mongoose = require('mongoose');

const houseInfoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	position: {
		lat: { type: Number, required: true },
		lng: { type: Number, required: true }
  },
  img: { type: String, required: true }
});

const HouseInfo = mongoose.model('HouseInfo', houseInfoSchema);

module.exports = HouseInfo;