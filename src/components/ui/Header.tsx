import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Avatar, Popover } from ".";
import { UserOutlined } from "@ant-design/icons";
import { PATH } from "constant";
import { useAuth } from "hooks";
import { useAppDispatch } from "store";
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung/slice";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const dispatch = useAppDispatch();

  return (
    <HeaderS>
      <div className="header-content">
        <h2
          onClick={() => navigate("/")}
          className="font-600 fs-[30px] cursor-pointer"
        >
          CYBER MOVIE
        </h2>
        <div className="flex justify-around items-center">
          <NavLink className="mr-40" to={PATH.about}>
            About
          </NavLink>
          <NavLink to={PATH.contact}>Contact</NavLink>
          {user && (
            <Popover
              content={
                <div className="p-10">
                  <h2 className="font-600 mb-10 p-10">{user?.hoTen}</h2>
                  <hr />
                  <div
                    onClick={() => {
                      navigate(PATH.account);
                    }}
                    className="p-10 mt-10 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-300"
                  >
                    Thông tin tài khoản
                  </div>
                  <div
                    onClick={() => {
                      dispatch(quanLyNguoiDungActions.logOut());
                    }}
                    className="p-10 mt-10 rounded-lg cursor-pointer hover:bg-gray-500 hover:text-white transition-all duration-300"
                  >
                    Đăng xuất
                  </div>
                </div>
              }
              trigger="click"
            >
              <Avatar
                className="!ml-40 !cursor-pointer !flex justify-center"
                size={28}
                icon={<UserOutlined />}
              />
            </Popover>
          )}
          {!user && (
            <p
              className="font-600 text-16 ml-40 cursor-pointer"
              onClick={() => {
                navigate(PATH.login);
              }}
            >
              Login
            </p>
          )}
        </div>
      </div>
    </HeaderS>
  );
};

export default Header;

const HeaderS = styled.div`
  height: var(--header-height);
  background: white;
  box-shadow: 0 0 5px rgba(1, 1, 1, 0.4);
  .header-content {
    max-width: var(--max-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;
