import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { HelloController } from './hello/hello.controller';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [TaskModule, AuthModule, ProjectsModule, UsersModule],
	controllers: [AppController, HelloController],
	providers: [AppService],
})
export class AppModule {}
