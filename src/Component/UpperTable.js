import Modal from "./src/Component/Modal.js";
import ButtonModal from "./src/Component/ButtonModal.js";

function UpperTable(prop) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ButtonModal message="Tambah Barang" target="#ModalAU" />
      <Modal title="Tambah Barang" />
    </div>
  );
}

export default UpperTable;
