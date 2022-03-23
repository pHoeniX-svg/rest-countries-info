export type FormEventType = React.FormEvent<HTMLFormElement>;

export type InputEventType = React.ChangeEvent<HTMLInputElement>;

export interface ICountry {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[]; // border countries
  callingCodes: string[];
  capital: string; // capital name
  cioc: string;
  currencies: Currency[];
  demonym: string;
  flag: string;
  flags: Flags;
  gini: number;
  independent: boolean;
  languages: Language[]; // languages spoken
  latlng: number[];
  name: string; // country name
  nativeName: string; // native country name
  numericCode: string;
  population: number; // population
  region: string; // region
  regionalBlocs: RegionalBloc[];
  subregion: string; // subregion
  timezones: string[];
  topLevelDomain: string[]; // top level domain
  translations: Translations;
}

interface Currency {
  code: string;
  name: string; // currency name
  symbol: string;
}

interface Flags {
  png: string;
  svg: string; // svg flag
}

interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

interface RegionalBloc {
  acronym: string;
  name: string;
}

interface Translations {
  br: string;
  de: string;
  es: string;
  fa: string;
  fr: string;
  hr: string;
  hu: string;
  it: string;
  ja: string;
  nl: string;
  pt: string;
}
