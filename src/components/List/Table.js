import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "Id",
    key: "Id",
    sorter: (a, b) => a.Id - b.Id,
    sortDirections: ["ascend", "descend"],
    defaultSortOrder: "ascend",
  },
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    sortDirections: ["ascend", "descend"],
  },

  {
    title: "Статус",
    dataIndex: "status",
    key: "status",
  },
];

function BotTable({ data }) {
  return (
    <>
      <Table
        className="clearfix"
        columns={columns}
        rowKey="Id"
        dataSource={data}
        style={{ clear: "both" }}
      />
    </>
  );
}

export default BotTable;
