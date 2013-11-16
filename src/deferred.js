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

        var self = this;
        this.promise = {
            then:function(success,error,update){
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