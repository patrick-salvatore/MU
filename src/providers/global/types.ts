export type TypeClass = 'success' | 'error' | 'info' | null;

export type GlobalNotificationType = {
  message: string | null;
  type: TypeClass;
};

export type GlobalNotificationStateType = {
  messages: GlobalNotificationType[];
};

export type UiSettingsStateType = {
  isMobile: boolean;
};
// export type SetContextState<T> = <K extends keyof T>(
//   path: K,
//   newValue: T[K],
// ) => void;

export type IGlobalDataContext = {
  notifications: GlobalNotificationStateType;
  uiSettings: UiSettingsStateType;
  setGlobalNotification?: (arg: GlobalNotificationStateType) => void;
  setIsMobile?: (bool: boolean) => void;
};

export type IGlobalDataContextMemo = IGlobalDataContext;
