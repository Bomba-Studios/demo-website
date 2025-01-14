import { createSignal } from "solid-js";
const SearchBar = (props) => {
  const [searchInput, setSearchInput] = createSignal("");
  const filteredHeroes = () =>
    props.heroes.filter((heroe) =>
      heroe.name.toLowerCase().includes(searchInput().toLowerCase())
    );

  return (
    <section class="p-4">
      <input
        type="text"
        class="w-full px-4 py-2 mb-4 border border-gray-700 p-4 rounded-full mx-auto"
        placeholder="Buscar héroe"
        value={searchInput()}
        onInput={(e) => setSearchInput(e.target.value)}
      />
      <div class="grid grid-cols-3 gap-4">
        {filteredHeroes().map((heroe) => (
          <a href={`/${heroe.id}`} class="bg-white rounded-lg shadow-md p-4">
            <img
              src={heroe.images.md}
              alt={heroe.name}
              class="w-full h-auto mb-4"
            />
            <h2 class="text-lg font-semibold mb-2">{heroe.name}</h2>
            <p class="text-gray-600">{heroe.appearance.gender}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SearchBar;
