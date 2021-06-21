# Minimal Gadgets and NFTs store

Proyecto para el curso de React de Coderhouse (Jun-2021)
Basado en los requerimientos incrementales de los entregables semanales.
El proyecto se encuentra en desarrollo.

## Concepto comercial
Se desarrolla el prototipo de un proyecto comercial basado en una tienda de ecommerce dedicada a la venta de productos. Entre ellos se encuentran: gadgets, indumentaria, y demás productos del ambiente geek/nerd/gammer-retro/pixelart.

En una segunda etapa, luego de finalizado el curso, se pretende expandir las posibilidades de la tienda para incluir productos NFT basados en la blockchain Etherium.

## Work to do

- Cambio de promesas por fetch o axios con async/await (pendiente de próximas clases de Firebase).
- Creación de menú mobile y optimización de responsive.
- Mejoras en estilos css
- Permitir que un producto esté en más de una categoría.
- Implementar userWidget


## Components

### App
Wrapper principal de la aplicación con React Router

### NavBar
Header y navbar con categorías principales

### ItemListContainer
Contenedor de listado de productos para categorías

### Item
Item de producto para listado de categoria

### ItemDetailContainer
Contenedor de detalle de producto

### ItemDetail
Detalle de producto

### Button
Botón reutilizable en diferentes componentes

### Footer
Footer de la aplicación con links a páginas y categorías.

### Loading
Svg de loading para llamadas asincrónicas

### NoProductsFound
Componente mostrado cuando no hay productos en una categororía

### CartWidget
Icono de cart en el Navbar

### ItemCount
Contador de productos en el carrito

### UserWidget
Icono de usuario en el Navbar


## Utils
Utilizadas para hacer fetch de data en los contenedores. Luego serán reemplazadas por funciones de Firebase

### getCategories
Funciones (promesas) para devolver contenido dummy de categorias desde /assets/dummy/categories.js

### getProducts
Funciones (promesas) para devolver contenido dummy de productos desde /assets/dummy/products.js


## Demo

![Minimal demo](demo/demo.gif)


## Boring stuff...

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
