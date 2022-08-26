// create product page ):
const products = document.querySelector('.products');

const svgProD = `
<svg class="svgProduct" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 478.53 478.53" style="enable-background:new 0 0 478.53 478.53;" xml:space="preserve">
<g>
<g>
    <path d="M477.795,184.279c-1.765-5.431-6.458-9.389-12.108-10.209l-147.159-21.384l-65.812-133.35
        c-2.527-5.12-7.741-8.361-13.451-8.361s-10.924,3.241-13.451,8.361l-65.812,133.35L12.843,174.07
        c-5.65,0.82-10.344,4.778-12.108,10.209c-1.765,5.43-0.293,11.391,3.796,15.376l106.484,103.798L85.877,450.018
        c-0.965,5.627,1.349,11.314,5.968,14.671c4.618,3.354,10.741,3.799,15.797,1.142l131.623-69.199l131.623,69.199
        c2.195,1.153,4.592,1.723,6.979,1.723c3.11,0,6.205-0.966,8.818-2.864c4.619-3.356,6.933-9.044,5.968-14.671l-25.138-146.565
        l106.484-103.798C478.088,195.669,479.56,189.708,477.795,184.279z"/>
</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
</svg>
`;

const productsContainer = document.createElement('div');
productsContainer.classList.add('productsContainer');
productsContainer.innerHTML = `
<div class="textContent">
<h2 class="protext">PRODUCTS</h2>
</div>
<div class="productP">

<!-- 1 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/1.1.1.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Coantino</h3>
</div>
<div class="prise">
    <span>59.32$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 2 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/2.2.2.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Mim Jolien</h3>
</div>
<div class="prise">
    <span>30.01$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}    
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 3 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/3.3.3.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Lopik ko</h3>
</div>
<div class="prise">
    <span>12.62$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 4 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/5.5.5.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Yolomik</h3>
</div>
<div class="prise">
    <span>109$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD}     
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 5 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/7.7.7.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Pilo nin</h3>
</div>
<div class="prise">
    <span>45.11$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 6 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/8.8.8.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Asfeg jilop</h3>
</div>
<div class="prise">
    <span>77.77$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 7 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/si2.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Baku cigarettes</h3>
</div>
<div class="prise">
    <span>72.80$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}       
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 8 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win10.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Six sixim</h3>
</div>
<div class="prise">
    <span>135.21$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD}     
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 9 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win11.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Lop wib</h3>
</div>
<div class="prise">
    <span>175$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 10 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win12.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Fagloq</h3>
</div>
<div class="prise">
    <span>99$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}       
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 11 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win13.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Krumbach</h3>
</div>
<div class="prise">
    <span>111.95$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 12 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win14.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Wente</h3>
</div>
<div class="prise">
    <span>209$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 13 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win15.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Glenfiddich</h3>
</div>
<div class="prise">
    <span>168.42$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD}    
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 14 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win16.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Kiling W</h3>
</div>
<div class="prise">
    <span>210$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}     
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 15 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win17.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Nobilo</h3>
</div>
<div class="prise">
    <span>167.87$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 16 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win18.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>K wine</h3>
</div>
<div class="prise">
    <span>84.14$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 17 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win19.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Savege</h3>
</div>
<div class="prise">
    <span>327$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 18 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win2.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Adriana</h3>
</div>
<div class="prise">
    <span>88$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 19 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win20.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Vopiko & Amik</h3>
</div>
<div class="prise">
    <span>179.44$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}       
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 20 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win21.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Mirro W</h3>
</div>
<div class="prise">
    <span>288.02$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 21 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win5.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Black w</h3>
</div>
<div class="prise">
    <span>301$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD} ${svgProD}      
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 22 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win7.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Sicako</h3>
</div>
<div class="prise">
    <span>121$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD} ${svgProD}       
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>
<!-- 23 -->
<div class="product">
<div class="imageBox">
    <img src="./all images/product/win9.jpg" alt="Sorry">
</div>
<div class="textContainer">
    <h3>Clax w</h3>
</div>
<div class="prise">
    <span>90.90$</span>
</div>
<div class="btn-Stars">
<div class='stars'>
${svgProD} ${svgProD} ${svgProD}     
</div>
    <div class="btnProduct">
        <button>buy now</button>
    </div>
</div>
</div>

</div>

`;

products.append(productsContainer);

// product 1 ):
const btnProductB = document.querySelectorAll('.btnProduct');

btnProductB.forEach(but => {
    but.addEventListener('click' ,() => {
        window.location = 'index.html';
    })
})


//loader ):

const loader = document.querySelector('.loader');

function oneend() {
    setInterval(towend ,4500);
}

function towend() {
    loader.classList.add('end')
}

window.onload = oneend()

