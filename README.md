# ngCepDbProvider
Angularjs provider wrapper for [cepdb-js plugin](https://github.com/lfreneda/cepdb-js)

## How to install 

- Install it with [bower](http://bower.io/)

```javascript
    bower install ngCepDb
```

- Add a script a tag for `ngCepDbProvider/index.js` and its dependencies `cepdb-js/index.js`

```html
    <script src="/bower_components/cepdb-js/index.js"></script>
    <script src="/bower_components/ngCepDbProvider/index.js"></script>
```

- Add angular module as a dependency for your app

```javascript
angular.module('app', [
    'app.core',
    // .. others modules 
    'ngCepDb' // <<--------------------
]);
```

- cepDb provider will be available to inject into yours app controllers
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
 
 * **cep** `cep` - cep to be searched
 * **object** `options` - global upload options
   * **function** `onSuccess` - callback to be called on success 
   * **function** `onTimeout` - callback to be called on request timed out 
   * **int** `timeout` - remove thumbnail versions after sucessful upload (**default**: `10`)


