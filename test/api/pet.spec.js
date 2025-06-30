// Bibliotecas e Frameworks
const supertest = require('supertest');

const petId = 960107901;

// Em javaScript, Classe é opcional, mas pode agrupar em uma Describe 
describe('API petStore Swagger - Entidade Pet', () => {

     // Atributos do grupo/describe
     const request = supertest('https://petstore.swagger.io/v2'); // Base URL da 
     
     // Funções ou métodos: its 
     it('POST Pet', () => {
          // Atributos, Campos, Caracteristicas, Configurações
         const pet = require('../../vendors/json/pet.json')
         return request
              .post('/pet')
              .send(pet)
              .then((res) => {
               expect(res.statusCode).toBe(200)
               expect(res.body.id).toBe(petId)
               expect(res.body.name).toBe('Juju')
               expect(res.body.category.name).toBe('dog')
               expect(res.body.tags[0].name).toBe('vacinado')
              }
          )
          // Funções de Apoio (Opcional)

          // Funções de Teste em si
               }); // final do metodo post

     })// Funçoes e metodos 

     
