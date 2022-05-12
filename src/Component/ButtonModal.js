import { DataContext } from "./Context.js";

function ButtonModal(prop) {
  const { SetNamaBarang, SetStok, SetHargaBeli, SetHargaJual, SetAction } =
    React.useContext(DataContext);
  const empty = () => {
    SetNamaBarang("");
    SetStok("");
    SetHargaBeli("");
    SetHargaJual("");
    SetAction("add");
  };

  return (
    <button
      onClick={empty}
      type="button"
      className={`btn btn-primary`}
      data-bs-toggle="modal"
      data-bs-target={prop.target}
    >
      {prop.message}
    </button>
  );
}

export default React.memo(ButtonModal);
