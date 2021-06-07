const Room = require('../../../models/room');

exports.createRoom = (req, res) => {
  const { name, floor, capacity } = req.body;

  const create = (room) => {
    if (room) {
      throw new Error('name exists');
    }
    return Room.create(name, floor, capacity);
  };

  const respond = (room) => {
    res.json({
      message: 'room created successfully',
      name,
      floor,
      capacity,
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  Room.findOneByName(name).then(create).then(respond).catch(onError);
};

exports.getRoomInfo = (req, res) => {
  const { name } = req.body;

  Room.findOneByName(name).then((room) => {
    res.json({ room });
  });
};

exports.listRooms = (req, res) => {
  Room.listRooms().then((rooms) => {
    res.json({ rooms });
  });
};
