// fetchApi.ts
import fetch from "node-fetch";

interface RandomUser {
  results: Array<{ name: { first: string; last: string } }>;
}

async function getRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data: RandomUser = await response.json();
    console.log("Random user:", data.results[0].name.first, data.results[0].name.last);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

getRandomUser();
