function printValue(id: string | number) {
  return typeof id === "string" ? id.toLowerCase() : id.toFixed(3);
}

//object union
type Object1 = {
  role: "Admin";
  permission: string[];
};

type Customer = {
  role: "Customer";
  loyaltyPoints: number;
};

function userSelect(person: Object1 | Customer): string {
  let message: string;
  "permission" in person
    ? (message = "Admin user")
    : (message = "Customer user");

  return message;
}

const arrayOfUnions: (string | number)[] = [1, "a", 3, "d"];
