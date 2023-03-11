import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx';

//Excel出力するための関数
const downloadExcelFile = () => {
    // ダウンロードするExcelファイルに含めるデータを定義
    const data = [
        { name: 'Taishi', age: 23, gender: 'Man' },
        { name: 'sherry', age: 23, gender: 'female' }
    ];
    // 新しいExcelブックを作成
    const ExcelWorkbook = XLSX.utils.book_new();
    // データからExcelワークシートを作成
    const ExcelWorkSheet = XLSX.utils.json_to_sheet(data);
    // Excelワークシートに名前を付ける
    const ExcelSheetName = 'Sheet1';
    // Excelブックにワークシートを追加
    XLSX.utils.book_append_sheet(ExcelWorkbook, ExcelWorkSheet, ExcelSheetName);
    // Excelブックをバイナリデータに変換
    const excelBuffer = XLSX.write(ExcelWorkbook, { bookType: 'xlsx', type: 'array' });
    // Excelファイル用のMIMEタイプを指定して、バイナリデータをBlobオブジェクトに変換
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    // Blobオブジェクトを保存して、Excelファイルをダウンロードする
    FileSaver.saveAs(blob, '1月作業時間表.xlsx');
}


export default downloadExcelFile;