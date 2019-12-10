import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalElement = document.querySelector(selector);
  if (swalElement) { // protect other pages
     {
      swal(options).then(callback);
    };
  }
};

const SweetalertDelete = (selector, options = {}) => {
  const swalButtons = document.querySelectorAll(selector);
  if (swalButtons) { // protect other pages
    swalButtons.forEach((swalButton) => {
      swalButton.addEventListener('click', () => {
        swal(options).then((value) => {
            console.log(this)
          if (value) {
            Rails.ajax({
              type: "DELETE",
              url:  `/songs/${swalButton.dataset.link}`,
              dataType: 'js',
              accept: 'js',
            })
            document.querySelector(`tr[data-link='${swalButton.dataset.link}']`).style.display = "none"
          }
        });
      });
    });
  }
};

export { initSweetalert };
export { SweetalertDelete };
