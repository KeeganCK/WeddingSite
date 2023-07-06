import React, { useEffect, useState } from "react";
import { CustomSearch } from "./RSVP";
import { styled } from "styled-components";
import { Table, notification } from "antd";
import { ColumnsType } from "antd/es/table";
import { FaItunesNote } from "react-icons/fa6";
import "./MusicTable.css";

const MusicSearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  margin-top: 50px;
`;

interface MusicProps {
  artist: string;
  track: number;
}

const columns: ColumnsType<MusicProps> = [
  {
    title: "",
    dataIndex: "icon",
    key: "icon",
    width: "44px",
    render: (text) => <FaItunesNote />,
  },
  {
    title: "Artist",
    dataIndex: "artist",
    key: "artist",
  },
  {
    title: "Track",
    dataIndex: "track",
    key: "track",
  },
];

interface MusicTableProps {
  searchAgain: boolean;
  setSearchAgain: React.Dispatch<React.SetStateAction<boolean>>;
	cssClass: string;
}

const MusicTable = (props: MusicTableProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<Array<MusicProps>>();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    searchMusic("");
  }, [props.searchAgain]);

  const searchMusic = async (value: string) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:3001/api/searchMusic/${value}`
      );
      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.message);
      }
      setTableData(responseData.results);
      if (value) showNotification(responseData.message);
      setLoading(false);
    } catch (err: any) {
      api.error({
        message: err.message,
        placement: "top",
      });
      setLoading(false);
    }
  };

  const showNotification = (message: string) => {
    api.success({
      message: message,
      placement: "top",
    });
    setLoading(false);
  };

	

  return (
    <MusicSearchDiv>
      {contextHolder}
      <CustomSearch
        loading={loading}
        enterButton="Search"
        onSearch={searchMusic}
        placeholder="Search for track or artist"
        onChange={(e: any) =>
          e.currentTarget.value === "" &&
          props.setSearchAgain(!props.searchAgain)
        }
      />
      <br />
      <Table
        rowClassName={(r, index) =>
          index === 0
            ? index % 2 === 0
              ? `table-row-light ${props.cssClass}`
              : `table-row-dark ${props.cssClass}`
            : index % 2 === 0
            ? `table-row-light`
            : `table-row-dark`
        }
        size={"small"}
        columns={columns}
        dataSource={tableData ? tableData : []}
        bordered
        pagination={{ defaultPageSize: 10 }}
      />
    </MusicSearchDiv>
  );
};

export default MusicTable;
