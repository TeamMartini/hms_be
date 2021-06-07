const Faq = require('../../../models/faq');

exports.createFaq = (req, res) => {
  const { type, title, content } = req.body;
  if (!type || !title || !content) {
    res.json({
      code: 400,
      message: 'type, title, content required',
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

  Faq.createFaq(type, title, content).then(respond).catch(onError);
};

exports.listFaq = (req, res) => {
  Faq.listFaq().then((faqs) => {
    res.json({ faqs });
  });
};
