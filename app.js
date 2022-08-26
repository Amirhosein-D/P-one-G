// aboute Box ): 
const abouteBox = document.createElement('div');
abouteBox.classList.add('abouteBox');
abouteBox.innerHTML = `
<div class="contaiber">
                <h3>Hello . Welcome to our online store (C . A . W) . <br>
                    Smoke the best cigars with us and drink the best and highest quality wine with us. <br>
                    With 25 years of experience.<br>
                    Old wines from different countries.<br>
                    And we are one of the trusted suppliers of cigars.<br>
                    And you can get marijuana from our branch in person with your identification card.
                </h3>
            </div>
            <div class="btnBox">
                <a href="#shop" class="btn">Fast sending</a>
                <a href="#" class="btn">Telephone support</a>
            </div>
`;

const aboute = document.querySelector('.aboute');
aboute.append(abouteBox);


// discount section ):
const discount = document.querySelector('.discount');

const boxDiscount = document.createElement('div');
boxDiscount.classList.add('boxDiscount');

boxDiscount.innerHTML = `
<div class="discounted">
                <div class="imageBox">
                    <img src="./all images/abouteimage/win1.jpg" alt="Sorry ):">
                </div>
                <div class="content">
                    <h3>Blue Cinvomary</h3>
                    <div class="prise">
                        <h3><del>45.65</del></h3>
                        <h3>32.99</h3>
                    </div>
                </div>
                <div class="btns">
                    <a href="#shop" class="btn">Buy Now</a>
                    <a href="#product" class="btn  Other">Other Products</a>
                </div>
            </div>

            <div class="discounted">
                <div class="imageBox">
                    <img src="./all images/abouteimage/win6.jpg" alt="Sorry ):">
                </div>
                <div class="content">
                    <h3>Victory Molin</h3>
                    <div class="prise">
                        <h3><del>78.11</del></h3>
                        <h3>63.56</h3>
                    </div>
                </div>
                <div class="btns">
                    <a href="#shop" class="btn">Buy Now</a>
                    <a href="#product" class="btn  Other">Other Products</a>
                </div>
            </div>

            <div class="discounted">
                <div class="imageBox">
                    <img src="./all images/abouteimage/win4.jpg" alt="Sorry ):">
                </div>
                <div class="content">
                    <h3>Ocarnil Vib</h3>
                    <div class="prise">
                        <h3><del>134.12</del></h3>
                        <h3>111</h3>
                    </div>
                </div>
                <div class="btns">
                    <a href="#shop" class="btn">Buy Now</a>
                    <a href="#product" class="btn  Other">Other Products</a>
                </div>
            </div>

            <div class="discounted">
                <div class="imageBox">
                    <img src="./all images/abouteimage/win8.jpg" alt="Sorry ):">
                </div>
                <div class="content">
                    <h3>Minamata</h3>
                    <div class="prise">
                        <h3><del>40.22</del></h3>
                        <h3>34.87</h3>
                    </div>
                </div>
                <div class="btns">
                    <a href="#shop" class="btn">Buy Now</a>
                    <a href="#product" class="btn  Other">Other Products</a>
                </div>
            </div>
`;
discount.append(boxDiscount);

// ather product ):
const Other = document.querySelectorAll('.Other');

Other.forEach(oth => {
    oth.addEventListener('click' , () => {
        window.location = 'indexProducts.html';
    })
})



// comment section ):
const comments = document.querySelector('.comments');

const commentSvg = `
<svg class="svgComment" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="45px" height="45px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" xml:space="preserve">
                        <g>
                            <path d="M44.3,6.5c-9,0-15.9,7-15.9,16V44c0,0.8,0.7,1.5,1.5,1.5h17c0.8,0,1.5-0.7,1.5-1.5V27
                                c0-0.8-0.7-1.5-1.5-1.5H34.4v-3c0-5,4.9-10,9.9-10h2.6c0.8,0,1.5-0.7,1.5-1.5V8c0-0.8-0.7-1.5-1.5-1.5H44.3z"/>
                            <path d="M19.5,6.5c-9,0-15.9,7-15.9,16V44c0,0.8,0.7,1.5,1.5,1.5h17c0.8,0,1.5-0.7,1.5-1.5V27
                                c0-0.8-0.7-1.5-1.5-1.5H9.6v-3c0-5,4.9-10,9.9-10h2.6c0.8,0,1.5-0.7,1.5-1.5V8c0-0.8-0.7-1.5-1.5-1.5H19.5z"/>
                        </g>
                        <path d="M30.5,8"/>
                        </svg>
`

const commentContainer = document.createElement('div');
commentContainer.classList.add('commentContainer');

commentContainer.innerHTML = `
<div class="commentBox">
            <fieldset>
                <legend>${commentSvg}</legend>
                
                <div class="imageBox">
                    <img src="./all images/comment/si3.jpg" alt="sorry">
                </div>
                <div class="textBox">
                    <h3>
                       before worship <br>
                       A cigarette makes you feel good <br>
                       Thanks (C . A . W)
                    </h3>
                </div>

            </fieldset>
        </div>

        <div class="commentBox">
            <fieldset>    
                <legend>${commentSvg}</legend>

                <div class="imageBox">
                    <img src="./all images/comment/si5.jpg" alt="sorry">
                </div>
                <div class="textBox">
                    <h3>
                       When hungover <br>
                       A cigarette makes you feel good <br>
                       Thanks (C . A . W)
                    </h3>
                </div>

            </fieldset>
        </div>

        <div class="commentBox">
            <fieldset>
                <legend>${commentSvg}</legend>

                <div class="imageBox">
                    <img src="./all images/comment/si7.jpg" alt="sorry">
                </div>
                <div class="textBox">
                    <h3>
                       After a long day <br>
                       A cigarette makes you feel good <br>
                       Thanks (C . A . W)
                    </h3>
                </div>

            </fieldset>
        </div>
`;

comments.append(commentContainer);

// shop section ):

const shop = document.querySelector('.shop');

const shopContainer = document.createElement('div');
shopContainer.classList.add('shopContainer');

shopContainer.innerHTML = `
<form action="">

<div class="shopBox">
    <fieldset class="inputeBox">
        <legend>Your name</legend>
            <input type="text" class="inpute" id="text" spellcheck="false">
        
    </fieldset>
    <fieldset class="inputeBox">
        <legend> Your number</legend>
            <input type="number" class="inpute" id="number" spellcheck="false">
       
    </fieldset>
</div>

<div class="shopBox">
    <fieldset class="inputeBox">
        <legend>Date your order</legend>
            <input type="date" class="inpute" id="date" spellcheck="false">
        
    </fieldset>
    <fieldset class="inputeBox">
        <legend> Cigarette or Wine?</legend>
        <div class="content">
            <h3>cigarette</h3>
            <input type="checkbox" class="inpute" id="checkBox1" spellcheck="false">
        </div>
        <div class="content">
            <h3>wine</h3>
            <input type="checkbox" class="inpute" id="checkBox2" spellcheck="false">
        </div>
    </fieldset>
</div>

<div class="shopBox">
    <fieldset class="inputeBox">
        <legend> Your Order</legend>
            <textarea name="" id="" cols="30" rows="2" id="order" spellcheck="false" ></textarea>
        
    </fieldset>
    <fieldset class="inputeBox">
        <legend>Your Adress</legend>
            <textarea name="" id="" cols="30" rows="2" id="addres" spellcheck="false"></textarea>
        
    </fieldset>
</div>

<div class="shopBox">
    <fieldset class="inputeBox" id="signal">
        <legend></legend>
        <div class="content">
            <h3>Banking P</h3>
            <input type="checkbox" spellcheck="false" id="checkBox3" >
        </div>
        <div class="content">
            <h3>person</h3>
            <input type="checkbox" spellcheck="false" id="checkBox4">
        </div>  
    </fieldset>
        <button class="btn">order Now</buttom>
</div>

</form>
`;
shop.append(shopContainer);

// us section ):

const us = document.querySelector('.us');

const usBox = document.createElement('div');
usBox.classList.add('usBox');

usBox.innerHTML = `
<div class="usP">
<h3>my numbers</h3>
<a href="">+437 43857 994</a>
<a href="">+33 3298 5773</a>
<a href="">+21 2354 6532</a>
<a href="">+234 45 234 22</a>
<a href="">+23 2458 209 33</a>
</div>

<div class="usP">
<h3>my locations</h3>
<a href="">india</a>
<a href="">iran</a>
<a href="">italia</a>
<a href="">bosny</a>
</div>
<div class="usP">
<h3>follow us</h3>
<a href="">youTube</a>
<a href="">telegram</a>
<a href="">instagram</a>
</div>
`;

us.append(usBox);


//loader ):

const loader = document.querySelector('.loader');

function oneend() {
    setInterval(towend ,4500);
}

function towend() {
    loader.classList.add('end')
}

window.onload = oneend()



// end ):






 




