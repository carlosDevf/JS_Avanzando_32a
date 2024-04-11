## NODEJS

- modulos locales
    - const nombre = require('ruta_nombre_del_archivo') // commonJS
    - import nombre form 'ruta_nombre_del_archivo_extension' // module > configuracion

- modulos nativos
    - son modulos del sistema (os, fs, path, process, http)
    - no necestan ser instalados ya vienen con node, se recomienda el uso del prefijo node:
    - para importarlos o usarlos se require o imports

- modulos que podemos instalar (NPM)     
    - npm i nombre_de_la_libreria
        - se va a crear la carpeta node_modules
        - se va agregar al package.json la seccion de dependecias
    - npm install nombre_de_la_libreria
    - npm install -g nodemon // instalar una libreria de forma global



--- 
### Trabajando con GitHub y nodejs

Para repositorios que estan en github es importante no subir la carpeta de node_modules ya que es muy pesada
para esto sigue los siguietes pasos: 

    - crear el archivo .gitignore
    - añade dentro de gitignore las carpetas y archivos que no quieras subir al repo
    
        - documentos personales, llaves, certificados, documentos delicados
        - el node_modules es importante ya que es requerido por los serviodres y lugares donde se vaya a ocupar el proyecto.

### Uso del caret
    
Dentro de package.json cuando instalamos una paquete este lleva su version: 
    ````json
         "inquirer": "^9.2.17",
    ````

este caret indica que se debe instalar una version superior si es que la hay
eliminalo como buena practica para trabajar con versiones absolutas
   
### instalar dependecias

Estas deben de instalarse por proyecto 


### Carpeta node_modules

Tiene las librerias que necesita la aplicacion (proyecto, modulo, app) y se instala con npm i 
simpre que nos comprate nuevas apps o bajo apps de node en git necesito instalar las dependecias y ocupo npm i 


## Como crear este proyecto de node para subirlo a github

- git init 
    para preparalo a github

- Con mi sesion inciada de github
    - https://github.com/new
    - crear un nuevo repo
    - vamos a seguir los pasos que tienen la web al momento de crear un repo        
        - git add .
        - git commit -m "first commit"
        - git branch -M main
        - git remote add origin https://github.com/carlosDevf/test-repo.git
        - git push -u origin main
            - es posibl que te pida tu token de acceso
- lo demas cambios pueden ser como la herramieta de VSCode


## Tarea

- Proyecto uno NODEJ
- Pryecto dos NPM
- proyecto de la presentacion

https://docs.google.com/presentation/d/18Qg3_Cmw3JZW0W1O5HURcJEfFKKI4fv5k168R9WhilQ/edit?usp=sharing

----
# La extensión de archivo MJS

```
.mjs
```

se utiliza para denotar módulos de JavaScript que utilizan la sintaxis de importación y exportación de ES6 (ECMAScript 2015) o superior. El propósito de introducir una distinción entre archivos

```
.js
```

y

```
.mjs
```

fue proporcionar una manera explícita de indicar al entorno de ejecución de Node.js y a los navegadores, así como a los desarrolladores, que el archivo debe tratarse como un módulo ES.