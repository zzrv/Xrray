
let a = {
  w: "qwe1",
  q: (a: number) => a+1,
  e: "asd"
}

let b = {
  w: "qwe",
  q: (a: number) => a+2,
  r: "asd"
}

let e = [a.q, b.q]


console.log(e.call(2))


let x = [2,3]

x.replace((e) => {return {a: e}})

console.log(x)


