import express , {Application} from 'express';
const app: Application = express();
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleware/notFound';

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials:true
}))
app.use(express.json());
app.use('/api',router);
app.get('/',(req,res)=>{
    res.send('Service Manage API is running...');
})
app.use(notFound);
export default app;