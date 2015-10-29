"use strict";
var _ = require('lodash');

module.exports = class Linq {

    constructor(injecttor, id, type) {
        this.injecttor = injecttor;
        this.definition = {
            type: type,
            inject: [],
            alias: [],
            aliasFactory: [],
            args: []
        };

        injecttor.addDefinition(id, this.definition)
    }

    singleton() {
        this.definition.singleton = true;
        return this
    }

    inject(name, inject) {

        if (_.isArray(name)) {
            this.definition.inject.push.apply(this.definition.inject, name)
        } else if (_.isObject(name)) {
            this.definition.inject.push(name)
        }

        else if (_.toArray(arguments).length == 1 && _.isString(name)) {
            this.definition.inject.push({name: name, ref: name})
        } else if (_.toArray(arguments).length == 2 && _.isString(name)) {
            this.definition.inject.push({name: name, ref: inject})
        }

        return this;
    }

    injectFactoryMethod(name, factoryMethod) {
        return this.inject({
            name: name,
            factoryMethod: factoryMethod
        })
    }

    injectAlias(name, alias) {
        return this.inject({
            name: name,
            alias: alias
        })
    }

    injectAliasFactory(name, alias) {
        return this.inject({
            name: name,
            aliasFactory: alias
        })
    }

    injectArray(name, arr) {
        return this.inject({
            name: name,
            array: arr
        })
    }


    injetcDictionary(name, dic) {

    }

    injectorValue(name, value) {
        return this.inject({
            name: name,
            value: value
        })
    }

    alias(alias) {
        if (_.isArray(alias)) {
            this.definition.alias.push.apply(this.definition.alias, alias)
        } else {
            this.definition.alias.push(alias)
        }

        return this;
    }

    initMethod(initMethod) {
        this.definition.initMethod = initMethod;
        return this;
    }

    injectorAware(injectorAware) {
        this.definition.injectorAware = injectorAware;
        return this;
    }


    aliasFactory(aliasFactory) {
        if (_.isArray(aliasFactory)) {
            this.definition.aliasFactory.push.apply(this.definition.aliasFactory, aliasFactory)
        } else {
            this.definition.aliasFactory.push(aliasFactory)
        }

        return this;
    }

    args(args) {
        if (_.isArray(alias)) {
            this.definition.args.push.apply(this.definition.args, args)
        } else {
            this.definition.args.push(args)
        }
        return this;
    }

    define(id, type) {
        return this.injecttor.define(id, type)
    }


}