/**
 * Created by SerjNarbut on 17.11.13.
 */

var Deffered = (function(){
    return{
        deffered:{
            suc: null,
            err:null,
            good: function(){
                if( suc !== undefined){
                    suc();
                }
            },

            bad:function(){
                if( err !== undefined){
                    err();
                }
            },

            promise:{
                then:function(success,error){
                    suc = success;
                    err = error;
                }
            }
        }
    };
})();