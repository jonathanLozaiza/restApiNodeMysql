import express, {Application} from 'express'
import morgan from 'morgan'

//Routes
import IndexRoutes from './routes/index.routes'
import PostsRoutes from './routes/posts.routes'

export class App {
    
    private app : Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings(){
        this.app.set("port", this.port || process.env.PORT || 4000);
    }

    middlewares(){
        this.app.use(morgan('dev'));
        //validar el recibir datos en formato json
        this.app.use(express.json());
    }

    routes(){
        this.app.use(IndexRoutes);
        this.app.use('/posts', PostsRoutes);
    }

    async listen(){
        await this.app.listen(this.app.get("port"));
        console.log("server on port ", this.app.get("port"));
    }
}