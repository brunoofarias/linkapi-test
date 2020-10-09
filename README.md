# LinkAPI Test

Dependencias para rodar o projeto
  - NodeJS v14^

### Tecnologias
  - [JavaScript](https://www.javascript.com/)
  - [NodeJS](https://nodejs.org/en/)
  
### Instalação

```
  > git clone git@github.com:brunoofarias/linkapi-test.git
  > cd linkapi-test
  > npm install
```

* Obs: É importante configurar um arquivo chamado ".env" seguindo o exemplo do arquivo ".env.example" antes de rodar o projeto.

### Para rodar o projeto
```
   > npx nodemon index.js // Dev
   > node src/index.js // Prod
```

### Endpoints

 > /general/integrate - Integra as oportunidades do Pipedrive com o Bling e salva no MongoDB
 > /orders - Retorna os pedidos salvos no MongoDB

* Na pasta /docs, você encontrará a collection do Postman contendo os exemplos de como realizar as requests.

### Contribuir com o projeto

* Para contribuir com o projeto, é necessário estar com o código fonte atualizado com a branch **Master** 
* Criar uma branch a partir da master `git checkout -b nomeDaBranch ` - ex: listaDeUsuarios
* Desenvolver a funcionalidade nessa branch criada
* Efetuar os commits `git add .` e `git commit -m 'descrição do que foi feito'`
* Subir para o repositório a sua branch `git push origin nomeDaBranch`
* Abrir um Pull request para a master, descrevendo o que foi alterado
