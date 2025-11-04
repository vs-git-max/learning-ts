//email ?:string -> email may be absent, if it is present it will be string
//it is not the same as email : string|undefined

type User = {
  id: number;
  name: string;
  email?: string;
  readonly createdAt: Date;
};

const user1: User = {
  id: 1,
  name: "sam",
  createdAt: new Date(),
};

const user2: User = {
  id: 2,
  name: "John",
  createdAt: new Date(),
  email: "sam",
};

type Count = {
  [k: string]: number;
};

type Count1 = Record<"likes" | "shares" | "random", number>;
const count1: Count = { sam: 34 };
const count2: Count1 = { likes: 67, shares: 12, random: 67 };
