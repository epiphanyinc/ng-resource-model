# ng-resource-model

This AngularJS factory runs on top of $resource service. It is useful to set a pattern to http methods and custom actions.

## Quick start

```javascript
angular.module('<yourModule>', ['ngyResourceModel'])

    .factory('<yourFactory>', ['ngyResourceModel', function(ngyResourceModel){
        return ngyResourceModel({
            url: 'http://your.api/some/endpoint',
            actions: {
                anotherAction: {
                    method: 'GET',
                    url: 'http://another.api/blah/blah'
                }
            }
        });
    })
````
This factory set automatically a few http methods, see below:
 ```javascript 
    put: {  method: 'PUT'  }
 ```

# Dependencies
* AngularJS
* ngResource

MIT