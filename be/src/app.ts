import express, { Request, Response, NextFunction } from 'express';
import sequelize from './models'; // 만들어진 객체 임포트

const app = express();
const port = 8081;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Hello, world!');
});

app.listen(port, async () => {
    console.log('http sever on 5000');
    // authenticate 메소드로 연결 확인
    await sequelize.authenticate()
        .then(async () => {
            console.log('connection success');
        })
        .catch(e => {
            console.log(e);
        })
});