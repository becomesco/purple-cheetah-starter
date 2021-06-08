import { createPurpleCheetah } from '@becomes/purple-cheetah';
import { HelloController } from './controller';

export default createPurpleCheetah({
  port: 1280,
  controllers: [HelloController],
});
