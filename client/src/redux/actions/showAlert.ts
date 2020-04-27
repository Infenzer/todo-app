import { SHOW_ALERT } from "../types";

export type AlertType = 'ERROR' | 'WARNING' | 'SUCCESS' 

export interface IShowAlert {
  type: typeof SHOW_ALERT
  payload: {
    type: AlertType
    text: string
  }
}

const showAlert = (type: AlertType, text: string): IShowAlert => ({
  type: SHOW_ALERT,
  payload: {
    type,
    text
  }
})

export default showAlert