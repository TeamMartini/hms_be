const Board = require('../../../models/board');

exports.createBoard = (req, res) => {
  const {
    title, contents, division, pageNumber,
  } = req.body;
  let _board = null;

  const create = (board) => {
    if (board) {
      throw new Error('name exists');
    }
    return Board.create(title, contents, division, pageNumber);
  };

  const count = (board) => {
    _board = board;
    return Board.countDocuments({}).exec();
  };

  const assign = (_count) => _board.assignNumber(_count);

  const respond = (_count) => {
    res.json({
      message: 'board created successfully',
      count: _count,
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  Board.findOneByTitle(title).then(create).then(count).then(assign)
    .then(respond)
    .catch(onError);
};

exports.getBoardInfo = (req, res) => {
  const { title } = req.body;

  Board.findOneByTitle(title).then((board) => {
    res.json({ board });
  });
};

exports.listBoard = (req, res) => {
  Board.listBoard.then((board) => {
    res.json({ board });
  });
};
