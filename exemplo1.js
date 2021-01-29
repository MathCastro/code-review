export default class Exemplo1 {
  wrongFindFruit = (fruit) => {
    const lista = [
      { id: 1, name: "Abacate" },
      { id: 1, name: "Melancia" },
      { id: 1, name: "Melão" },
      { id: 1, name: "Jabuticaba" },
    ];
    let desiredFruit;

    lista.forEach((item) => {
        if (item.name === fruit) {
            desiredFruit = item;
        }
    });

    return desiredFruit;
  }
}
