<?php
require_once __DIR__."/vendor/autoload.php";
session_start();

use Src\Validation;
use Src\Database;

$koneksi = new Database();
$action = $_POST['action'];

$input = [
    'nama_barang' => $_POST['nama_barang'],
    'stok' => $_POST['stok'],
    'harga_beli' => $_POST['harga_beli'],
    'harga_jual' => $_POST['harga_jual']
];

if($action == "add"){
    //parameter ke-1 tentukan validasi (Array)
    //parameter ke-2 input yang ingin divalidasi (Array)
    $validasi = Validation::validate([
        'stok' => 'hanya_angka',
        'harga_beli' => 'hanya_angka',
        'harga_jual' => 'hanya_angka',
        'nama_barang' => 'hanya_teks|min:3|max:10'
    ], $input);

    if ($validasi) {
        $query1 = $koneksi->tambah_data($_POST['nama_barang'],$_POST['stok'],$_POST['harga_beli'],$_POST['harga_jual']);
        $query2 = $koneksi->tampil_data();
        echo json_encode($query2);
    }else{
        echo json_encode("Gagal"); 
    }
}else if ($action=="update"){
    $validasi = Validation::validate([
        'stok' => 'hanya_angka',
        'harga_beli' => 'hanya_angka',
        'harga_jual' => 'hanya_angka',
        'nama_barang' => 'hanya_teks|max:10|min:3'
    ], $input);

    if ($validasi) {
        $koneksi->update_data($_POST['nama_barang'],$_POST['stok'],$_POST['harga_beli'],$_POST['harga_jual'],$_POST['id_barang']);
        header('location:index.php');
    }else{
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    }
}else if($action=="tampil"){
    $data_barang = $conn->tampil_data();
    header("Content-Type: application/json");
    echo json_encode($data_barang);
}
?>