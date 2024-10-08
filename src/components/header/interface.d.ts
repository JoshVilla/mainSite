import { Types } from "mongoose";

interface IAccounts {
  facebook: string;
  twitter: string;
  tiktok: string;
}

export interface ISiteInfo {
  _id: Types.ObjectId | null;
  title: string;
  vision: string;
  misson: string;
  accounts: IAccounts;
  address: string;
}
