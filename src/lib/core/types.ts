export type ApiBase =
  | 'https://api-iam.intercom.io'
  | 'https://api-iam.eu.intercom.io'
  | 'https://api-iam.au.intercom.io'
  | (string & {});

export type Region = 'us' | 'eu' | 'ap';

export type Alignment = 'left' | 'right';

export interface Avatar {
  type: 'avatar' | (string & {});
  imageUrl: string;
}

export interface Company {
  id: string;
  name?: string;
  website?: string;
  industry?: string;
  createdAt?: number;
  plan?: string;
  userCount?: number;
  size?: number;
  monthlySpend?: number;
}

export interface BaseOptions {
  unsubscribedFromEmails?: boolean;
  languageOverride?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmMedium?: string;
  utmSource?: string;
  utmTerm?: string;
  avatar?: Avatar;
  userHash?: string;
  company?: Company;
  companies?: Company[];
  pageTitle?: string;

  /* Messenger Options */

  customLauncherSelector?: string;
  alignment?: Alignment;
  verticalPadding?: number;
  horizontalPadding?: number;
  hideDefaultLauncher?: boolean;
  sessionDuration?: number;
  actionColor?: string;
  backgroundColor?: string;

  /* User Options */

  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: number;
}

export interface InitOptions extends BaseOptions {
  appId: string;
  apiBase?: ApiBase;
  region?: Region;
  [x: string]: any;
}

export interface BootOptions extends BaseOptions {
  appId: string;
  apiBase?: ApiBase;
  [x: string]: any;
}

export interface UpdateOptions extends BaseOptions {
  [x: string]: any;
}

export type Space =
  | 'home'
  | 'messages'
  | 'help'
  | 'news'
  | 'tasks'
  | 'tickets'
  | (string & {});
