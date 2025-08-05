// Bibliotecas e Frameworks
const supertest = require('supertest');

const petId = 960107902;

// Em javaScript, Classe é opcional, mas pode agrupar em uma Describe 
describe('API petStore Swagger - Entidade Pet', () => {

     // Atributos do grupo/describe
     const request = supertest('https://petstore.swagger.io/v2'); // Base URL da

     // Funções ou métodos: its
     it('POST Pet', async () => {
          // Atributos, Campos, Caracteristicas, Configurações
          const pet = await require('../../vendors/json/pet.json')

          // Funções de Teste em si
          return request
               .post('/pet')
               .send(pet)
               .then((res) => {
                    expect(res.statusCode).toBe(200)
                    expect(res.body.id).toBe(petId)
                    expect(res.body.name).toBe('Juju')
                    expect(res.body.category.name).toBe('dog')
                    expect(res.body.tags[0].name).toBe('vacinado')
               })


     }); // final do metodo post
     
     //metodo get
it('GET Pet', async() => {
     return await request
          .get(`/pet/${petId}`)
          .then((res) => {
               expect(res.statusCode).toBe(200)
               expect(res.body.id).toBe(petId)
               expect(res.body.status).toBe('available')
          })
}); // final do metodo get

//metodo put
it('PUT Pet', async() => {
     const petPut = await require('../../vendors/petput.json')
     return await request
          .put(`/pet/`)
          .send(petPut)
          .then((res) => {
               expect(res.statusCode).toBe(200)
               expect(res.body.status).toBe('sold')
          })
}); // final do metodo put

//metodo delete
it('DELETE Pet', async() => {
     return await request
          .delete(`/pet/${petId}`)
          .then((res) => {
               expect(res.statusCode).toBe(200)
               expect(res.body.message).toBe(petId.toString())
          })
}); 
})