import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlController } from './url.controller';
import { UrlService } from './url.service';
import { Url, UrlSchema } from './url.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Url', schema: UrlSchema }]) 
  ],
  controllers: [UrlController],
  providers: [UrlService],
})
export class UrlModule {}
