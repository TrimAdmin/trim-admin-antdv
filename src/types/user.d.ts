interface IUsernameLoginParams {
  username: string
  password: string
  remember: boolean
}

interface IRegisterParams {
  username: string
  email: string
  password: string
  confirmPassword: string
}
