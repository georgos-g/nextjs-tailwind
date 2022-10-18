const initIsotope = () => {
  let grid = document.querySelectorAll('.gallery');
  let iso;
  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: '.items',
      });
    });
  }

  // let gridMons = document.querySelectorAll('.gallery-mons');
  // if (gridMons.length >= 1) {
  //   gridMons.forEach((item) => {
  //     iso = new Isotope(item, {
  //       itemSelector: '.items',
  //       masonry: {
  //         columnWidth: '.width2',
  //       },
  //     });
  //   });
  // }

  let filtersElem = document.querySelector('.filtering');
  if (filtersElem) {
    filtersElem.addEventListener('click', function (event) {
      if (!matchesSelector(event.target, 'span')) {
        return;
      }
      let filterValue = event.target.getAttribute('data-filter');
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });
    let buttonGroups = document.querySelectorAll('.filtering');
    for (let i = 0, len = buttonGroups.length; i < len; i++) {
      let buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener('click', function (event) {
        if (!matchesSelector(event.target, 'span')) {
          return;
        }
        buttonGroup
          .querySelector('.active_category')
          .classList.remove('active_category');
        event.target.classList.add('active_category');
      });
    }
  }
};

export default initIsotope;
