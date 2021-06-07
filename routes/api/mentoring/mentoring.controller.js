const Mentoring = require('../../../models/mentoring');

exports.reservation = (req, res) => {
  const {
    roomNumber, lender, capacity, rentalTime,
  } = req.body;
  console.log(req.body);

  const create = (mentoring) => {
    if (mentoring) {
      throw new Error('reservation exists');
    } else {
      return Mentoring.create(roomNumber, lender, capacity, rentalTime);
    }
  };

  const respond = ({ mentoring }) => {
    res.json({
      message: 'reservation successfully',
      roomNumber,
      lender,
      capacity,
      rentalTime,
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };
};

exports.getReservationInfo = (req, res) => {
  const { lender } = req.body;

  Mentoring.findOneByLender(lender).then((mentoring) => {
    res.json(mentoring);
  });
};

exports.listReservation = (req, res) => {
  Mentoring.listReservation.then((mentoring) => {
    res.json(mentoring);
  });
};
