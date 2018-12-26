import { getCurrencies } from "./getCurrencies";

describe("getCurrencies", () => {
  it("Should return the currenies", () => {
    const result = getCurrencies();
    var arr=[
      "USD", "KSH", "EUR"
    ];
    let i:number;
    for(i=0;i<arr.length;i++)
    {
      expect(result).toContain(arr[i]);  
    }
    
  });
});
