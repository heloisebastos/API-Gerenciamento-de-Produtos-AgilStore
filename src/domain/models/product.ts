export class Product {
    constructor(
        public id: string,
        public name: string,
        public category: string,
        public quantity: number,
        public price: number
    ) { }

    validate(): void {
        if (!this.name || typeof this.name !== 'string' || this.name.trim().length === 0) {
            throw new Error('O nome do produto é inválido.');
        }

        if (!this.category || typeof this.category !== 'string' || this.category.trim().length === 0) {
            throw new Error('A categoria do produto é inválida.');
        }

        if (this.quantity == null || !Number.isInteger(this.quantity) || this.quantity < 0) {
            throw new Error('Erro ao inserir quantidade de produto');
        }

        if (this.price == null || typeof this.price !== 'number' || this.price < 0) {
            throw new Error('O preço do produto é inválido.');
        }


    }
}
