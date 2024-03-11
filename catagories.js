let recomendeds = document.querySelector(".recomended");
let sepatu = document.querySelector(".shoes"); 
let jam = document.querySelector(".watches"); 
let jaket  = document.querySelector(".windbraker"); 
let ransel = document.querySelector(".backpacker"); 
let kaos = document.querySelector(".tshirt"); 
let jeans = document.querySelector(".longpants"); 



let recomended = [
    {
        id : 1, 
        name : 'Shoes',
        image : 'gg.jpg'
    },
    {
        id : 2,
        name : 'Watches',
        image : 'jam.jpg'
    },
    {
        id : 3,
        name : 'Windbraker',
        image : 'haha.jpg'
    },
    {
        id : 4,
        name : 'Backpacker',
        image : 'tas.jpg'
    },
    {
        id : 5,
        name : 'T-Shirt',
        image : 'baj.jpg'
    },
    {
        id : 6,
        name : 'Long Pants',
        image : 'jeans.jpg'
    }
]

let shoes = [
    {
        id : 1, 
        name: 'Compass',
        image: 'shoes1.jpg'
    },
    {
        id : 2,
        name : 'Watches',
        image : 'shoes2.jpg'
    },
    {
        id : 3,
        name: 'Adidas',
        image: 'shoes3.jpg'
    },
    {
        id : 4,
        name: 'Krisbow',
        image: 'shoes4.jpg'
    },
    {
        id : 5,
        name: 'Converse',
        image: 'shoes5.jpg'
    },
    {
        id : 6,
        name: 'SNCA',
        image: 'shoes6.jpg'
    },
    {
        id : 7,
        name: 'Shoes purple',
        image: 'shoes7.jpeg'
    },
    {
        id : 8,
        name: 'Garsel',
        image: 'shoes8.jpg'
    }
]

let watches = [
    {
        id : 1, 
        name: 'Seiko',
        image: 'watch1.jpg'
    },
    {
        id : 2,
        name : 'Casio',
        image : 'watch2.jpg'
    },
    {
        id : 3,
        name: 'Casio ',
        image: 'watch3.jpg'
    },
    {
        id : 4,
        name: 'Casio Iluminator',
        image: 'watch4.jpg'
    },
    {
        id : 5,
        name: 'Casio Iluminator',
        image: 'watch5.jpg'
    },
    {
        id : 6,
        name: 'Skagen',
        image: 'watch6.jpeg'
    },
    {
        id : 7,
        name: 'Casio Quartz',
        image: 'watch7.jpeg'
    },
    {
        id : 8,
        name: 'Seiko Chronograph',
        image: 'watch8.jpeg'
    }
]

let windbraker = [
    {
        id : 1, 
        name: 'Cool Windbreaker',
        image: 'jacket1.jpg'
    },
    {
        id : 2,
        name : 'Butterfly Puffer',
        image : 'jacket2.jpg'
    },
    {
        id : 3,
        name: 'Orange Windbreaker',
        image: 'jacket3.jpg'
    },
    {
        id : 4,
        name: 'Red Parka',
        image: 'jacket4.jpg'
    },
    {
        id : 5,
        name: 'Amazing Windbreaker',
        image: 'jacket5.jpg'
    },
    {
        id : 6,
        name: 'Windbreaker',
        image: 'jacket6.jpg'
    },
    {
        id : 7,
        name: 'Classic Windbreaker',
        image: 'jacket7.jpeg'
    },
    {
        id : 8,
        name: 'Windbreaker Parka',
        image: 'jacket8.webp'
    }
]

let backpacker = [
    {
        id : 1, 
        name: 'Compass',
        image: 'bag1.jpg'
    },
    {
        id : 2,
        name : 'Watches',
        image : 'bag2.jpg'
    },
    {
        id : 3,
        name: 'Adidas',
        image: 'bag3.jpeg'
    },
    {
        id : 4,
        name: 'Krisbow',
        image: 'bag4.jpg'
    },
    {
        id : 5,
        name: 'Converse',
        image: 'bag5.jpg'
    },
    {
        id : 6,
        name: 'SNCA',
        image: 'bag6.jpg'
    },
    {
        id : 7,
        name: 'Shoes purple',
        image: 'bag7.jpg'
    },
    {
        id : 8,
        name: 'Garsel',
        image: 'bag8.jpg'
    }
]

let tshirt = [
    {
        id : 1, 
        name: 'Compass',
        image: 'shirt1.jpeg'
    },
    {
        id : 2,
        name : 'Watches',
        image : 'shirt2.jpeg'
    },
    {
        id : 3,
        name: 'Adidas',
        image: 'shirt3.jpeg'
    },
    {
        id : 4,
        name: 'Krisbow',
        image: 'shirt4.jpeg'
    },
    {
        id : 5,
        name: 'Converse',
        image: 'shirt5.jpeg'
    },
    {
        id : 6,
        name: 'SNCA',
        image: 'shirt6.jpeg'
    },
    {
        id : 7,
        name: 'Shoes purple',
        image: 'shirt7.jpeg'
    },
    {
        id : 8,
        name: 'Garsel',
        image: 'shirt8.webp'
    }
]

let longpants = [
    {
        id : 1, 
        name: 'Compass',
        image: 'pants1.webp'
    },
    {
        id : 2,
        name : 'Watches',
        image : 'pants2.jpeg'
    },
    {
        id : 3,
        name: 'Adidas',
        image: 'pants3.jpeg'
    },
    {
        id : 4,
        name: 'Krisbow',
        image: 'pants4.jpeg'
    },
    {
        id : 5,
        name: 'Converse',
        image: 'pants5.webp'
    },
    {
        id : 6,
        name: 'SNCA',
        image: 'pants6.jpeg'
    },
    {
        id : 7,
        name: 'Shoes purple',
        image: 'pants7.webp'
    },
    {
        id : 8,
        name: 'Garsel',
        image: 'pants8.jpg'
    }
]






function populateItems(items, container) {
    items.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('mt-5','col-sm-3','offset-1'  );
       newDiv.style = ' width : 12rem;'
        newDiv.innerHTML = `
            <div class="card text-center border-dark " style=" height: 90%;">
                <a  onclick="addToBrand(${key})" style="height: 100%;">
                <div class="card-content">
                    <img src="brand/${value.image}" class="card-img-top" style="height: 80%;" alt="...">
                    <div class="card-body text-bg-dark p-2" style="height: 20%;">
                        <span class="card-title h6" style="font-size: 0.8em; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${value.name}</span>
                    </div>
                </div>
                </a>
            </div>
        `;
        container.appendChild(newDiv);
    });
}

populateItems(shoes, sepatu);
populateItems(recomended, recomendeds);
populateItems(watches, jam);
populateItems(windbraker, jaket);
populateItems(tshirt, kaos);
populateItems(longpants, jeans);
populateItems(backpacker, ransel);




