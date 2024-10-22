import express, { Application } from 'express';
import cors from 'cors';
import conn from './src/db/conn';
import { Sequelize } from 'sequelize';
import userRouter from './src/routes/userRoutes';
import roleRouter from './src/routes/roleRotes';
import disciplineRouter from './src/routes/disciplineRotes';


function createApp() {
    const PORT: number = 5000;

    const app: Application = express();

    app.use(express.json());

    app.use(cors());

    app.use('/disciplines', disciplineRouter);
    app.use('/users', userRouter);
    app.use('/roles', roleRouter);


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