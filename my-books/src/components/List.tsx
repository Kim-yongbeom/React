import { Button, PageHeader, Table } from "antd";
import Layout from "./Layout";

export default function List() {
  const goAdd = () => {};
  const logout = () => {};

  return (
    <Layout>
      <PageHeader
        title={<div>Book List</div>}
        extra={[
          <Button key="2" type="primary" onClick={goAdd}>
            Add Book
          </Button>,
          <Button key="1" type="primary" onClick={logout}>
            Logout
          </Button>,
        ]}
      />
      <Table />
    </Layout>
  );

  function click() {}
}
