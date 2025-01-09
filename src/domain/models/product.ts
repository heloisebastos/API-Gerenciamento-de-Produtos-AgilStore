export class Product {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public quantity: number,
        public price: number
    ) { }

    validate(): void {
        // Validação para nome
        if (!this.name || typeof this.name !== 'string' || this.name.trim().length === 0) {
            throw new Error('O nome do produto é inválido.');
        }

        // Validação para categoria
        if (!this.category || typeof this.category !== 'string' || this.category.trim().length === 0) {
            throw new Error('A categoria do produto é inválida.');
        }

        // Validação para quantidade
        if (this.quantity == null || !Number.isInteger(this.quantity) || this.quantity < 0) {
            throw new Error('Erro ao inserir quantidade de produto');
        }

        // Validação para preço
        if (this.price == null || typeof this.price !== 'number' || this.price < 0) {
            throw new Error('O preço do produto é inválido.');
        }


        // if (!this.name || !this.category || this.quantity < 0 || this.price < 0) {
        //     throw new Error('Dados inválidos para o produto.');
        // }
    }
}
