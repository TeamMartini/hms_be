const router = require('express').Router();
const rooms = require('../../../models/rooms');
const mongo = require('../../../mongo');

const db = mongo();

function getIoTInfo(req, res) {
  const map = [];
  rooms.forEach((room, i) => {
    room.find().then((data) => {
      map.push({
        count: data.count,
        mac_address: data.mac_address,
        room: i,
      });
      if (map.length > 7) {
        map.sort(({ room: r1 }, { room: r2 }) => r1 - r2);
        res.json({ map });
      }
    });
  });
}

router.get('/info', getIoTInfo);

module.exports = router;
