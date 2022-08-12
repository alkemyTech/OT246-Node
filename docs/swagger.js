// middlewaress, le paso la ruta para poder consumir la API

module.exports = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'ONG api',
      version: '1.3.0',
      description: 'Api de la aceleracion de Alkemy',
    },
    servers: [
      {
        url: 'http://localhost:3001',
      },
    ],
  },
  apis: ['../routes/*.js',
    '../docs/*.js'],
}
