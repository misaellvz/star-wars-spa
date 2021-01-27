const path = require("path"); //Nos permite acceder a donde estamos ya sea en la nube o el  local
const HtmlWebPackPugin = require("html-webpack-plugin"); //Archivo  necesario para trabajar con html

module.exports = { //Aqui se encuentra toda la configuracion de lo que va a suceder. Modulo para exportar
  entry: ".src/index.js", //Punto de entrada acá vive el codigo inicial y de acá parte para el desarrollo
  output: { // Acá viene el proyecto estructurado y listo para producción.
    path: path.resolve(__dirname, "distribution"), // el lugar donde se exportará el proyecto
    filename: "main.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: { // Se crea un modulo con las reglas necesarias que vamos a utilizar para que babel sea compatible con todos los navegadores
    rules: [
      { // Estructura de Babel
        test: /\.js?$/, // Para identificar todos nuestros archivos .js
        exclude: /node_modules/, // excluye todos los archivos .js que se encuentren en esta carpeta
        use: {
          loader: "babel-loader", // El que va hacer el trabajo de compatibilidad
        }
      }
    ]
  },
  plugins: [ // los plugins que vamos a usar
    new HtmlWebPackPugin([ // permite trabajar con los archivos  html
      {
        inject: true, // como vamos a injectar nuestro archivo html
        template: "./public/index.html", // direccion de nuestro main template html
        filename: "./index.html" // El nombre de nuestro archivo
      }
    ])
  ]
};
