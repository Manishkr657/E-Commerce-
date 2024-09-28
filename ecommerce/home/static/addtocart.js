
const product = [
    //shoes
    {
        id: 0,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80',
        title: 'WHITE SNEAKER',
        price: 4,
    },
    {
        id: 1,
        image: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?cs=srgb&dl=pexels-pixabay-267301.jpg&fm=jpg',
        title: 'RED NIKE SPORTS',
        price: 7,
    },
    //t-shirt
    {
        id: 2,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51jXxbcCQIL._UL1056_.jpg',
        title: 'T-shirt',
        price: 4,
    },
    {
        id: 3,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61-jBuhtgZL._UL1500_.jpg',
        title: 'T-shirt',
        price: 12,
    },
    //jeans
    {
        id: 4,
        image: 'https://img3.exportersindia.com/product_images/bc-full/2020/7/7516909/mens-slim-fit-jeans-1596099517-5538051.jpeg',
        title: 'SLIM FIT LIGHT BLUE',
        price: 4,
    },
    {
        id: 5,
        image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7633389/2019/3/20/4a2d2c74-afff-4a85-ab4f-666b797fa9d41553074656659-ether-Men-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Je-1.jpg',
        title: 'BLUE JEANS',
        price: 7,
    },
    //watch
    {
        id: 6,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71UXbfMHImS._UY445_.jpg',
        title: 'BLACK ANALOG',
        price: 4,
    },
    {
        id: 7,
        image: 'https://staticimg.titan.co.in/Titan/Catalog/90156AP01_1.jpg?impolicy=pqmed&imwidth=640',
        title: 'TITAN TALK',
        price: 7,
    },
    //smart phone
    {
        id: 8,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/714Kvqx5WHL._SX679_.jpg',
        title: 'Oppo',
        price: 210,
    },
    {
        id: 9,
        image: 'https://cdn1.smartprix.com/rx-i6USbuiP8-w1200-h1200/6USbuiP8.jpg',
        title: 'TECHNO',
        price: 202,
    },
    //television
    {
        id: 10,
        image: 'https://www.pngall.com/wp-content/uploads/5/Full-HD-LED-TV-PNG-Picture.png',
        title: 'LED Full HD',
        price: 290,
    },
    {
        id: 11,
        image: 'https://www.pngitem.com/pimgs/m/444-4448897_transparent-hd-tv-png-60-inches-led-tv.png',
        title: 'TRANSPARENT HD',
        price: 310,
    },
    //Hoodies
    {
        id: 12,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61YWB-llUbL._UL1500_.jpg',
        title: 'Cotton hoodies',
        price: 4,
    },
    {
        id: 13,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51sL-5sJ7hL._UX425_.jpg',
        title: 'ADRO MEN',
        price: 7.5,
    },
    //Dinner set
    {
        id: 14,
        image: 'https://cdn.shopify.com/s/files/1/0632/1150/3847/products/20220827_184657000_iOS.jpg?v=1662613270&width=533',
        title: 'GOLD ROSES',
        price: 6,
    },
    {
        id: 15,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61ZuOqNoGBL._SX425_.jpg',
        title: 'NAYASA PRINTED',
        price: 5,
    },
    //Blankets
    {
        id: 16,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/913Tb1K+UEL._SX425_.jpg',
        title: 'woolen',
        price: 4,
    },
    {
        id: 17,
        image: 'https://5.imimg.com/data5/IM/ZR/XL/SELLER-14551930/2-ply-mink-blankets-500x500.jpg',
        title: 'mutlticolor',
        price: 7,
    },
    //Laptop
    {
        id: 18,
        image: 'https://cdn.thewirecutter.com/wp-content/media/2022/07/laptop-under-500-2048px-acer-1.jpg',
        title: 'Acer',
        price: 480,
    },
    {
        id: 19,
        image: 'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9520/media-gallery/black/laptop-xps-9520-t-black-gallery-4.psd?fmt=pjpg&pscan=auto&scl=1&wid=3491&hei=2077&qlt=100,1&resMode=sharp2&size=3491,2077&chrss=full&imwidth=5000',
        title: 'Dell',
        price: 520,
    },
    //Microwave
    {
        id: 20,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61zWYrEYtsL._SX679_.jpg',
        title: 'panasonic',
        price: 412,
    },
    {
        id: 21,
        image: 'https://www.lg.com/in/images/microwave-ovens/md07514180/gallery/MC2887BFUM-microwave-ovens-Front-view-D-01.jpg',
        title: 'LG',
        price: 415,
    },
    //Coffee maker
    {
        id: 22,
        image: 'https://images.philips.com/is/image/philipsconsumer/72dbb6e1509a4cacb631ad1900d54b9e?wid=420&hei=360&$jpglarge$',
        title: 'philips',
        price: 65,
    },
    {
        id: 23,
        image: 'https://media.istockphoto.com/id/524908249/photo/coffee-blender-and-boiler-machine-in-kitchen-interior.jpg?s=612x612&w=0&k=20&c=0JWEuctoshrvOj-tRACbLqZH5wicdT9xOCe7zeEULYs=',
        title: 'coffee Blender',
        price: 70,
    },
    //Bed
    {
        id: 24,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41tCT+QZpIL.jpg',
        title: 'Deckup',
        price: 450,
    },
    {
        id: 25,
        image: 'https://wakefitdev.gumlet.io/img/engineered-wood-bed/petra-queen/storage/1.jpg?w=732',
        title: 'Wakefit',
        price: 466,
    },
    //Air Conditioner
    {
        id: 26,
        image: 'https://m.economictimes.com/thumb/msid-91980641,width-1200,height-900,resizemode-4,imgsize-6188/best-wi-fi-enabled-smart-air-conditioners-under-rs-45000.jpg',
        title: 'WIFI AC',
        price: 545,
    },
    {
        id: 27,
        image: 'https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2018/01/air-conditioner-india-feature.jpg',
        title: 'AC',
        price: 565,
    },
    //Book
    {
        id: 28,
        image: 'https://thoughtcatalog.com/wp-content/uploads/2013/11/manssearchformeaning.jpg?w=1920&h=1280&crop=1',
        title: 'BOOK',
        price: 4,
    },
    {
        id: 29,
        image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780671201593/story-of-philosophy-9780671201593_hr.jpg',
        title: 'BOOK',
        price: 7,
    },
    //Bag
    {
        id: 30,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61iR9NMcKpL._UL1280_.jpg',
        title: 'BAG',
        price: 45,
    },
    {
        id: 31,
        image: 'https://assets.ajio.com/medias/sys_master/root/20221215/9hWy/639a245df997ddfdbdd3f267/-473Wx593H-460754561-grey-MODEL.jpg',
        title: 'BAG',
        price: 55,
    },
    //Sarees
    {
        id: 32,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/12/GM/RI/YB/53480653/cotton-designer-saree-for-ladies-500x500.jpg',
        title: 'Saree',
        price: 24,
    },
    {
        id: 33,
        image: 'https://rukminim1.flixcart.com/image/832/832/kn97te80/sari/l/d/n/free-1068-k-shaibo-saree-unstitched-original-imagfz7jpaquwduy.jpeg?q=70',
        title: 'Saree',
        price: 27,
    },
    //Washing Machine
    {
        id: 34,
        image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71A2wRV96mL._SX466_.jpg',
        title: 'BOSH',
        price: 44,
    },
    {
        id: 35,
        image: 'https://www.lg.com/in/images/washing-machines/md07518535/gallery/FHV1408ZWB-Washing-Machines-Left-View-Open-D-07.jpg',
        title: 'LG',
        price: 57,
    },
    
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}