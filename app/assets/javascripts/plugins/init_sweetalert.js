import swal from 'sweetalert';

const initSweetalert = (selector, options = {}) => {
  const swalElement = document.querySelector(selector);
  if (swalElement) { // protect other pages
     {
      swal(options);
    };
  }
};

export { initSweetalert };
