<?php
// Muhammad Nafal Muttaqin XI-RPL 2
namespace src;

class Database{
    public $host = "localhost";
    public $username = "root";
    public $password = "";
    public $database = "warung_belajar_t3";
    public $koneksi = "";

    function __construct(){
        $this->koneksi = new \mysqli($this->host, $this->username, $this->password, $this->database);
        if (mysqli_connect_errno()){
            echo "Koneksi database gagal : " . mysqli_connect_error();
        }
    }

    public function tampil_data(){
        $hasil = array();
        $query = $this->koneksi->prepare("select * from tb_barang");
        $query->execute();
        $result = $query->get_result();
        while($row = mysqli_fetch_object($result)){
            $hasil[] = $row;
        }
        return $hasil;
    }

    public function tambah_data($nama_barang,$stok,$harga_beli,$harga_jual){
        mysqli_query($this->koneksi,"insert into tb_barang values (' ', '$nama_barang', '$stok', '$harga_beli', '$harga_jual')");
    }

    public function get_by_id($id_barang){
        $query = mysqli_query($this->koneksi,"select * from tb_barang where id_barang='$id_barang'");
        return $query->fetch_array();
    }

    public function update_data($nama_barang,$stok,$harga_beli,$harga_jual,$id_barang){
        mysqli_query($this->koneksi,"update tb_barang set nama_barang='$nama_barang', stok='$stok', harga_beli='$harga_beli', harga_jual='$harga_jual' where id_barang='$id_barang'");
    }

    public function hapus_data($id_barang){
        mysqli_query($this->koneksi,"delete from tb_barang where id_barang='$id_barang'");
    }

    public function livesearch($like){
        $hasil = array();
        $query = mysqli_query($this->koneksi,"SELECT * FROM tb_barang WHERE id_barang LIKE '%$like%' OR nama_barang LIKE '%$like%' OR stok LIKE '%$like%' OR harga_jual LIKE '%$like%' OR harga_beli LIKE '%$like%'");
        while($row = mysqli_fetch_object($query)){
            $hasil[] = $row;
        }
        return $hasil;
    }
}
?>