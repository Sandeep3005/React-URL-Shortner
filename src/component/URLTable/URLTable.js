import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import CONSTANTS from "./../../constants";
import { copyToClipboard } from "./../../utility";

const URLTable = ({
  performTableRefresh,
  afterTableRefresh,
  setLoader,
  setToaster,
}) => {
  const [records, setRecords] = useState([]);

  const getData = async () => {
    const results = await fetch(CONSTANTS.GET_RECORD_URL);
    results.json().then((res) => {
      setRecords(res.data);
      afterTableRefresh(false);
      setLoader(false);
    });
  };

  const showToast = (urlCopied) => {
    setToaster(urlCopied);
  };

  useEffect(() => {
    if (performTableRefresh) {
      setLoader(true);
      getData();
    }
  }, [performTableRefresh]);

  return (
    <MaterialTable
      title="Short URL Collection"
      actions={[
        {
          icon: "content_copy",
          tooltip: "Copy Short Url",
          onClick: (event, rowData) => {
            const textToCopy = CONSTANTS.GET_RECORD_URL + rowData.shortUrl;
            copyToClipboard(textToCopy);
            showToast(textToCopy);
          },
        },
      ]}
      columns={[
        { title: "Full URL", field: "fullUrl" },
        {
          title: "Short URL",
          field: "shortUrl",
          render: (rowData) => (
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`${CONSTANTS.GET_RECORD_URL}${rowData.shortUrl}`}
            >
              {rowData.shortUrl}
            </a>
          ),
        },
      ]}
      data={records}
      options={{
        actionsColumnIndex: -1,
      }}
    />
  );
};

export default URLTable;
