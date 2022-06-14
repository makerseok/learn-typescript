// enum PhoneType {
//   home,
//   office,
//   studio,
// }
const PHONETYPES = {
  home: 'home',
  office: 'office',
  studio: 'studio',
} as const;

type PhoneType = typeof PHONETYPES[keyof typeof PHONETYPES];

interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export { Contact, PhoneType };
