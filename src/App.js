import './App.css';
import React from 'react'
import downloadExcelFile from './ExcelFileOutput'

function App() {
    console.log(downloadExcelFile)
  return (
      <>
          <h1>Excelファイル出力</h1>
          <button onClick={downloadExcelFile}>Download Excel File</button>
      </>
  );
}

export default App;
