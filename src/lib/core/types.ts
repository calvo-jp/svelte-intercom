export type ApiBase =
  | 'https://api-iam.intercom.io'
  | 'https://api-iam.eu.intercom.io'
  | 'https://api-iam.au.intercom.io'
  | (string & {});

export type Alignment = 'left' | 'right';

export interface BaseOptions {
  appId: string;
  apiBase?: ApiBase;
  phone?: string;
  unsubscribedFromEmails?: boolean;
  languageOverride?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmMedium?: string;
  utmSource?: string;
  utmTerm?: string;
  avatar?: any;
  userHash?: string;
  company?: any;
  companies?: [any];
  pageTitle?: string;
  customLauncherSelector?: string;
  alignment?: Alignment;
  verticalPadding?: number;
  horizontalPadding?: number;
  hideDefaultLauncher?: boolean;
  sessionDuration?: number;
  actionColor?: string;
  backgroundColor?: string;
  installationType?: string;
}

export type Region = 'us' | 'eu' | 'ap';

export interface InitOptions extends BaseOptions {
  region?: Region;
  [key: string]: any;
}

export interface BootOptions extends BaseOptions {}

export interface User {
  userId?: string;
  name?: string;
  email?: string;
  phone?: string;
  createdAt?: number;
  [key: string]: any;
}

export type Space =
  | 'home'
  | 'messages'
  | 'help'
  | 'news'
  | 'tasks'
  | 'tickets'
  | (string & {});
