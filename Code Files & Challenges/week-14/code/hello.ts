let x: number = 10;
// x = "hello world";

// Error: Type 'string' is not assignable to type 'number'

let y: string = "hello world";
// y = 10;

// Error: Type 'number' is not assignable to type 'string'

let a: number | null = null; // a can be a number or null
a = 10; // valid

function add(x: number, y: number) {
  return x + y;
}

let result = add(10, 20); // result is of type number
result.toFixed(2); // valid

// let result2 = add("10", "20");
// // Error: Argument of type 'string' is not assignable to parameter of type 'number'

function createUser(user: { firstname: string; lastname?: string }) {
  //   const trimmedLastnName = user.lastname.trim();
  // Error: Property 'trim' does not exist on type 'undefined' because lastname is optional

  /* 1st way to access optional property */
  //   if (user.lastname) {
  //     const trimmedLastnName = user.lastname.trim();
  //   }

  /* 2nd way to access optional property */
  //   const trimmedLastnName = user.lastname?.trim();

  /* 3rd way to access optional property */
  if (!user.lastname) {
    return;
  }
  const trimmedLastnName = user.lastname.trim();
}

createUser({ firstname: "John" });
createUser({ firstname: "John", lastname: "Doe" });

/* interface- a way to define a custom type or blueprint */
interface Student {
  id: number;
  firstname: string;
  lastname?: string;
  email: string;
  profileImage?: string;
}

function createStudent(student: Student) {
  student.profileImage?.trim(); // valid
}

createStudent({
  id: 1,
  firstname: "",
  email: "",
});
