import Modal from "./Modal.js";
import ButtonModal from "./ButtonModal.js";
import LiveSearch from "./LiveSearch.js";
import Notif from "./Notif.js";

function UpperTable() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <Notif />
      <ButtonModal message="Tambah Barang" target="#ModalAU" />
      <LiveSearch />
      <Modal title="Tambah Barang" />
    </div>
  );
}

export default UpperTable;
