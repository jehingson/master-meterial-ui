import React, { useState, useCallback } from 'react'
import { DataGrid } from '../../components'
import { tradeBlotterColDef } from './config'
// import { useGetTradesQuery } from '../../services'


const GET_DATAS = [
  {
    "tiketId": 1,
    "startDate": "2015-12-02",
    "endDate": "2015-12-12",
    "fullname": "json dev",
    "quantity": "2000",
    "trader": "Demo",
    "fixed": true
  }
]

export const Blotter: React.FC = (): JSX.Element => {
  const [showNoRowsOverlay, setShowNoRowsOverlay] = useState<boolean>(true)
  // const { data } = useGetTradesQuery(undefined, { pollingInterval: 3000})
  const rowClickHandler = useCallback(() => {}, [])

  

  return (
    <div>
      <DataGrid
        gridData={GET_DATAS}
        colDef={tradeBlotterColDef}
        showNoRowsOverlay={showNoRowsOverlay}
        rowClickHandler={rowClickHandler}
        size={{ width: '100px', height: 1000 }}
      ></DataGrid>
    </div>
  )
}
