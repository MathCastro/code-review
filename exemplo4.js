export default class Exemplo2 {
    findNumberInAList = (lista, number) => {
        return lista.find((item) => item.id === number);
    }
}