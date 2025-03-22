const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thông tin h?c viên</title>
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <table>
        <tr>
            <th>MSHV</th>
            <th>H? tên</th>
            <th>Ngày sinh</th>
            <th>Quê quán</th>
            <th>Email</th>
            <th>SÐT</th>
        </tr>
        <tr>
            <td>M2524011</td>
            <td>Võ Thanh Luân</td>
            <td>26/12/1988</td>
            <td>C?n Tho</td>
            <td>luanm2524011@gstudent</td>
            <td>0948838407</td>
        </tr>
    </table>
</body>
</html>');
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
