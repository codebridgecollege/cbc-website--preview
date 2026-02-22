export interface ContactEmail {
  address: string;
  label: string;
}

export interface ContactPhone {
  number: string;
  display: string;
  label: string;
}

export interface Contact {
  emails: ContactEmail[];
  phones: ContactPhone[];
  linkedin: string;
  instagram: string;
}
