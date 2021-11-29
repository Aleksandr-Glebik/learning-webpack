import AppService from './modules/app.service'
import { config } from './modules/config'
import './modules/header.component'

console.log('Hello world!');
console.log('Config key: ', config.key )

const service = new AppService('Hello world 2!!!')
service.log()