const Mentoring = require('../../../models/mentoring');

exports.reservation = (req, res) => {
  const {
    roomNumber, lender, capacity, rentalTime, date,
  } = req.body;

  const respond = () => {
    res.json({
      message: 'reservation successfully',
      roomNumber,
      lender,
      date,
      capacity,
      rentalTime,
    });
  };

  const onError = ({ message }) => {
    res.json({
      code: 409,
      message,
    });
  };

  Mentoring.create(lender, roomNumber, capacity, date, rentalTime).then(respond).catch(onError);
};

exports.deleteByDate = (req, res) => {
  const {
    date, roomNumber, lender, rentalTime,
  } = req.body;

  Mentoring.deleteByDate(date, roomNumber, lender, rentalTime).then((result) => {
    res.json({
      code: 200,
      result,
    });
  }).catch(({ message }) => {
    res.json({ code: 404, message });
  });
};

exports.getReservation = (req, res) => {
  const { lender } = req.query;

  Mentoring.findByLender(lender).then((mentorings) => {
    res.json({
      rental: mentorings,
    });
  }).catch(({ message }) => {
    res.json({
      code: 400,
      message,
    });
  });
};

exports.getReservationList = (req, res) => {
  const { date, roomNumber } = req.query;

  Mentoring.findByDate(date, roomNumber).then((mentorings) => {
    res.json({
      rental: mentorings,
    });
  }).catch(({ message }) => {
    res.json({
      code: 400,
      message,
    });
  });
};

exports.listReservation = (req, res) => {
  Mentoring.listReservation().then((mentoring) => {
    res.json({ mentoring });
  });
};
