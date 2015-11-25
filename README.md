# ngCepDbProvider
Angularjs provider wrapper para o [cepdb-js plugin](https://github.com/lfreneda/cepdb-js)

## Instalação

- Instale com [bower](http://bower.io/)

```javascript
    bower install ngCepDb
```

- Adicione tags scripts para os arquivos `ngCepDbProvider/index.js` e `cepdb-js/index.js` (dependência)

```html
    <script src="/bower_components/cepdb-js/index.js"></script>
    <script src="/bower_components/ngCepDbProvider/index.js"></script>
```

- Registre o modulo `ngCepDb` como dependência da sua aplicação

```javascript
angular.module('app', [
    'app.core',
    // .. others modules 
    'ngCepDb' // <<--------------------
]);
```

- Pronto, agora o cepDb provider pode ser injetado em seus controllers
```javascript
angular
    .module('app')
    .controller('SampleController', SampleController);
    
function SampleController($scope, cepDb) {
    cepDb.search('05422010', {
        onSuccess: function(data) {
            alert(JSON.stringify(data));
        }
    });
}
```

## API
 
search( **string** `cep`, **object** `options` )
 
 * **cep** `cep` - cep que deseja resolver
 * **object** `options` - objeto de opções para chamada 
   * **function** `onSuccess` - callback que será invocada em caso de sucesso.
   * **function** `onTimeout` - callback que será invocada em caso de timeout.
   * **int** `timeout` - tempo de espera da requisição (em segundos) (**default**: `10`)




