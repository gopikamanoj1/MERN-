let a = [
  { F1: 4, P1: [1, 2, 3, 5, 5] },

  { f1: 5, p1: [5, 6, 54, 64] },
];

// output
// 1111
// 2222
// 3333
// 5555
// 5555
// 55555
// 66666
// 54 54 54 54 54
// 64 64 64 64 64  

for (let item of a) {
  let F1 = item.F1;
  let f1 = item.f1;

  // console.log(P1,F1,"jjj")

  if (item.P1 !== undefined) {
    for (let element of item.P1) {
      for (let i = 1; i <= F1; i++) {
        console.log(element);
      }
    }
  }

  if (item.p1 !== undefined) {
    for (let element of item.p1) {
      for (let i = 1; i <= f1; i++) {
        console.log(element);
      }
    }
  }
}
