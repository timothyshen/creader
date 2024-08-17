export type LicenseTerms = {
  commercialAttribution: boolean;
  commercialRevenueCelling: number;
  commercialRevenueShare: number;
  commercialUse: boolean;
  commercializerCheck: string;
  currency: string;
  derivativesAllowed: boolean;
  derivativesApproval: boolean;
  derivativesAttribution: boolean;
  derivativesReciprocal: boolean;
  derivativesRevenueCelling: number;
  expiration: string;
  uRI: string;
};


export type TermMapping = {
  [key: string]: {
    [key: string]: number | LicenseTerms;
  };
};

