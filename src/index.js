import React from 'react'
import {render} from 'react-dom'
import AppService from './modules/app.service'
import { config } from './modules/config'
import './modules/header.component'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'

console.log(css.toString());

console.log('Hello world!');
console.log('Config key: ', config.key )

const service = new AppService('Hello world 2!!!')
service.log()

render(<App />, document.getElementById('app'))