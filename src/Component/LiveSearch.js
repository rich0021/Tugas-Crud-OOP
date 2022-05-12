import { DataContext } from "./Context.js";

function LiveSearch() {
  const { action, SetData, SetAction } = React.useContext(DataContext);
  const [query, SetQuery] = React.useState();

  React.useEffect(() => {
    handleChange();
  }, [query]);

  const handleChange = async () => {
    const response = await fetch("http://localhost/crud/ProsesBarang.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body:
        "action=" +
        encodeURIComponent(action) +
        "&like=" +
        encodeURIComponent(query),
    });

    const result = await response.json();
    SetData(result);
  };

  return (
    <input
      type="text"
      onChange={(e) => {
        SetQuery(e.target.value);
        SetAction("livesearch");
      }}
    />
  );
}

export default LiveSearch;
