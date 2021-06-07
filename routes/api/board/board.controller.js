const Board = require('../../../models/board');

exports.createBoard = (req, res) => {
  const {
    title, contents, division, pageNumber,
  } = req.body;

  const create = (board) => {
    if (board) {
      throw new Error('name exists');
    }
    return Board.create(title, contents, division, pageNumber);
  };

  const respond = (board) => {
    res.json({
      message: 'board created successfully',
      title,
      contents,
      division,
      pageNumber,
    });
  };

  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  Board.findOneByTitle(title).then(create).then(respond).catch(onError);
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
