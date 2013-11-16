/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deferred = (function(){

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
                    if(arguments[0] !== undefined && typeof arguments[0] === 'function'){
                        self.sucFunct.push(arguments[0]);
                    }
                    if(arguments.length > 1){
                        if(arguments[1] !== undefined && typeof arguments[1] === 'function'){
                            self.errFunct.push(arguments[1]);
                        }
                    }
                    if(arguments.length == 3){
                        if(arguments[2] !== undefined && typeof arguments[2] === 'function'){
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
    };

    deferClass.prototype.bad = function(value){
        this.badVal = value;
    };

    deferClass.prototype.update = function(value){
        this.updateVal = value;
    };

    return{
        defer:function(){
            return new deferClass();
        }
    };
})();