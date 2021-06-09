import React from "react";
import { Table } from "antd";

const renderCustomCell = (object) => {
  const { state } = object;
  return <p>{state.status}</p>;
};

const columns = [
  {
    title: "ID",
    dataIndex: "_id",
    key: "_id",
    sorter: (a, b) => a.Id - b.Id,
    sortDirections: ["ascend", "descend"],
    defaultSortOrder: "ascend",
  },
  {
    title: "Статус",
    key: "state_status",
    render: (object) => renderCustomCell(object),
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
        locale={{ emptyText: "Нет ботов" }}
      />
    </>
  );
}

export default BotTable;
