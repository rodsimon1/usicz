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
          }
        });
      });
    });
  }
};

// const SweetalertClearAll = (selector, options = {}) => {
//   const swalButtons = document.querySelectorAll(selector);
//   if (swalButtons) { // protect other pages
//     swalButtons.forEach((swalButton) => {
//       swalButton.addEventListener('click', () => {
//         swal(options).then((value) => {
//             console.log(this)
//           if (value) {
//             Rails.ajax({
//               type: "DELETE",
//               url:  `/songs/${swalButton.dataset.link}`,
//               dataType: 'js',
//               accept: 'js',
//             })
//           }
//         });
//       });
//     });
//   }
// };

const playlistImported = (selector, options = {}) => {
  const swalElement = document.querySelector(selector);
  if (swalElement) { // protect other pages
     {
      swal(options);
    };
  }
};


export { initSweetalert };
export { SweetalertDelete };
// export { SweetalertClearAll };
export { playlistImported };
