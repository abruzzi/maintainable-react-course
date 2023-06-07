import {dict, separator, offset} from "./constants";

const getIndex = (index: number, offset: number) =>
  (index + offset) % dict. length;
const getLetterWithOffset = (letter: string) => {
  const index = dict.indexOf(letter);
  return dict[getIndex(index, offset)];
}

const transform = (letter: string) =>
  dict.includes(letter) ? getLetterWithOffset(letter) : letter

export const convert = (str: string) =>
  str.split(separator)
    .map(transform).join(separator);

interface User {
  name: string;
  address: string;
  projects: Project[];
}

interface Project {
  name: string;
}

const user: User = {
  name: 'Juntao Qiu',
  address: 'Xian, Shaanxi, China',
  projects: [
    { name: 'ThoughtWorks University' },
    { name: 'ThoughtWorks Core Business Beach'}
  ]
};