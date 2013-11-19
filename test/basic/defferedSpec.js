/**
 * Created by SerjNarbut on 17.11.13.
 */
describe("Deferred tests",function(){
    it("should be getting good value",function(){
        var deferred = Deferred.defer();
        deferred.good(10);
        expect(deferred.value).toEqual(10);
    })

    it("should be getting bad value",function(){
        var deferred = Deferred.defer();
        deferred.bad(10);
        expect(deferred.value).toEqual(10);
    })

    it("should be different value", function(){
        var def1 = Deferred.defer();
        var def2 = Deferred.defer();

        def1.good(11);
        def2.good(12);
        expect(def1.value).not.toBe(def2.value);
    })

    it("should have promise",function(){
        var def = Deferred.defer();
        expect(def.promise).toBeDefined();
    })
})