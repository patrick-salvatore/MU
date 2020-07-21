export type TypeClass = 'success' | 'error' | 'info' | null;

export type GlobalNotificationType = {
  message: string | null;
  type: TypeClass;
};

export type GlobalNotificationStateType = {
  messages: GlobalNotificationType[];
};

// export type SetContextState<T> = <K extends keyof T>(
//   path: K,
//   newValue: T[K],
// ) => void;

export interface IGlobalDataContext {
  notifications: GlobalNotificationStateType;
  setGlobalNotification?: (arg: GlobalNotificationStateType) => void;
}

export type IGlobalDataContextMemo = IGlobalDataContext;
