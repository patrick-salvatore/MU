export type GlobalNotificationType = {
  message: string | null;
  type: string | null;
};

export type GlobalNotificationStateType = {
  display: boolean;
  messages: GlobalNotificationType[];
};

export interface IGlobalDataContext {
  notifications: GlobalNotificationStateType;
  setGlobalNotification?: (arg: GlobalNotificationStateType) => void;
}

export type IGlobalDataContextMemo = IGlobalDataContext;
