let willrain = true;

if (willrain) {
  console.log("take umbrella");
} else {
  console.log("no umbrella");
}

let students = [
  {
    name: "ram",
    hasPaidStatus: false,
  },
  {
    name: "hari",
    hasPaidStatus: true,
  },
  {
    name: "sita",
    hasPaidStatus: false,
  },
];

function exam(index) {
  let students = [
    {
      name: "ram",
      hasPaidStatus: false,
    },
    {
      name: "hari",
      hasPaidStatus: true,
    },
    {
      name: "sita",
      hasPaidStatus: false,
    },
  ];

  if (students[index].hasPaidStatus == true) {
    console.log(`${students[index].name} can give exam`);
  } else {
    console.log(`${students[index].name} cannot give exam`);
  }
}

exam(0);
exam(1);
exam(2);

function examscholar(index) {
  let users = [
    {
      name: "ram",
      hasPaidStatus: false,
      scholar: true,
    },
    {
      name: "hari",
      hasPaidStatus: true,
      scholar: false,
    },
    {
      name: "sita",
      hasPaidStatus: false,
      scholar: false,
    },
  ];

  if (users[index].scholar == false) {
    if (users[index].hasPaidStatus == true) {
      console.log(`${students[index].name} can give exam`);
    } else if (users[index].hasPaidStatus == false) {
      console.log(`${students[index].name} cannot give exam`);
    }
  } else if (users[index].scholar == true) {
    console.log(`${students[index].name} can give exam`);
  }
}

examscholar(0);
examscholar(1);
examscholar(2);

function examsattendance(index) {
  let users = [
    {
      name: "ram",
      hasPaidStatus: false,
      scholar: true,
      attendance: true,
    },
    {
      name: "hari",
      hasPaidStatus: true,
      scholar: false,
      attendance: false,
    },
    {
      name: "sita",
      hasPaidStatus: false,
      scholar: false,
      attendance: true,
    },
  ];

  if (users[index].attendance == true) {
    if (users[index].scholar == true || users[index].hasPaidStatus == true) {
      console.log(`${students[index].name} can give exam`);
    } else {
      console.log(`${students[index].name} cannot give exam`);
    }
  } else {
    console.log(`${students[index].name} cannot give exam`);
  }
}
examsattendance(0);
examsattendance(1);
examsattendance(2);
