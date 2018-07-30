export class Lingua {
    linguaId?: number;
    codice?: string;
    descrizione?: string;
    stato?: boolean;
    dirTesto?: string;
    
    constructor( linguaId?: number) { 
        this.linguaId = linguaId;
    }
}