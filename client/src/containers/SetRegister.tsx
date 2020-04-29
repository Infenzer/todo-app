import { connect, ConnectedProps } from "react-redux";
import RegisterForm from "../components/RegisterForm";
import fetchRegister from "../redux/actions/fetchRegister";
import { RootState } from "../redux/reducers";

export type RegisterFormProps = ConnectedProps<typeof connector>

const mapStateToProps = (state: RootState) => ({
  btnActive: state.loader.isLoading,
  isRegister: state.register.isRegister
})

const mapDispatchToProps = dispatch => ({
  onRegisterClick: (email: string, password: string) => {
    dispatch(fetchRegister(email, password))
  }
})

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(RegisterForm)