# Mercado Libre Assessment
El repositorio consta de 2 folders `API` y `mlfronttest` para iniciar el proyecto se deb realizar lo siguiente:

## API

    cd API  
    npm start

este proyecto cuenta con patron `MVC` 
 - `app.j` incluye as instrucciones basicas para inicar node y express
 - `routes` en esté archivo se definen las rutas aceptables por la API
 - `controllers` contiene la logica en la cual se realiza la petición a la API de mercadolibre y transforma los valores para ser entregados como resultado de la consulta. 

 ## mlfronttest 

 para correr el front se debe hacer lo siguiente

    cd mlfronttest
    npm run dev

el proyecto front esta bsasdo en `nextjs` los foldes se identifican de la sigueinte forma:

- `styles` contiene todos los `.scss` de cada vista y/o componente, la carpeta helpers contiene 2 archivos con las variables del proyecto, mixins y funciones creadas.
- `public` contiene las imágenes y archivos estaticos. 
- `pages` contiene las paginas del proyecto `index` - `items` - `itmes/id` el routing lo realiza de forma programatica `NEXTJS` 
- `components` contiene los componentes creados `header` y `breadcrumbs` 
