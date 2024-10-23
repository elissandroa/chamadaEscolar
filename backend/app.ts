import express, { Application } from 'express';
import cors from 'cors';
import conn from './src/db/conn';
import { Sequelize } from 'sequelize';
import userRoutes from './src/routes/userRoutes';
import roleRoutes from './src/routes/roleRotes';
import disciplineRoutes from './src/routes/disciplineRotes';
import instrumentRoutes from './src/routes/instrumentRotes';
import schoolTestRoutes from './src/routes/schoolTestRoutes';
import tutorRoutes from './src/routes/tutorRoutes';


function createApp() {
    const PORT: number = 5000;

    const app: Application = express();

    app.use(express.json());

    app.use(cors());

    app.use('/schoolTests', schoolTestRoutes);
    app.use('/instruments', instrumentRoutes)
    app.use('/disciplines', disciplineRoutes);
    app.use('/tutors', tutorRoutes);
    app.use('/users', userRoutes);
    app.use('/roles', roleRoutes);


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