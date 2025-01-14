export async function getHeroes() {
    const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
    const data = await response.json();
    return data;
}

export async function getHeroById(id) {
    const response = await fetch(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
    return response.json();
}