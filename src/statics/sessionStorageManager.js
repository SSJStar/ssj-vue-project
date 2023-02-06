/**
 *  管理缓存数据（登录状态、账号、token）
 */
const sessionStorageManager = {
  /** set方法 */
  // 修改登录状态
  setLoginState(value) {
    const val = value ? "1" : "0"; //boolean转string
    sessionStorage.setItem("loginState", val);
    // console.log(`setLoginState ${val}`);
  },

  // 修改用户名
  setUserName(value) {
    this.userName = value;
    sessionStorage.setItem("userName", value);
  },

  // 修改昵称
  setNickName(value) {
    sessionStorage.setItem("nickName", value);
  },

  // 修改token
  setToken(value) {
    this.token = value;
    sessionStorage.setItem("token", value);
  },

  /** get方法 */
  // 获取登录状态
  getLoginState() {
    const val = sessionStorage.getItem("loginState") === "1"; //string转boolean, "1"表示true
    // console.log(`getLoginState ${val}`);
    return val;
  },

  // 获取用户名
  getUserName() {
    return sessionStorage.getItem("userName");
  },

  // 获取用户名
  getNickName() {
    return sessionStorage.getItem("nickName");
  },

  // 获取token
  getToken() {
    return sessionStorage.getItem("token");
  },

  getUser() {
    let user = UserInfo("", "", "", "");
    user.loginState = this.getLoginState();
    user.userName = this.getUserName();
    user.nickName = this.getNickName();
    user.token = this.getToken();
    return user;
  },

  /** 清理方法 */
  // 退出登录，初始化数据
  signOut() {
    this.setLoginState(false);
    this.setUserName("");
    this.setToken("");
    this.setNickName("");
  },
};

class UserInfo {
  constructor(loginState, userName, nickName, token) {
    this.loginState = loginState;
    this.userName = userName;
    this.nickName = nickName;
    this.token = token;
  }
}

export default sessionStorageManager;
