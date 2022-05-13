import { DataContext } from "./Context.js";

function ButtonUpdate(prop) {
  const {
    SetNamaBarang,
    SetStok,
    SetHargaBeli,
    SetHargaJual,
    SetAction,
    SetId,
  } = React.useContext(DataContext);

  const add = () => {
    SetNamaBarang(prop.nama);
    SetStok(prop.stok);
    SetHargaBeli(prop.harga_beli);
    SetHargaJual(prop.harga_jual);
    SetId(prop.id);
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
