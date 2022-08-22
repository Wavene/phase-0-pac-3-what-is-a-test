// const { expect,it } = require("chai");
const { name, height, message,add } = require("../index.js");


describe("Should add two numbers",()=>{
  it("Expect result to be 3",()=>{
    let a=1
    let b=2
    let result=add(a,b)
    expect(result).toEqual(3)
  })

  it("Expect result to be 3",()=>{
    let a=2
    let b=2
    let result=add(a,b)
    expect(result).toEqual(4)
  })
})
/*
describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(message).toInclude(name)
      expect(message).toInclude(height)
    })
  })
})
*/
