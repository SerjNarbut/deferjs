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
})