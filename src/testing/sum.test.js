import { sumFun } from "./sum"

test("test sum function", () => {
    expect(sumFun(10, 10)).toBe(20)
})

test("test sum function", () => {
    let a =10
    let b=20
    let output = 30
    expect(sumFun(a, b)).toBe(output) 
})
test("test sum function", () => {
    let a =20
    let b=20
    let output = 40
    expect(sumFun(a, b)).toBe(output) 
})

// // -------------------------------------

test("test sum function", () => {
    let a =20
    let b=20
    let output = 40

    expect(sumFun(a, b)).toBe(output) 

    let x=4;
    let y=5
    let op = 9

    expect(sumFun(x, y)).toBe(op) 
})