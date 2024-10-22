import express, { Application } from 'express';
import cors from 'cors';
import conn from './src/db/conn';
import { Sequelize } from 'sequelize';


function createApp() {
    const PORT: number = 5000;

    const app: Application = express();

    app.use(express.json());

    app.use(cors());


    conn.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Rodando na porta ${PORT}!`)
        })
    }). catch((err:Error) => {
        console.error(`Não foi possível conectar ao banco: ${err}`)
    })
        
    return app;





}


export default createApp;