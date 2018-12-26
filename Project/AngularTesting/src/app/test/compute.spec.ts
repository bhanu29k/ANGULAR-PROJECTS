import {findEvenOdd} from './compute';
describe("findEvenOdd", ()=>{
    it("should return 0 if input is odd",()=>{
    
    const result=findEvenOdd(-101);
    expect(result).toBe(0);

});
it("should return -1 if input is 0",()=>{
    
    const result=findEvenOdd(0);
    expect(result).toBe(-1);

});
it("should return 1 if input is even",()=>{
    
    const result=findEvenOdd(12);
    expect(result).toBe(1);

});
    });

