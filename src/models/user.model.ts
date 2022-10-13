export interface IUser {
  id?: string;
  orgName?: string;
  userName?: string;
  email?: string;
  phoneNumber?: string;
  createdAt?: string;
  lastActiveDate?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  gender?: string;
  bvn?: string;
  address?: string;
  currency?: string;
  profile?: IProfile;
  accountBalance?: string;
  accountNumber?: string;
  socials?: ISocials;
  education: IEducation;
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome: [];
  loanRepayment?: string;
  guarantor: IGuarator;
}

export interface IProfile {
  address?: string;
  avatar?: string;
  bvn?: string;
  currency?: string;
  firstName?: string;
  gender?: string;
  lastName?: string;
  phoneNumber?: string;
}

export interface IGuarator {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  gender?: string;
  address?: string;
}

export interface ISocials {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface IEducation {
  level?: string;
  employmentStatus?: string;
  sector?: string;
  duration?: string;
  officeEmail?: string;
  monthlyIncome?: string[];
  loanRepayment?: string;
}
