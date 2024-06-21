let a = [
  {
    id: 12345,
    name: "John Doe",
    subjects: [
      { subject: "math", marks: 85 },
      { subject: "science", marks: 90 },
      { subject: "history", marks: 78 },
      { subject: "english", marks: 92 },
    ],
  },
  {
    id: 67890,
    name: "Jane Smith",
    subjects: [
      { subject: "math", marks: 92 },
      { subject: "science", marks: 88 },
      { subject: "history", marks: 76 },
      { subject: "english", marks: 95 },
    ],
  },
  {
    id: 13579,
    name: "Alice Johnson",
    subjects: [
      { subject: "math", marks: 78 },
      { subject: "science", marks: 94 },
      { subject: "history", marks: 82 },
      { subject: "english", marks: 88 },
    ],
  },
];

function total(a) {
  let mark = [];
  for (let item of a) {
    let sub = item.subjects;
    let name = item.name;
    let sum = 0;
    for (let i = 0; i < sub.length; i++) {
      sum += sub[i].marks;
    }
    mark.push({ name: name, total: sum });
  }
  return mark;
}
console.log(total(a));
