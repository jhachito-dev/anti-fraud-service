import { Module } from '@nestjs/common';
import { AntiFraudConsumer } from './kafka/anti-fraud.consumer';
import { AntiFraudService } from './services/anti-fraud.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [KafkaModule],
  providers: [AntiFraudService, AntiFraudConsumer],
})
export class AppModule {}
