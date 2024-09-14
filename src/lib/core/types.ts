export type Alignment = 'left' | 'right';

interface MessengerOptions {
  /**
   * The CSS selector of an element to trigger `show` in order to activate the messenger
   */
  customLauncherSelector?: string;
  /**
   * Dictate the alignment of the default launcher icon to be on the left/right
   * @default 'right'
   */
  alignment?: Alignment;
  /**
   * Move the default launcher icon vertically
   * @default 20
   */
  verticalPadding?: number;
  /**
   * Move the default launcher icon horizontally
   * @default 20
   */
  horizontalPadding?: number;
  /**
   * Hide the default launcher icon.
   */
  hideDefaultLauncher?: boolean;
  /**
   * Time in milliseconds for the Intercom session to be considered active.
   * A value of `5 * 60 * 1000` would set the expiry time to be 5 minutes
   */
  sessionDuration?: number;
  /**
   * Used in button links and more to highlight and emphasise
   */
  actionColor?: string;
  /**
   * Used behind your team profile and other attributes
   */
  backgroundColor?: string;
}

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

export interface DataOptions {
  /**
   * The user ID address of the currently logged in user
   */
  userId?: string;
  /**
   * Name of the current user/lead
   */
  name?: string;
  /**
   * The email address of the currently logged in user
   */
  email?: string;
  /**
   * Phone number of the current user/lead
   */
  phone?: string;
  /**
   * The Unix timestamp (in seconds) when the user signed up to your app
   */
  createdAt?: number;
  /**
   * This value can't actually be set by the Javascript API.
   * It automatically uses the time of the last request but is a this is a reserved attribute
   */
  lastRequestAt?: never;
  /**
   * Sets the unsubscribe status
   */
  unsubscribedFromEmails?: boolean;
  /**
   * Set the messenger language programmatically instead of relying on browser language settings
   */
  languageOverride?: string;
  /**
   * [UTM Campaign value](https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters)
   */
  utmCampaign?: string;
  /**
   * [UTM Content value](https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters)
   */
  utmContent?: string;
  /**
   * [UTM Medium value](https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters)
   */
  utmMedium?: string;
  /**
   * [UTM Source value](https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters)
   */
  utmSource?: string;
  /**
   * [UTM Term value](https://www.intercom.com/help/en/articles/908965-track-conversions-and-clicks-with-utm-parameters)
   */
  utmTerm?: string;
  /**
   * Set the avatar/profile image associated to the current record
   */
  avatar?: Avatar;
  /**
   * Used for [identity verification](https://www.intercom.com/help/en/articles/183-set-up-identity-verification-for-web-and-mobile)
   */
  userHash?: string;
  /**
   * Current user's [company](https://www.intercom.com/help/en/articles/186-group-your-users-by-company)
   */
  company?: Company;
  /**
   * An array of [companies](https://www.intercom.com/help/en/articles/186-group-your-users-by-company) the user is associated to
   */
  companies?: Company[];
  /**
   * Used for keeping track of user page views. Default value is the document title property.
   */
  pageTitle?: string;
}

export interface BaseOptions extends MessengerOptions, DataOptions {}

export type ApiBase =
  | 'https://api-iam.intercom.io'
  | 'https://api-iam.eu.intercom.io'
  | 'https://api-iam.au.intercom.io'
  | (string & {});

export type Region = 'us' | 'eu' | 'ap';

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
