import { DataContext } from "./Context.js";

function Modal(prop) {
  const {
    SetData,
    nama_barang,
    SetNamaBarang,
    stok,
    SetStok,
    harga_beli,
    SetHargaBeli,
    harga_jual,
    SetHargaJual,
    action,
    id,
    SetNotif,
    SetNotifMessage,
    SetNotifType,
  } = React.useContext(DataContext);

  const handleClick = async () => {
    if (nama_barang && stok && harga_beli && harga_jual) {
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
          encodeURIComponent(id) +
          "&stok=" +
          encodeURIComponent(stok) +
          "&harga_beli=" +
          encodeURIComponent(harga_beli) +
          "&harga_jual=" +
          encodeURIComponent(harga_jual),
      });
      const result = await response.json();

      if (result.type == "success") {
        SetData(result.value);
        SetNotif(true);
        SetNotifType("Success");
        SetNotifMessage(result.message);
      } else {
        SetNotif(true);
        SetNotifType("Failed");
        SetNotifMessage(result.message);
      }
    } else {
      SetNotif(true);
      SetNotifType("Failed");
      SetNotifMessage("Data Yang Dimasukkan Tidak Valid / Lengkap");
    }
  };

  return (
    <div
      id="ModalAU"
      className={`modal fade`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className={`modal-dialog .modal-dialog-centered`}>
        <div className={`modal-content`}>
          <div className={`modal-header`}>
            <h5 className={`modal-title`} id="staticBackdropLabel">
              {prop.title}
            </h5>
            <button
              type="button"
              className={`btn-close`}
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className={`modal-body`}>
            <div>
              <form id="formAU">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="nama_barang">Nama Barang</label>
                      </td>
                      <td> : </td>
                      <td>
                        <input
                          onChange={(e) => SetNamaBarang(e.target.value)}
                          id="nama_barang"
                          type="text"
                          name="nama_barang"
                          value={nama_barang}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="stok">Stok</label>
                      </td>
                      <td> : </td>
                      <td>
                        <input
                          onChange={(e) => SetStok(e.target.value)}
                          id="stok"
                          type="text"
                          name="stok"
                          value={stok}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="harga_beli">Harga Beli</label>
                      </td>
                      <td> : </td>
                      <td>
                        <input
                          onChange={(e) => SetHargaBeli(e.target.value)}
                          id="harga_beli"
                          type="text"
                          name="harga_beli"
                          value={harga_beli}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="harga_jual">Harga Jual</label>
                      </td>
                      <td> : </td>
                      <td>
                        <input
                          onChange={(e) => SetHargaJual(e.target.value)}
                          id="harga_jual"
                          type="text"
                          name="harga_jual"
                          value={harga_jual}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>
          </div>
          <div className={`modal-footer`}>
            <button
              type="button"
              className={`btn btn-secondary`}
              data-bs-dismiss="modal"
            >
              Tutup
            </button>
            <button
              type="button"
              data-bs-dismiss="modal"
              className={`btn btn-primary`}
              onClick={handleClick}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Modal);
