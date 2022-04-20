function ButtonModal(prop) {
  return (
    <button
      type="button"
      className={`btn btn-primary`}
      data-bs-toggle="modal"
      data-bs-target={prop.target}
    >
      {prop.message}
    </button>
  );
}
