var x = 10;
// x = "hello world";
// Error: Type 'string' is not assignable to type 'number'
var y = "hello world";
// y = 10;
// Error: Type 'number' is not assignable to type 'string'
var a = null; // a can be a number or null
a = 10; // valid
function add(x, y) {
    return x + y;
}
var result = add(10, 20); // result is of type number
result.toFixed(2); // valid
// let result2 = add("10", "20");
// // Error: Argument of type 'string' is not assignable to parameter of type 'number'
function createUser(user) {
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
    var trimmedLastnName = user.lastname.trim();
}
createUser({ firstname: "John" });
createUser({ firstname: "John", lastname: "Doe" });
function createStudent(student) {
    var _a;
    (_a = student.profileImage) === null || _a === void 0 ? void 0 : _a.trim(); // valid
}
createStudent({
    id: 1,
    firstname: "",
    email: "",
});
