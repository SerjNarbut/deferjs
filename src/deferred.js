/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deferred = (function(){


    var isPromise = function(value){
        return value && typeof  value === 'function';
    }
    

    function deferClass(){
        this.goodVal = null;
        this.badVal = null;
        this.updateVal = null;
        this.sucFunct = [];
        this.errFunct = [];
        this.updFunct = [];

        var self = this;
        this.promise = {
            then:function(){

                if(arguments.length > 0){
                    if(isPromise(arguments[0])){
                        self.sucFunct.push(arguments[0]);
                    }
                    if(arguments.length > 1){
                        if(isPromise(arguments[1])){
                            self.errFunct.push(arguments[1]);
                        }
                    }
                    if(arguments.length == 3){
                        if(isPromise(arguments[2])){
                            self.updFunct.push(arguments[2]);
                        }
                    }
                }
                return self.promise;
            }
        };
    };

    deferClass.prototype.good = function(value){
        this.goodVal = value;
        this.sucFunct.map(function(fnct){
            fnct(value);
        });
    };

    deferClass.prototype.bad = function(value){
        this.badVal = value;
        this.errFunct.map(function(fnct){
            fnct(value);
        });
    };

    deferClass.prototype.update = function(value){
        this.updateVal = value;
        this.updFunct.map(function(fnct){
            fnct(value);
        });
    };

    return{
        defer:function(){
            return new deferClass();
        }
    };
})();