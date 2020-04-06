"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    return function (req, res, next) {
        if (req.header("X-PJAX")) {
            res.render = function (view, options, callback) {
                var done = callback;
                var opts = options;
                if (typeof options === "function") {
                    done = options;
                    opts = {};
                }
                if (!done) {
                    done = function (err, str) {
                        if (err)
                            return req.next(err);
                        res.send(str);
                    };
                }
                // eslint-disable-next-line
                opts.layout = false;
                req.app.render(view, opts, done);
            };
        }
        next();
    };
}
exports.default = default_1;

//# sourceMappingURL=index.js.map
