export interface IFetchCatFact {
  current_page: number;
  data: ICatFact[];
}

export interface ICatFact {
  fact: string;
  length: number;
}
