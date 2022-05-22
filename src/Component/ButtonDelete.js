import { DataContext } from "./Context.js";

function ButtonDelete(prop) {
  const {
    action,
    SetAction,
    SetData,
    SetNotif,
    SetNotifMessage,
    SetNotifType,
  } = React.useContext(DataContext);
  const [isTrue, SetTrue] = React.useState(false);

  const notif = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        SetTrue(true);
      }
    });
  };

  const handleClick = async () => {
    const response = await fetch("http://localhost/crud/ProsesBarang.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body:
        "action=" +
        encodeURIComponent(action) +
        "&id_barang=" +
        encodeURIComponent(prop.id),
    });
    const result = await response.json();

    if (result.type == "success") {
      SetData(result.value);
      SetNotif(true);
      SetNotifType("Success");
      SetNotifMessage(result.message);
      SetTrue(false);
    } else {
      SetNotif(true);
      SetNotifType("Failed");
      SetNotifMessage(result.message);
      SetTrue(false);
    }
  };

  React.useEffect(() => {
    if (isTrue) {
      handleClick();
    }
  }, [isTrue]);

  return (
    <button
      style={{ marginLeft: "10px" }}
      onClick={() => {
        SetAction("delete");
        notif();
      }}
      type="button"
      className={`btn btn-danger`}
    >
      Delete
    </button>
  );
}

export default ButtonDelete;
