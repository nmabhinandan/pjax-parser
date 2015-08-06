export default function() {
  return (req, res, next) => {
    if (req.header('X-PJAX')) {
      res.render = (view, options = {}, callback) => {
        let done = callback;
        let opts = options;

        if (typeof options === 'function') {
          done = options;
          opts = {};
        }
        if (!done) {
          done = (err, str) => {
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
}
