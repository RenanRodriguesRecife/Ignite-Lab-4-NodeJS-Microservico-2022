# Ignite-Lab-NodeJS-Microservico-dez-2022
Ignite Lab NodeJS dezembro de 2022

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

Em microserviço é precisa ter indempendência nos bancos de dados: Você vai ter um Banco de Dados para cada microserviço. Ex: imagina que um dev implementa uma Query muito pesada para a parte de Catálogos que derruba o sistema (você não pode ter esse banco lento atrapalhando as outras microtransações)

