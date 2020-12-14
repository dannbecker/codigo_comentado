var events = require('events');
var eventEmitter = new events.EventEmitter();

//  Atribui a função listener1 à variável listener1, tal função que escreve uma mensagem no log do browser.
    console.log('listener1 executed.');
}

// Atribui a função listener2 à variável listener2, tal função que escreve uma mensagem no log do browser.
var listener2 = function listener2() {
    console.log('listener2 executed.');
}

// Adiciona o listener1 ao final do array de listeners para o evento especificado. 
eventEmitter.addListener('connection', listener1);

// Adiciona o listener2 ao final do array de listeners para o evento especificado. 
eventEmitter.on('connection', listener2);

// Retorna o número de listeners ouvindo o evento especificado para a variável eventListeners e escreve uma mensagem no log do browser informando este número.
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Executa cada um dos listeners
eventEmitter.emit('connection');

// Remove o listener declarado como listener1 e escreve uma mensagem no log do browser informando que o listener1 não estará mais ouvindo.
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// Executa cada um dos listeners, desta vez estará apenas o listener2
eventEmitter.emit('connection');

// Reatribui à variável eventListeners o novo valor da quantidade de listeners ouvindo o evento especificado e escreve uma mensagem no log do browser informando este novo número.
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listener(s) listening to connection event");

// Escreve uma mensagem no log do browser informando que o programa encerrou.
console.log("Program Ended.");
