# Minimal Gadgets and NFTs store

Proyecto final para el curso de ReactJS de Coderhouse (Jun-Aug 2021)
Basado en los requerimientos incrementales de los entregables semanales.


## Concepto comercial
Se desarrolla el prototipo de un proyecto comercial basado en una tienda de ecommerce dedicada a la venta de productos. Entre ellos se encuentran: gadgets, indumentaria, y demás productos del ambiente geek/nerd/gammer-retro/pixelart.

En una segunda etapa, luego de finalizado el curso, se pretende expandir las posibilidades de la tienda para incluir productos NFT basados en la blockchain Etherium.


## Demo
![Minimal demo](demo/demo.gif)


## Deployed on Vercel
https://minimal-shop.vercel.app/


## Etapas del proyecto
- Etapa 1: Presentación proyecto final Coderhouse (Aug 2021 - FINALIZADO)
- Etapa 2: Continuidad con nuevas features (EN DESARROLLO)


## Future improvments (Course out of scope)

- Agregar área de usuario
- Agregar control de stock en tiempo real
- Agregar administrador de productos (CRUD) protegido con autenticación de Firebase
- Persistir el carrito del usuario controlando stock y disponibilidad de productos
- Agregar módulo de envios
- Agregar módulo de pagos (Mercadopago, Stripe)
- Agregar Emails transaccionales
- Mejoras de diseño


## Enviroment variables (.env configuration)
Place a .env file inside the root folder of this proyect. Get the needed data from the Firebase javascript app of your project:

REACT_APP_API_KEY=
REACT_APP_AUTH_DOMAIN=
REACT_APP_PROJECT_ID=
REACT_APP_STORAGE_BUCKET=
REACT_APP_MESSAGING_SENDER_ID=
REACT_APP_APP_ID=


## Components

### App
Wrapper principal de la aplicación con React Router

### Button
Botón reutilizable en diferentes componentes

### Cart
Carrito de compras con resumen de productos agregados y posibilidad de editar cantidades y remover.

### CartContainer
Contenedor del carrito

### CartItemCount
Contador de productos en el carrito desde el Cart Context

### CartWidget
Icono de cart en el Navbar

### Checkout
Contenido del checkout. Formulario y resumen del carrito.

### CheckoutContainer
Contenedor del Checkout

### ChechoutForm
Formulario de checkout con nombre, email y teléfono. Los datos se validan para completar la orden.

### Footer
Footer de la aplicación con links a páginas y categorías.

### Item
Item de producto para listado de categoria

### ItemCount
Contador de productos en el carrito

### ItemDetail
Detalle de producto

### ItemDetailContainer
Contenedor de detalle de producto

### ItemList
Grilla de Items (productos)

### ItemListContainer
Contenedor de listado de productos para categorías

### Loading
Svg de loading para llamadas asincrónicas a Firebase. Simula un reloj regresando en el tiempo.

### NavBar
Header y navbar con categorías principales.

### SectionHeader
Componente reutilizable para encabezados de páginas y categorías. Recibe un título y una descipción

### Waldo
Componente reutilizable para productos, categorias y páginas no encontradas. Recibe un mensaje y la opción de link a la home

### ScrollToTop
Componente para que el react router haga scroll top con cada cambio de url. Sugerido por https://reactrouter.com/web/guides/scroll-restoration

## Contexts

### CartContext
Context y provider para el carrito. Funciones de consulta y totalización de productos


## Utils

### getCategories
Funciones reutilizable para obtener las categorias desde Firebase, utilizado en navbar y footer

### firebase/index
Configuración de firebase desde (utilizando .env)


## Boring stuff... Available Scripts

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


![Minimal demo](src/assets/images/one_up.png) Thanks for forking ...