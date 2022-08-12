import { AuthErrorCodes } from "firebase/auth";

const ERROR = {
  [AuthErrorCodes.INVALID_PASSWORD]: "Sai mật khẩu, vui lòng thử lại",
  [AuthErrorCodes.USER_DELETED]: "Không tìm thấy tài khoản, vui lòng thử lại",
} as any;

export const resolveSignInError = (errorCode?: string) => {
  if (!errorCode) {
    return "Đăng nhập không thành công";
  }
  return ERROR[errorCode];
};
