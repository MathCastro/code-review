export default class Exemplo2 {
    // Função que encontra um número
    find = () => {
        const lista = [
            { id: 1, name: "Abacate" },
            { id: 1, name: "Melancia" },
            { id: 1, name: "Melão" },
            { id: 1, name: "Jabuticaba" },
        ];

        return lista.find((item) => item.id === 2);
    }
}