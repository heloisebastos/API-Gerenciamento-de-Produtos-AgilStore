import { ErrorRequestHandler } from 'express';

const jsonErrorMiddleware: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof SyntaxError && 'body' in err) {
        res.status(400).json({
            error: 'Bad Request',
            message: 'O corpo da requisição possui JSON inválido.',
        });
    } else {
        next(err);
    }
};

export default jsonErrorMiddleware;