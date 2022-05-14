<?php
// Muhammad Nafal Muttaqin XI-RPL 2
header('Access-Control-Allow-Origin: *');
require_once __DIR__."/vendor/autoload.php";
session_start();

use Src\Database;
$conn = new Database();
$data_barang = json_encode($conn->tampil_data());
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Crud OOP Warung Belajar</title>
</head>
<body>
    <div style="width: 80%; margin:150px auto" id="root"></div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/Context.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/ButtonModal.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/ButtonUpdate.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/ButtonDelete.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/Table.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/Modal.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/LiveSearch.js"></script>
    <script data-plugins="transform-es2015-modules-umd" type="text/babel" src="src/Component/UpperTable.js"></script>
    
    
    <script data-plugins="transform-es2015-modules-umd" type="text/babel">
        import Table from "./src/Component/Table.js";
        import UpperTable from "./src/Component/UpperTable.js";
        import { DataContext } from "./src/Component/Context.js";

        function App(){
            const [data, SetData] = React.useState(<?php echo $data_barang?>);
            const [nama_barang, SetNamaBarang] = React.useState();
            const [stok, SetStok] = React.useState();
            const [harga_beli, SetHargaBeli] = React.useState();
            const [harga_jual, SetHargaJual] = React.useState();
            const [action, SetAction] = React.useState();
            const [id, SetId] = React.useState();
            let provider = {
                data, 
                SetData, 
                nama_barang, 
                SetNamaBarang, 
                stok, 
                SetStok,
                harga_beli, 
                SetHargaBeli,
                harga_jual, 
                SetHargaJual,
                action,
                SetAction,
                id,
                SetId
            }
            return (
                <DataContext.Provider value={provider}>
                    <UpperTable/>
                    <Table/>
                </DataContext.Provider>
            )
        }
        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(<App/>);
    </script>
</body>
</html>