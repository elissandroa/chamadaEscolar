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
import studentRoutes from './src/routes/studentRoutes';
import teacherRoutes from './src/routes/teacherRoutes';
import schoolRoutes from './src/routes/schoolRoutes';
import addressRoutes from './src/routes/addressRoutes';
import schoolRollCallRoutes from './src/routes/schoolRollCallRoutes';
import classRoomRoutes from './src/routes/classRoomRoutes';
import graduationRoutes from './src/routes/graduationRotes';


function createApp() {
    const PORT: number = 5000;

    const app: Application = express();

    app.use(express.json());

    app.use(cors());

    app.use('/addresses', addressRoutes);
    app.use('/classrooms', classRoomRoutes);
    app.use('/disciplines', disciplineRoutes);
    app.use('/graduations', graduationRoutes);
    app.use('/instruments', instrumentRoutes)
    app.use('/roles', roleRoutes);
    app.use('/schoolRollCalls', schoolRollCallRoutes);
    app.use('/schools', schoolRoutes);
    app.use('/schoolTests', schoolTestRoutes);
    app.use('/students', studentRoutes);
    app.use('/teachers', teacherRoutes);
    app.use('/tutors', tutorRoutes);
    app.use('/users', userRoutes);



    conn.sync().then(() => {
        app.listen(PORT, () => {
            console.log(`Rodando na porta ${PORT}!`)
        })
    }).catch((err: Error) => {
        console.error(`Não foi possível conectar ao banco: ${err}`)
    })

    return app;





}


export default createApp;