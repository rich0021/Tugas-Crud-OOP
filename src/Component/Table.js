import { DataContext } from "./Context.js";
import ButtonUpdate from "./ButtonUpdate.js";

function Table() {
  const { data } = React.useContext(DataContext);
  if (data) {
    return (
      <table className={`table table-hover border`}>
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama Barang</th>
            <th scope="col">Stok</th>
            <th scope="col">Harga Beli</th>
            <th scope="col">Harga Jual</th>
            <th scope="col">Actio</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.nama_barang}</td>
                <td>{value.stok}</td>
                <td>{value.harga_beli}</td>
                <td>{value.harga_jual}</td>
                <td>
                  <ButtonUpdate
                    nama={value.nama_barang}
                    stok={value.stok}
                    harga_beli={value.harga_beli}
                    harga_jual={value.harga_jual}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return (
      <div>
        <table className={`table table-hover border`}>
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Stok</th>
              <th scope="col">Harga Beli</th>
              <th scope="col">Harga Jual</th>
            </tr>
          </thead>
        </table>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Data Tidak Ada
        </h1>
      </div>
    );
  }
}

export default React.memo(Table);
