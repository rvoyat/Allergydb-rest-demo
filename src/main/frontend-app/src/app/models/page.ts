export interface Page<T> {
    totalElements:number;
    content:[T];
    size: number;
}