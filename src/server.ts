import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { UserRouter } from './router/user.router';


class ServerBoostrap {
    public app: express.Application = express();
    private port: number = 8000;

    constructor() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        this.app.use(morgan('dev'));
        this.app.use(cors());

        this.app.use('/api', this.routers());

        // this.app.get('/api', (req, res) => {
           // res.status(200).json({
              //  message: 'Bienvenido!'
            // });
        // });

        this.listen();
    };

    routers(): Array<express.Router> {
        return [new UserRouter().router];
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log('Server listening on port:' + this.port)
        });
    };
};

new ServerBoostrap();