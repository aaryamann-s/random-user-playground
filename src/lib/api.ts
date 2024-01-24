import { Person } from "../types/Person";

export async function getUser(): Promise<Person> {
  const response = await (await fetch("https://randomuser.me/api")).json();
  const users = response.results;
  return users[0];
}
