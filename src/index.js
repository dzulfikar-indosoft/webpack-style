const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4,
};

const elventGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
}

console.log(elvenShieldRecipe);
console.log(elventGauntletsRecipe)