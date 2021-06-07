const Suggest = require('../../../models/suggest');

exports.createSuggest = (req, res) => {
  const {
    title,
    contact,
    file,
    content,
  } = req.body;

  if (!title || !contact) {
    res.json({
      code: 400,
      message: 'title, contact required',
    });
  }

  const respond = () => {
    res.json({
      message: 'created successfully',
    });
  };

  const onError = (error) => {
    res.json({
      code: 400,
      message: error.message,
    });
  };

  Suggest.createSuggest(title, contact, file, content).then(respond).catch(onError);
};

exports.listSuggest = (req, res) => {
  Suggest.listSuggest().then((suggests) => {
    res.json({ suggests });
  });
};
