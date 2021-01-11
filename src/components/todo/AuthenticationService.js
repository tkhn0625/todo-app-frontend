class AuthenticatioService {
  registerSuccessfulLogin(username,passsword){
    console.log('registerSuccessfulLogin')
    sessionStorage.setItem('AutheticatedUser',username)
  }

  logout(){
    sessionStorage.removeItem('AutheticatedUser');
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('AutheticatedUser')
    if(user===null) return false;
    return true;
  }

  getLoggedInUserName(){
    let user = sessionStorage.getItem('AutheticatedUser')
    if(user===null) return '';
    return user;
  }
}

export default new AuthenticatioService();