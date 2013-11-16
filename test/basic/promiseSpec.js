describe("Promise spec", function(){
    it("should have then method", function(){
        var def = Deferred.defer();
        expect(def.promise.then).toBeDefined();
    })

    it("should return then promise", function(){
        var def = Deferred.defer();
        var promise = def.promise;
        var promise2 = promise.then(null,null,null);
        expect(promise).toEqual(promise2);
    })
})