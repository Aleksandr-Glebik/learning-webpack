// console.log('Header component');
import $ from 'jquery'

$('<h1 />')
    .text('Hello world from JQuery')
    .css({
        textAlign: 'center',
        color: '#04044e'
    })
    .appendTo($('header'))