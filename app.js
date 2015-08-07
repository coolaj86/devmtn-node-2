module.exports.create = function () {
  function handler(req, res) {
    var result = '';
    req.on('data', function (buffer) {
      console.log(buffer);
      console.log(buffer.toString('utf8'));
      result += buffer.toString('utf8');
    });
    req.on('end', function () {
      console.log('done', result);
      res.statusCode = 200;
      res.write(JSON.stringify({ success: true }));
      res.end();
    });
  }

  return handler;
};
