

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(Image, Title,url){
        this.image = Image;
        this.title = Title;
        this.url = url;
    };
      
    static Start(arr){
        if (arr && arr.length > 0) {
            Carousel._arr = arr;
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Next();
            Carousel._interval = setInterval(Carousel.Next, 2000);
        } else {
            throw "O método Start precisa de um Array com itens.";
        }
    };

    static Next(){
        const carouselImage = document.getElementById('carousel');
        const carouseltitle = document.getElementById('carousel-title');

        if(!carouselImage || !carouseltitle){
            console.error('Elementos do carrosesel não encontrados!');
        };

        let carouselItem = Carousel._arr[Carousel._sequence];

        carouselImage.style.backgroundImage = `url(./img/${carouselItem.image})`;
        carouselImage.style.backgroundPosition = "center";
        carouselImage.style.backgroundSize = "cover";
        carouselImage.style.width = "50%";             
        carouselImage.style.margin = "0 auto";

        carouseltitle.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    };
};
