import {
    AppstoreOutlined,
    ShopOutlined,
    ShoppingCartOutlined,
    UserOutlined,
  } from "@ant-design/icons";
  import { Menu } from "antd";
  import { useEffect, useState } from "react";
  import { useLocation, useNavigate } from "react-router-dom";
  
  function SideMenu() {
    const location = useLocation();
    const [selectedKeys, setSelectedKeys] = useState("/dashboard"); // Default to "/dashboard"
  
    useEffect(() => {
      const pathName = location.pathname;
      // Set selected key based on the current path
      setSelectedKeys(pathName);
    }, [location.pathname]);
  
    const navigate = useNavigate();
    return (
      <div className="SideMenu">
        <Menu
          className="SideMenuVertical"
          mode="vertical"
          onClick={(item) => {
            navigate(item.key); // Navigate to the selected route
          }}
          selectedKeys={[selectedKeys]}
          defaultSelectedKeys={["/dashboard"]}
          items={[
            {
              label: "Dashboard",
              icon: <AppstoreOutlined />,
              key: "/dashboard",
            },
            {
              label: "Inventory",
              key: "/inventory",
              icon: <ShopOutlined />,
            },
            {
              label: "Orders",
              key: "/order",
              icon: <ShoppingCartOutlined />,
            },
            {
              label: "Customers",
              key: "/customer",
              icon: <UserOutlined />,
            },
          ]}
        ></Menu>
      </div>
    );
  }
  
  export default SideMenu;
  