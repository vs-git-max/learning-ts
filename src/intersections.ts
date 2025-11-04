type Int1 = { id: string | number };
type Int2 = { name?: string };

type Entity = Int1 & Int2;

const person: Entity = {
  id: 2,
};
