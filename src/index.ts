import 'reflect-metadata';
import { container } from 'tsyringe';
import { PinoLoggerAdapter } from './adapters/pino-logger.adapter.ts';
import { envProxy } from '../bin/config/EnvValidator.ts';

// register container dependancies
container.registerSingleton('PinoLoggerAdapter', PinoLoggerAdapter);

// validate the environment variables and run the main function on success

envProxy.validate() && (function main() {
    //execute your code here..
    const logger = container.resolve(PinoLoggerAdapter);
    logger.info('Hello World !', 'index.ts');
})();

export const env = envProxy.validatedEnvObj;