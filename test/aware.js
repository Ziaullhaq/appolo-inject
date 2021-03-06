"use strict";
var should = require('chai').should(),
    inject = require('../lib/inject');

describe('Injector Aware',function(){

    describe('should inject injector to object', function () {
        var injector;

        beforeEach(function () {
            injector = inject.createContainer();

            var Rectangle = class{

                constructor () {

                }
            }

            injector.addDefinitions({
                rectangle: {
                    type: Rectangle,
                    singleton: true,
                    injectorAware:true
                }
            });

            injector.initialize();
        });

        it('should have the injected value', function () {

            var rectangle = injector.getObject('rectangle');

            should.exist(rectangle.$injector);

            rectangle.$injector.should.be.equal(injector);
        });
    });




});

