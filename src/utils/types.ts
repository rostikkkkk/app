export interface Product {
  asin: string;
  name: string;
  img: string;
  price: number;
  link: string;
  bsr_category: string;
}
export interface Language {
  code: string;
  label: string;
}

export interface LangSwitcherProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

export type FormValues = {
  title: string;
  category: string;
};
