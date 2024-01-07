const images = [
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
      description: "Hokkaido Flower",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
      description: "Container Haulage Freight",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
      description: "Aerial Beach View",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
      description: "Flower Blooms",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
      description: "Alpine Mountains",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
      description: "Mountain Lake Sailing",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
      description: "Alpine Spring Meadows",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
      description: "Nature Landscape",
    },
    {
      preview:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
      original:
        "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
      description: "Lighthouse Coast Sea",
    },
  ];
  
// Створення елемента розмітки галереї
  function createElementGallery(element) {
    const item = document.createElement('li');
    item.classList.add('gallery-item');

    const link = document.createElement('a');
    link.classList.add('gallery-link');
    link.setAttribute('href', element.original);
    
    const img = document.createElement('img');
    img.classList.add('gallery-image');
    img.setAttribute('src', element.preview);
    img.dataset.source = element.original;
    img.setAttribute('alt', element.description);

    link.append(img);
    item.append(link);
    markup.push(item);
  };

// Перевірка області кліка  
  function clickCheck(event) {
    event.preventDefault();
    if(event.target.nodeName === "IMG") {
    const originalPictureLink = event.target.dataset.source;
    const altPictureText = event.target.alt;
    createModalWindow(originalPictureLink, altPictureText);
    };
  };

// Створення модального вікна / прослуховування клавіатури
function createModalWindow(link, alt) {
  const modal = basicLightbox.create(`<img src="${link}" alt="${alt}" width="800" height="600">`, 
    { onShow: (modal) => {
        document.addEventListener('keydown', keyboardCheck);
      },
      onClose: (modal) => {
        document.removeEventListener('keydown', keyboardCheck);
      }
    });
  modal.show();

  // Перевірка натискання кнопок клавіатури
  function keyboardCheck(event) {
    if(event.code === 'Escape') {
      modal.close();
    };
  };
};

// Додавання розмітки в галерею
const gallery = document.querySelector('.gallery');
const markup = [];
images.forEach(createElementGallery);
gallery.append(...markup);

// Прослуховування кліків по зображенням
gallery.addEventListener('click', clickCheck);


