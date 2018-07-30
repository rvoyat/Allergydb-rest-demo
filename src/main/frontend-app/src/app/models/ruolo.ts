export class Ruolo {
    ruoloId?: number;
    nome?: string;
    descrizione?: string;
    ruoloJee?: string;
    
    constructor( ruoloId?: number) { 
        this.ruoloId = ruoloId;
    }
}