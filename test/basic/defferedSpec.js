/**
 * Created by SerjNarbut on 17.11.13.
 */
describe("Deffered tests",function(){
    it("should be getting good value",function(){
        var deffered = Deffered.defer();
        deffered.good(10);
        expect(deffered.goodVal).toEqual(10);
    })

    it("should be getting bad value",function(){
        var deffered = Deffered.defer();
        deffered.bad(10);
        expect(deffered.badVal).toEqual(10);
    })
})