import { connect, ConnectedProps } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import fetchRegister from "../redux/actions/fetchRegister";
import { RootState } from "../redux/reducers";
import showAlert, { AlertType } from "../redux/actions/showAlert";
import hideAlert from "../redux/actions/hideAlert";

export type RegisterFormProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  btnActive: state.loader.isLoading,
  isRegister: state.register.isRegister
})

const mapDispatchToProps = dispatch => ({
  registerUser: (email: string, password: string) => {
    dispatch(fetchRegister(email, password))
  },
  showAlert: (type: AlertType, text: string ) => {
    dispatch(showAlert(type, text))

    setTimeout(() => {
      dispatch(hideAlert())
    }, 2500)
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(RegisterForm)