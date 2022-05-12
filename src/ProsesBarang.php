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
        'stok' => 'harus_ada|hanya_angka',
        'harga_beli' => 'harus_ada|hanya_angka',
        'harga_jual' => 'harus_ada|hanya_angka',
        'nama_barang' => 'harus_ada|hanya_teks|max:10|min:3'
    ], $input);

    if ($validasi) {
        $query = $koneksi->tambah_data($_POST['nama_barang'],$_POST['stok'],$_POST['harga_beli'],$_POST['harga_jual']);
        header('location:index.php');
    }else{
        header("Location: " . $_SERVER["HTTP_REFERER"]);
    }
}else if ($action=="update"){
    $validasi = Validation::validate([
        'stok' => 'harus_ada|hanya_angka',
        'harga_beli' => 'harus_ada|hanya_angka',
        'harga_jual' => 'harus_ada|hanya_angka',
        'nama_barang' => 'harus_ada|hanya_teks|max:10|min:3'
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