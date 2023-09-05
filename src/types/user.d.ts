interface IUsernameLoginParams {
  username: string
  password: string
  captcha: string
  remember: boolean
}

interface IRegisterParams {
  username: string
  email: string
  password: string
  confirmPassword: string
}

interface IUserInfo {
  username: string
  email: string
  avatar?: string
}
