<?php
include('koneksi.php');
$koneksi = new database();
$koneksi->hapus_data($_GET['id']);
header('location:index.php');
?>