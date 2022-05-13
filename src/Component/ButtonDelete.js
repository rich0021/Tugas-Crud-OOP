import { DataContext } from "./Context.js";

function ButtonDelete(prop) {
  const {
    action,
    nama_barang,
    stok,
    harga_beli,
    harga_jual,
    SetAction,
    SetData,
  } = React.useContext(DataContext);

  const handleClick = async () => {
    SetAction("delete");
    const response = await fetch("http://localhost/crud/ProsesBarang.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body:
        "action=" +
        encodeURIComponent(action) +
        "&nama_barang=" +
        encodeURIComponent(nama_barang) +
        "&id_barang=" +
        encodeURIComponent(prop.id) +
        "&stok=" +
        encodeURIComponent(stok) +
        "&harga_beli=" +
        encodeURIComponent(harga_beli) +
        "&harga_jual=" +
        encodeURIComponent(harga_jual),
    });
    const result = await response.json();
    console.log(result);
    SetData(result[0]);
    Swal.fire({
      title: "Berhasil",
      text: "Data " + result[1],
      icon: "success",
      confirmButtonText: "Tutup",
    });
  };

  return (
    <button
      style={{ marginLeft: "10px" }}
      onClick={() => {
        handleClick();
      }}
      type="button"
      className={`btn btn-danger`}
    >
      Delete
    </button>
  );
}

export default ButtonDelete;
