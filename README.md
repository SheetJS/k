# k

Spreadsheet differ

## Installation

```
npm install -g k
```

## Usage

```
$ k file_1 file_2
```

The process will exit with code 0 if and only if the two files are deemed to be the same.

## Difference Algorithm

Currently, only the sheet names and CSV outputs are compared.

## Supported Formats

This uses the [j](https://npm.im/j) library, which currently provides:

- XLS (Excel 97-2004)
- XML (Excel 2003-2004)
- XLSX (Excel 2007+ XML)
- XLSM (Excel 2007+ Macro-Enabled XML)
- XLSB (Excel 2007+ Binary)

## License

Please consult the attached LICENSE file for details.  All rights not explicitly granted by the Apache 2.0 license are reserved by the Original Author.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/e63df2c9b026fcf022fcf17e942b9508 "githalytics.com")](http://githalytics.com/SheetJS/k)
