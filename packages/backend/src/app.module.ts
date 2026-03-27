import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Change this to your database type
      host: 'localhost',
      port: 3306,
      username: 'your_username', // Replace with your database username
      password: 'your_password', // Replace with your database password
      database: 'your_database', // Replace with your database name
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/your_database_name'), // Replace with your MongoDB connection string
  ],
})
export class AppModule {}