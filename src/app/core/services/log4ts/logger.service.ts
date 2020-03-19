import { Injectable } from '@angular/core';

const noop = (): any => undefined;
/**
 * How to use ...
 * private logger: LoggerService
 * this.logger.error('Component name', variableName, variableName, variableName);
 */
export abstract class Logger {
  info: any;
  warn: any;
  error: any;
}

@Injectable()
export class LoggerService implements Logger {
  info: any;
  warn: any;
  error: any;
  invokeConsoleMethod(type?: string, ...args: any): void {}
}