import * as config from 'config';
import { KoaConfig } from './Koa';
import { logger } from '../lib/Logging';

export class Application {
  server: any;
  koa: KoaConfig;

  constructor() {
    this.koa = new KoaConfig();

    const port = config.get('ports.http');

    this.server = this.koa.app.listen(port, () => {
      logger.info(`Server Started!`);
      logger.info(`Http: http://localhost:${port}`);
    });
  }
}
