import { DataContext } from "./Context.js";

function Table() {
  const { data } = React.useContext(DataContext);
  return (
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
      <tbody>
        {data.map((value, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{value.nama_barang}</td>
              <td>{value.stok}</td>
              <td>{value.harga_beli}</td>
              <td>{value.harga_jual}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default React.memo(Table);
