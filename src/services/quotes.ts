import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoritQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoritQuotes.push(quote);
        console.log(this.favoritQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoritQuotes.findIndex((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
        this.favoritQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoritQuotes.slice();
    }
}