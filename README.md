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
