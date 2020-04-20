import * as Koa from 'koa';
import * as path from 'path';
import { createKoaServer } from 'routing-controllers';

export class KoaConfig {
  app: Koa;

  constructor() {
    this.setup();
  }

  setup() {
    this.app = createKoaServer({
      routePrefix: '/api/v1',
      controllers: this.setupControllers(),
    });
  }

  setupControllers() {
    const controllersPath = path.resolve('src', 'controllers');
    return [controllersPath + '/*.ts'];
  }
}
