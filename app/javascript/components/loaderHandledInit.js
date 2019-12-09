const loaderHandledInit = () => {
  document.querySelectorAll(".loader-handled").forEach((element) => {
    element.addEventListener("click", () => {
      $('#loading-modal').modal('show');
    });
  });
};

export { loaderHandledInit };
