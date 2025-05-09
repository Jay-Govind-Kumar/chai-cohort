const person = {
    x: 10,
    firstName: "Jay",
    lastName: "Govind",
    hobbies: ["coding", "sleeping"],
    isMarried: true,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    address: {
      street: 1,
      hno: 1,
      countryCode: "IN",
    },
  };
  
  console.log(person.address.street);
  