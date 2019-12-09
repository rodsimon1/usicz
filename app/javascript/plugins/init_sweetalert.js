import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const swalElement = document.querySelector(selector);
  if (swalElement) { // protect other pages
     {
      swal(options).then(callback);
    };
  }
};

export { initSweetalert };
