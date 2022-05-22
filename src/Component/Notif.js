import { DataContext } from "./Context.js";

function Notif() {
  const { isNotif, SetNotif, notifMessage, notifType } =
    React.useContext(DataContext);

  const close = () => {
    SetNotif(false);
  };

  if (notifType.toLowerCase() == "success") {
    return (
      isNotif && (
        <div
          style={{
            width: "250px",
            position: "absolute",
            top: "30px",
            right: "50px",
            zIndex: "10",
            backgroundColor: "white",
          }}
          className={`shadow rounded`}
        >
          <div
            className={`d-flex justify-content-between`}
            style={{
              backgroundColor: "#26ff31",
              padding: "5px",
            }}
          >
            <h2 style={{ color: "white" }}>{notifType}</h2>
            <button onClick={close} className={`btn btn-danger`}>
              Close
            </button>
          </div>
          <p
            style={{
              padding: "5px",
            }}
          >
            {notifMessage}
          </p>
        </div>
      )
    );
  } else {
    return (
      isNotif && (
        <div
          style={{
            width: "250px",
            position: "absolute",
            top: "30px",
            right: "50px",
            zIndex: "10",
            backgroundColor: "white",
          }}
          className={`shadow rounded`}
        >
          <div
            className={`d-flex justify-content-between`}
            style={{
              backgroundColor: "red",
              padding: "5px",
            }}
          >
            <h2 style={{ color: "white" }}>{notifType}</h2>
            <button onClick={close} className={`btn btn-light text-danger`}>
              Close
            </button>
          </div>
          <p
            style={{
              padding: "5px",
            }}
          >
            {notifMessage}
          </p>
        </div>
      )
    );
  }
}

export default Notif;
