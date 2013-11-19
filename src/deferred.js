/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deferred = (function(){


    var isPromise = function(value){
        return value && typeof  value === 'function';
    }

    function deferClass(){
        this.value = null;
        this.sucFunct = [];
        this.errFunct = [];

        this.good = function(value){
            if(this.sucFunct){
                this.value = value;
                this.sucFunct.map(function(fnct){
                    fnct(value);
                });

                this.sucFunct = undefined;
            }
        }

        this.bad = function(value){
            if(this.errFunct){
                this.value = value;
                this.errFunct.map(function(fnct){
                    fnct(value);
                });
            }
            this.errFunct = undefined;
        }

        var self = this;
        this.promise = {
            then:function(callback, errBack){

                if(isPromise(callback)){
                    if(self.sucFunct){
                        self.sucFunct.push(callback);
                    }else{
                        callback(self.value);
                    }
                }
                if(self.errFunct){
                    if(isPromise(errBack)){
                        self.errFunct.push(errBack);
                    }
                }
                return self.promise;
            }
        };
    };

    return{
        defer:function(){
            return new deferClass();
        }
    };
})();