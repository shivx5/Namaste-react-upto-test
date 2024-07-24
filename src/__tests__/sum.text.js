import sum from "../components/sum"

test(" sum function to calculate sum of two numbers",()=>
{
    const result = sum(5,5);
    //Assertion
    expect(result).toBe(10);
})