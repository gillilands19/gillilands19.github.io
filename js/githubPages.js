const panelOpeners = document.querySelectorAll('.panel_link');
      const panels = document.querySelectorAll('.panel');
      const button = document.querySelectorAll('.get_date');
      
      function toggleOpen(e) {
          if (e.target.parentNode.className.includes('panel1')) {
              panels[0].classList.toggle('open');
              panels[0].classList.toggle('open-active');
          } else if (e.target.parentNode.className.includes('panel2')) {
              panels[1].classList.toggle('open');
              panels[1].classList.toggle('open-active');
          } else {
              panels[2].classList.toggle('open');
              panels[2].classList.toggle('open-active');
          }
      
      }
      function getDate(e) {
        const date = new Date();
        const formattedDate = date.toUTCString();
        console.log(formattedDate);
        alert(formattedDate);
      }

      button.forEach(button => button.addEventListener('click', getDate));
      panelOpeners.forEach(panelOpener => panelOpener.addEventListener('click', toggleOpen));
