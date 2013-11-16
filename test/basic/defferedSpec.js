/**
 * Created by SerjNarbut on 17.11.13.
 */
describe("Deferred tests",function(){
    it("should be getting good value",function(){
        var deferred = Deferred.defer();
        deferred.good(10);
        expect(deferred.goodVal).toEqual(10);
    })

    it("should be getting bad value",function(){
        var deferred = Deferred.defer();
        deferred.bad(10);
        expect(deferred.badVal).toEqual(10);
    })

    it("should be different value", function(){
        var def1 = Deferred.defer();
        var def2 = Deferred.defer();

        def1.good(11);
        def2.good(12);
        expect(def1.goodVal).not.toBe(def2.goodVal);
    })

    it("should have update method",function(){
        var def = Deferred.defer();
        expect(def.update).toBeDefined();
    })
})