export interface HeroSlide {
  id: number;
  image: {
    desktop: string;
    mobile: string;
  };
  title: string;
  subtitle: string;
  descricao: string;
}

export interface Service {
  id: number;
  name: string;
  descricao: string;
  image: string;
  features: string[];
}

export interface Product {
  id: number;
  name: string;
  descricao: string;
  price?: string;
  image: string;
  categoria: string;
}

export interface Video {
  id: number;
  title: string;
  url: string;
  descricao: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
  followers: string;
}

export interface Contact {
  whatsapp: {
    number: string;
    message: string;
  };
  phone: {
    number: string;
    display: string;
  };
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    zipcode: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface MenuItem {
  id: string;
  label: string;
  sectionId: string;
}

export interface ContentData {
  hero: {
    slides: HeroSlide[];
  };
  services: Service[];
  decoracoes: Product[];
  videos: Video[];
  socials: Social[];
  contacts: Contact;
}
