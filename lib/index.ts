import { Request, Response } from "express";

export default function() {
  return (req: Request, res: Response, next: Function): void => {
    if (req.header("X-PJAX")) {
      res.render = (
        view: string,
        options?: object,
        callback?: (err: Error, html: string) => void
      ): void => {
        let done = callback;
        let opts = options;

        if (typeof options === "function") {
          done = options as (err: Error, html: string) => void;
          opts = {};
        }
        if (!done) {
          done = (err, str): void => {
            if (err) return req.next(err);
            res.send(str);
          };
        }
        // eslint-disable-next-line
        (opts as any).layout = false;
        req.app.render(view, opts, done);
      };
    }
    next();
  };
}
