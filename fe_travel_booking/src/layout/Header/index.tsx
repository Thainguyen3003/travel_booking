import { Header as HeaderLayout } from "antd/es/layout/layout";
import { Row, Col, Menu } from "antd";
import listMenu from "./menu";

const Header: React.FC = () => (
  <>
    <div style={{ display: "flex", justifyContent: "center" }}>
      Xem trước tổng giá
      <a>Tìm hiểu thêm</a>
    </div>
    <HeaderLayout
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        background: "#f7f7f7",
      }}
    >
      <div
        style={{
          float: "left",
          width: "100%",
          height: 31,
          background: "#f7f7f7",
        }}
      >
        <Menu
          style={{ background: "#f7f7f7", lineHeight: "3" }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
        >
          {listMenu.map((item, index) => {
            return (
              <div key={index} style={{ padding: "0 10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    style={{ width: "24px", height: "24px" }}
                    src={item.img}
                  />
                </div>
                <div style={{ fontSize: "12px" }}>{item.name}</div>
              </div>
            );
          })}
        </Menu>
      </div>
    </HeaderLayout>
  </>
);

export default Header;
