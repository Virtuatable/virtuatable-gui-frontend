export default interface IToken {
  id: string;
  name: string;
  file_extension: string;
}

export interface ITokenPosition {
  x: number;
  y: number;
  id: string;
  token_id: string;
  selected: boolean;
  dragged: boolean;
};