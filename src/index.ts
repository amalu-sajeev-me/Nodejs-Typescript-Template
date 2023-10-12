import 'reflect-metadata';
import { container } from 'tsyringe';
import { PinoLoggerAdapter } from './adapters/pino-logger.adapter.ts';

container.registerSingleton('PinoLoggerAdapter', PinoLoggerAdapter);


(function main() {
    //execute your code here..
    const logger = container.resolve(PinoLoggerAdapter);
    logger.info('Hello World !', 'index.ts');
})();