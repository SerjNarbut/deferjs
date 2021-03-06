/**
 * Created by SerjNarbut on 17.11.13.
 */
describe("Async promise spec",function(){
    it("should be work async good method", function(){
        var deferred = Deferred.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(function(value){
            resolvedValue = value;
        });

       runs(function(){
           flag = false;
           setTimeout(function(){
               deferred.good(25);
               flag = true;
           },1000);
       })

        waitsFor(function(){
            return flag;
        },"Async call stopped",1000);

        runs(function(){
            expect(resolvedValue).toBe(25);
        })
    })


    it("should be work async bad method", function(){
        var deferred = Deferred.defer();
        var promise = deferred.promise;
        var resolvedValue;
        promise.then(null,function(value){
            resolvedValue = value;
        });

        runs(function(){
            flag = false;
            setTimeout(function(){
                deferred.bad(25);
                flag = true;
            },1000);
        })

        waitsFor(function(){
            return flag;
        },"Async call stopped",1000);

        runs(function(){
            expect(resolvedValue).toBe(25);
        })
    })
})