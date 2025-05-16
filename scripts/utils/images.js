function makeDataValueFit(value) {
  return value.replace(/\s+/g, "").toLowerCase();
}

export function getCardImgUrl(card) {
  if (card.type === "major") {
    // major arcana
    return `assets/cards/major/${makeDataValueFit(card.name)}.jpeg`;
  } else {
    // minor arcana
    return `assets/cards/minor/${makeDataValueFit(card.suit)}/${makeDataValueFit(card.name)}.jpeg`;
  }
}
