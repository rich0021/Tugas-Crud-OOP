function ButtonUpdate(prop) {
  const add = () => {
    SetNamaBarang(prop.nama);
    SetStok(prop.stok);
    SetHargaBeli(prop.harga_beli);
    SetHargaJual(prop.harga_jual);
    SetAction("update");
  };

  return (
    <button
      onClick={add}
      type="button"
      className={`btn btn-primary`}
      data-bs-toggle="modal"
      data-bs-target="#ModalAU"
    >
      Update
    </button>
  );
}

export default ButtonUpdate;
