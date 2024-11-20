import { Table, Typography, Space } from "antd";
import { useEffect, useState } from "react";
import axios from "axios"; 
function Customers() {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/customers"); 
        setData(response.data);
        setLoading(false); 
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ API", error);
        setLoading(false);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <Space size={30} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading} 
        dataSource={data} 
        columns={[
          {
            title: "Tên",
            dataIndex: "name", 
            key: "name",
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
          },
          {
            title: "SĐT",
            dataIndex: "phone",
            key: "phone",
          },
          {
            title: "Địa Chỉ",
            dataIndex: "address",
            key: "address",
          },
        ]}
        rowKey="id" 
      />
    </Space>
  );
}

export default Customers;
