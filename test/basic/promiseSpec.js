describe("Promise spec", function(){
    it("should have then method", function(){
        var def = Deferred.defer();
        expect(def.promise.then).toBeDefined();
    })

    it("should return then promise", function(){
        var def = Deferred.defer();
        var promise = def.promise;
        var promise2 = promise.then();
        expect(promise).toEqual(promise2);
    })

    it("should one success and two error function", function(){
        var def = Deferred.defer();
        var promise = def.promise;

        promise.then(function(){   },function(){  }).then(null,function(){});

        expect(def.sucFunct.length).toBe(1);
        expect(def.errFunct.length).toBe(2);
    })

    it("should simulate promis",function(){
        var def = Deferred.defer();
        var resolvedValue;

        var promise = def.promise;
        promise.then(function(value){
            resolvedValue = value;
        });
        expect(resolvedValue).toBeUndefined();
        def.good(10);
        expect(resolvedValue).toBe(10);
    })
})