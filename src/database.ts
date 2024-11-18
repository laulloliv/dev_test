import 'reflect-metadata';
import { DataSource } from 'typeorm';
import User from './entities/User';
import Post from './entities/Post';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "password",
    database: process.env.DB_NAME || "test_db",
    entities: [User,Post],
    synchronize: true,
});
