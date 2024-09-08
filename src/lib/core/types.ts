export interface BaseOptions {
  appId: string;
  apiBase?: string;
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
  alignment?: string;
  verticalPadding?: number;
  horizontalPadding?: number;
  hideDefaultLauncher?: boolean;
  sessionDuration?: number;
  actionColor?: string;
  backgroundColor?: string;
  installationType?: string;
}

export interface InitOptions extends BaseOptions {
  region?: Region;
  [key: string]: any;
}

export interface BootOptions extends BaseOptions {}

export interface User {
  name?: string;
  email?: string;
  userId?: string;
  createdAt?: number;
  [key: string]: any;
}

export type Region = 'us' | 'eu' | 'ap';

export type Space =
  | 'home'
  | 'messages'
  | 'help'
  | 'news'
  | 'tasks'
  | 'tickets'
  | (string & {});
