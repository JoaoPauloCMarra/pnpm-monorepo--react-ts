interface Window {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
}

declare type RestMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

declare type UserInfo = {
  username: string;
  email: string;
  language: string;
};

declare type Sizes = 'sm' | 'md' | 'lg';
