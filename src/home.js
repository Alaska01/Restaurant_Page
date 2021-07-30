
function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph;
  }
  
  function createHome() {
    const home = document.createElement('div');
    home.classList.add('home');
  
    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef";
  
    home.appendChild(createParagraph('Great Wine Choice'));
    home.appendChild(createParagraph('Best Brands'));
  
    home.appendChild(chefImage);
    home.appendChild(
      createParagraph(
        'Order online or visit us to have a pleasurable experience!',
      ),
    );
  
    return home;
  }
  
  function loadHome() {
    const main = document.getElementById('main');
    main.textContent = '';
    main.appendChild(createHome());
  }
  
  export default loadHome;
  