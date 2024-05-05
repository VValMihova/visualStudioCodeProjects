function inventory(input) {
  const heroes = [];
  input.forEach((line) => {
    const [name, level, ...items] = line.split(" / ");
    heroes.push({
      name,
      level,
      items,
    });
  });
  heroes
    .sort((a, b) => a.level - b.level)
    .forEach((hero) => {
      console.log(
        `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(
          ", "
        )}`
      );
    });
}

inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);

inventory([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
