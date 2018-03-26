describe("triangle", function()
{
    it("should be isosceles", function()
    {

        expect(getTriangleType(3,4,4)).toBe("isosceles");

    });
});


describe("triangle", function()
{
    it("should be equilateral", function()
    {

        expect(getTriangleType(4,4,4)).toBe("equilateral");

    });
});

describe("triangle", function()
{
    it("should be scalene", function()
    {

        expect(getTriangleType(4,1,3)).toBe("scalene");

    });
});





