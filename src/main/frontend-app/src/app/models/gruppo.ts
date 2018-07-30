import { Ruolo } from "./ruolo";

export class Gruppo {
    gruppoId?: number;
    nome?: string;
    descrizione?: string;
  
    ruoli: Ruolo[];
}