# Ignite-Lab-NodeJS-Microservico-dez-2022
Ignite Lab NodeJS dezembro de 2022

- [ ] Nest.js
- [ ] 

### Monolítico:
- Você tem uma aplicação única que se comunica com um banco de dados

quando você precisa escalonar a aplicação ela vai precisar cada vez mais de recursos (CPU e Memória RAM) que deixa a aplicação encavalada. Se uma parte a aplicação (como nota fiscal) estiver com problema, ela acaba derrubando outra parte da aplicação que não tem a ver...


### Microserviços:
- Você divide a aplicação em várias aplicações menores (você pode ter um microserviço para cada area de especialização da aplicação)

Você pode ter um microserviço para cada parte:
  - Carrinho de compra
  - Checkout
  - Nota fiscal eletrônica
  - Logística
  - Autentificação
  - Catálogo

O que o microserviço impacta:
  - Em questão de código impacta pouca coisa
  - Mas implica muito na forma de como se hospeda a aplicação e como se escala a aplicação
  
  
No microserviço precisa ter a independência sobre os microserviços.
(Deve ser possível você derrubar todas as aplicações e deixar um microserviço que dentro do seu contexto ele vai funcionar de forma independênte)

Em microserviço é precisa ter indempendência nos bancos de dados: Você vai ter um Banco de Dados para cada microserviço. Ex: imagina que um dev implementa uma Query muito pesada para a parte de Catálogos que derruba o sistema (você não pode ter esse banco lento atrapalhando as outras microtransações)

Problemas com banco de dados de Microserviços:
  - Vai pagar mais caro com banco de dados
  - Vai precisar de duplicidade de dados. Para outros microserviços que vão consumir esses dados.
  (O microserviço que realiza uma operação no BD emite uma mensagem  para outros microserviços (comunição assíncrona - faz um broadcast), os microserviços que tem interece nos dados irão duplicar os dados envolvidos na operação para seu banco)(obs: Não é todo os dados que são salvos, quando esses dados são salvos em outros banco de dados de outros serviços eles são salvos de maneira reduzida geralmente apenas as informações necessárias)
  
 
### Nest

O Nest é um framework opinado. Ele dá uma conversão na forma que você deve criar a sua aplicação. A vantagem é que a opinião do Nest te dá menos atrito na tomada de decisão porém remove parde da liberdade.

Vantagem é que muitas coisas já estão prontas dentro do Nest. Dificilmente você terar vários metodos de fazer determinada coisa.

Module / Service / Controller


#### Decorator

Decortator é decorar (acoplando um funcionamento dentro de outra classe ou função ou variável de uma maneira "mágica"...)

Se usa o @
EX1:

@Module()

Ex2: Caso o decorator seja um controler e você colocar um atributo string. essa string magicamente será uma rota da aplicação

@Controller('app') 

http://localhost:3000/app

#### Controller

Sempre que você vai criar arquivos que vão definir rotas da sua aplicação

São arquivos de porta de entrada da aplicação. São arquivos que vão lidar com chamadas http

#### Module

O módulo é um acoplador. Ele acopla vários controllers e vários services. Ele é um ponto central para incorporar vários arquivos

você pode ter modules dentro de modules

#### Service

São Clásses genéricas que não são Controller ou Module. 
São Classes sem um proprósito não muito específico. Uma classe genérica que vai ser usado dentro dos controller ou até de outros services

#### Inversão de Dependencia

Você tem uma classe que recebe as suas dependencias através de um construtor

Quando você importa: ao invés de ir buscar a dempendencia em outro arquivo você deve receber a funcionalidade em um parêmetro quanto é instanciado (você deve usa um construturor fazer isso)

Sempre você deve declarar, Ex: Declarando AppService 

constructor(private readonly appService: AppService){}

Inversão de dependencia ajuda a trabalhar com teste

#### Injeção de Dependencia

Automatizar a insersão de dempendencia no momento que as classes são instanciadas

O Nest automaticamente consegue perseber que: 
A partir do momento que o controle pede uma depedencia, ele já automaticamente detecta que dentro do modulo existe essa classes. O Nest automaticamente passa uma depedenc ia da classe como parametro no controller.

Dentro da classe deve ter o decorator @Injectable() para você conseguir fazer a injesão da classe dentro de outra.

Uma vantagem é que quem instancia o controlle diz qual vai ser a dependencia utilizada

41

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
