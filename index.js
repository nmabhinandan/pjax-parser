'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (req, res, next) {
  if (req.header('X-PJAX')) {
    res.render = function (view, options, callback) {
      if (options === undefined) options = {};

      var done = callback;
      var opts = options;

      if (typeof options === 'function') {
        done = options;
        opts = {};
      }
      if (!done) {
        done = function (err, str) {
          if (err) return req.next(err);
          res.send(str);
        };
      }
      opts.layout = false;
      req.app.render(view, opts, done);
    };
  }
  next();
};

module.exports = exports['default'];
//# sourceMappingURL=index.js.map