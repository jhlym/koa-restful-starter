import 'reflect-metadata';
import { useContainer } from 'routing-controllers';
import { Container } from 'typedi';
import { Application } from './config/Appliaction';

useContainer(Container);

export default new Application();
