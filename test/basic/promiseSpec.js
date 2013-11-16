describe("Promise spec", function(){
    it("should have then method", function(){
        var def = Deferred.defer();
        expect(def.promise.then).toBeDefined();
    })
})