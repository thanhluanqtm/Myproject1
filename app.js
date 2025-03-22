const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('
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
            <th>H? t�n</th>
            <th>Ng�y sinh</th>
            <th>Qu� qu�n</th>
            <th>Email</th>
            <th>S�T</th>
        </tr>
        <tr>
            <td>M2524011</td>
            <td>V� Thanh Lu�n</td>
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
