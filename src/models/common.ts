import { AxiosRequestConfig, AxiosResponse } from "axios";
import { UserState } from "@models/business";

export type Nullable<T = void> = T | null | undefined;

export type SafeAny = any;

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type PaletteMode = 'light' | 'dark';

export type Locale = 'faIr' | 'enUs';

export interface RequestConfig {
  pathTemplate?: string | RegExp,
  method: RequestMethod;
  // null: default message, false: don't show message, string: custom message
  successMessage?: string | null | false | ((request: AxiosRequestConfig<any>, response?: AxiosResponse) => string | null | false);
  failureMessage?: string | null | false | ((request: AxiosRequestConfig<any>, response?: AxiosResponse) => string | null | false);
  loading?: boolean | ((request: AxiosRequestConfig<any>) => boolean);
  isCustomApi?: boolean;
  loadingOnlyOnce?: boolean;
  timeout?: number | 'none' | ((request: AxiosRequestConfig<any>) => number | 'none');
}

export type Events = {
  showToast: any;
  loading: boolean;
}

export interface ConfigState {
  paletteMode: PaletteMode;
  rtl: boolean;
  locale: Locale;
  langStorageKey: string;
  apiUrl: string;
  requestTimeout: number;
}

export interface RootState {
  user: Nullable<UserState>;
  config: ConfigState;
}
