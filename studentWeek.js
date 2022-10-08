function checkAttendance(dayOfWeek) {
  const classroomAttendance = [
    {
      name: "Marnie",
      attendance: {
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
      },
    },
    {
      name: "Lena",
      attendance: {
        Monday: false,
        Tuesday: false,
        Wednesday: true,
        Thursday: false,
        Friday: true,
      },
    },
    {
      name: "Becky",
      attendance: {
        Monday: true,
        Tuesday: true,
        Wednesday: false,
        Thursday: true,
        Friday: false,
      },
    },
    {
      name: "Jessa",
      attendance: {
        Monday: false,
        Tuesday: false,
        Wednesday: false,
        Thursday: false,
        Friday: true,
      },
    },
  ];
  // Write your code here
  let presentStudents = [];
  for (let keys of classroomAttendance) {
    if (keys.attendance[dayOfWeek]) {
      presentStudents.push(keys.name);
    }
  }
  return presentStudents;
}
console.log(checkAttendance("Monday"));
console.log(checkAttendance("Wednesday"));
console.log(checkAttendance("Friday"));
console.log(checkAttendance("Tuesday"));

console.log(checkAttendance("Thursday"));
