EnvJasmine.load(EnvJasmine.jsDir + "arithmetic.js");
describe("do arithmetic that", function () {
    it("returns the sum of two integers", function() {
        expect(do_add(1,2)).toEqual(3);
    });
    it("returns the product of two integers", function() {
        expect(do_mul(1,2)).toEqual(2);
    });
});
