import { useSelector } from "react-redux";
import { RootState } from "store";

// Lấy thông tin user đăng nhập
export const useAuth = () => {
  const { user } = useSelector((state: RootState) => state.quanLyNguoiDung);
  return { user };
};

// những cái file có tên đầu tiên là use thì reat sẽ tự hiểu là cái hook
// sự khách nhau giữa hook và hàm bth trong REACT: trong cái hook có thể gọi hook nhưng trong hàm bth thì ko gọi đc hook
