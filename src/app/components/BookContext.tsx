import { createContext } from 'react';
import { Book } from '../types/types';
interface StateParams {
  currentSelected?: Book;
  setCurrent?: (current: Book) => void;
}
export const AppContext = createContext<StateParams>({});