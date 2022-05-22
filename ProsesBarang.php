<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once __DIR__."/vendor/autoload.php";
session_start();

use Src\Validation;
use Src\Database;

$koneksi = new Database();
$action = $_POST['action'];


if($action == "add"){
    //parameter ke-1 tentukan validasi (Array)
    //parameter ke-2 input yang ingin divalidasi (Array)
    $input = [
        'nama_barang' => $_POST['nama_barang'],
        'stok' => $_POST['stok'],
        'harga_beli' => $_POST['harga_beli'],
        'harga_jual' => $_POST['harga_jual']
    ];
    $validasi = Validation::validate([
        'stok' => 'hanya_angka',
        'harga_beli' => 'hanya_angka',
        'harga_jual' => 'hanya_angka',
        'nama_barang' => 'hanya_teks|min:3|max:10'
    ], $input);

    if ($validasi) {
        $query1 = $koneksi->tambah_data($_POST['nama_barang'],$_POST['stok'],$_POST['harga_beli'],$_POST['harga_jual']);
        echo json_encode(["value" => $koneksi->tampil_data(), "message" => "Ditambahkan", "type" => "success"]);
    }else{
        echo json_encode(["value" => "", "message" => "Gagal Menambahkan Data", "type" => "failed"]);
    }
}else if ($action=="update"){
    $input = [
        'nama_barang' => $_POST['nama_barang'],
        'stok' => $_POST['stok'],
        'harga_beli' => $_POST['harga_beli'],
        'harga_jual' => $_POST['harga_jual']
    ];

    $validasi = Validation::validate([
        'stok' => 'hanya_angka',
        'harga_beli' => 'hanya_angka',
        'harga_jual' => 'hanya_angka',
        'nama_barang' => 'hanya_teks|max:10|min:3'
    ], $input);

    if ($validasi) {
        $koneksi->update_data($_POST['nama_barang'],$_POST['stok'],$_POST['harga_beli'],$_POST['harga_jual'],$_POST['id_barang']);
        echo json_encode(["value" => $koneksi->tampil_data(), "message" => "Diupdate", "type" => "success"]);
    }else{
        echo json_encode(["value" => "", "message" => "Gagal Megupdate Data", "type" => "failed"]);
    }
}else if($action == "delete"){
    $koneksi->hapus_data($_POST['id_barang']);
    echo json_encode(["value" => $koneksi->tampil_data(), "message" => "Data Dihapus", "type" => "success"]);

}else if($action=="livesearch"){
    $data = $_POST['like'];
    if ($data) {
        $query = $koneksi->livesearch($data);
        if($query){
            echo json_encode($query);
        }else{
            echo json_encode("Tidak Ada");
        }
    }else{
        echo json_encode($koneksi->tampil_data());
    }
}
?>