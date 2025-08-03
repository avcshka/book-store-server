import express, { Express } from 'express';
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2'

const db = drizzle(process.env.DATABASE_URL as string);

const PORT: number = Number(process.env.PORT) || 4000;
const app: Express = express();

const startApp = async () => {
  try {
    app.listen(PORT, () => console.log('Listening ons port ' + PORT));


  } catch (e) {
    console.log(e);
  }
}

startApp();