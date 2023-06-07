import {convert} from './convert'

describe("ROT13", () => {
  it("returns N when given A", () => {
    expect(convert("A")).toEqual("N");
  });

  it("return A when given N", () => {
    expect(convert("N")).toEqual("A");
  });

  it("return NO when given AB", () => {
    expect(convert("AB")).toEqual("NO");
  });

  it("return AB!! when given NO!!", () => {
    expect(convert("NO!!")).toEqual("AB!!");
  });
});