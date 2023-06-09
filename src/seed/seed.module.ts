import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { FileTypeModule } from 'src/file-type/file-type.module';
import { FilesModule } from 'src/files/files.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [FileTypeModule, FilesModule, UsersModule],
})
export class SeedModule {}
