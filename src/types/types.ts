export interface SavedPost {
    id: string;
    text: string;
    date: string;
    labels: { name: string; probability: string; }[];

}


export interface Result {
    text: string;
    labels: { name: string; probability: string; }[];
}