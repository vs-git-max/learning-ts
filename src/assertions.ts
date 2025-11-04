const raw = '{"id":2,"name":"sam chris mboya"}';

type User22 = {
  id: number;
  name: string;
};

function isUser(v: unknown): v is User22 {
  return (
    typeof v === "object" &&
    v !== null &&
    "id" in v &&
    typeof (v as any).id === "number" &&
    "name" in v &&
    typeof (v as any).name === "string"
  );
}

const maybe = JSON.parse(raw) as unknown;

if (isUser(maybe)) {
  console.log(maybe.name);
}
