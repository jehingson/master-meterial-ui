import { ColDef } from 'ag-grid-community'

export const tradeBlotterColDef = [
  { field: 'ticketId', sortable: true },
  { field: 'startDate', sortable: true, filter: 'agDateColumnFilter' },
  { field: 'endDate', sortable: true, filter: 'agDateColumnFilter' },
  { field: 'fullname', sortable: true, headerName: 'Cpty Name' },
  { field: 'quantity', sortable: true, filter: 'agDateColumnFilter' },
  { field: 'fixed' },
  { field: 'trader' },
]
