import { Menu } from 'antd';
import { 
  AppstoreOutlined, 
  ShopOutlined, 
  ShoppingCartOutlined, 
  UserOutlined, 
  AppstoreAddOutlined, 
  StarOutlined, 
  PercentageOutlined, 
  FileTextOutlined, 
  UserSwitchOutlined, 
  PayCircleOutlined, 
  CarOutlined, 
  MessageOutlined 
} from '@ant-design/icons'; 
import { useNavigate } from 'react-router-dom';
import './SideMenu.css'; 

const SideMenu = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log(`Navigating to ${item.key}`);
    navigate(item.key); // Navigate to the selected route
  };

  return (
    <div className="SideMenu">
      <Menu
        mode="vertical"
        onClick={handleClick}
        items={[
          { label: 'Dashboard', key: '/admin/dashboard', icon: <AppstoreOutlined /> },
          { label: 'Inventory', key: '/admin/inventory', icon: <ShopOutlined /> },
          { label: 'Product Management', key: '/admin/feedback', icon: <ShoppingCartOutlined />},
          { label: 'Orders', key: '/admin/order', icon: <ShoppingCartOutlined /> },
          { label: 'Customers', key: '/admin/customer', icon: <UserOutlined /> },
          { label: 'Consignment', key: '/admin/ky-gui', icon: <AppstoreAddOutlined /> },
          { label: 'FreeBack', key: '/admin/danh-gia', icon: <StarOutlined /> },
          { label: 'Promotions', key: '/admin/khuyen-mai', icon: <PercentageOutlined /> },
          { label: 'Reports', key: '/admin/reports', icon: <FileTextOutlined /> },
          { label: 'Settings', key: '/admin/settings', icon: <AppstoreOutlined /> },
          { label: 'User Management', key: '/admin/user-management', icon: <UserSwitchOutlined /> },
          { label: 'Payment Methods', key: '/admin/payment-methods', icon: <PayCircleOutlined /> },
          { label: 'Shipping', key: '/admin/shipping', icon: <CarOutlined /> },        ]}
      />
    </div>
  );
};

export default SideMenu;
