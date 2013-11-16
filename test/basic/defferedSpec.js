/**
 * Created by SerjNarbut on 17.11.13.
 */
describe("Deffered tests",function(){
    it("should be getting good value",function(){
        var deffered = Deffered.defer();
        deffered.good(10);
        expect(deffered.goodVal).toBe(10);
    })
})