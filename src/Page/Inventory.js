import { Space, Typography, Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios"; 

function Inventory() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/inventory"); 
        console.log("Dữ liệu API:", response.data);
        setData(response.data); 
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchData(); 
  }, []); 

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading} 
        dataSource={data} 
        columns={[
          {
            title: "Tên Sản Phẩm",
            dataIndex: "name", 
            key: "name",
          },
          {
            title: "Mô tả",
            dataIndex: "description", 
            key: "description",
          },
          {
            title: "Số lượng",
            dataIndex: "quantity", 
            key: "quantity",
          },
          {
            title: "Giá",
            dataIndex: "price", 
            key: "price",
          }
        ]}
        rowKey="_id" 
      />
    </Space>
  );
}

export default Inventory;
