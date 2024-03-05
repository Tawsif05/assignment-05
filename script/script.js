const allBtn = document.getElementsByClassName('all-btn');
let selectedSits = 1;
const selectedSeats = new Set();
for (const btn of allBtn) {
    btn.addEventListener("click", function (event) {
        const seat = event.target.innerText;
        if(!selectedSeats.has(seat)){
            if (selectedSits <= 4) {

                console.log(event.target.innerText);
                const selectedContainer = document.getElementById("append-div");
                const div0 = document.createElement("div");
                const div = document.createElement('div');
                const p = document.createElement('p');
                p.innerText = event.target.innerText;
                div.appendChild(p);
                const div1 = document.createElement('div');
                const p1 = document.createElement('p');
                p1.innerText = "Economy";
                div1.appendChild(p1);
                const div2 = document.createElement('div');
                const p2 = document.createElement('p');
                p2.innerText = 550;
                div2.appendChild(p2);
                div0.appendChild(div);
                div0.appendChild(div1);
                div0.appendChild(div2);
                div0.classList.add('flex');
                div0.classList.add('justify-between');
                selectedContainer.appendChild(div0);
                selectedSit(event.target.innerText);
                selectedSits++;
                event.target.removeEventListener('click', arguments.callee);
                if(selectedSits === 5){
                    enableApplyButton();
                }
                
            }
            else {
                alert("You can select only 4 seats");
            }
        }
        else{
            alert("Sit Already Selected");
        }


    })
}

function enableApplyButton(){
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
}






function selectedSit(bgId) {
    selectedBgChange(bgId);

    const sitLeft = textToIntegerNumber("sit-left");
    const sitFinalLeft = sitLeft - 1;
    setInnerText('sit-left', sitFinalLeft);
    const totalSit = textToIntegerNumber('total-sit');
    const totalFinalSit = totalSit + 1;
    setInnerText('total-sit', totalFinalSit);
    const totalPrice = textToIntegerNumber('total-price');
    const totalFinalPice = totalPrice + 550;
    setInnerText('total-price', totalFinalPice);
    const grandTotal = textToIntegerNumber('grand-total');
    const grandFinal = grandTotal + 550;
    setInnerText('grand-total', grandFinal);


}


function toCheckValidCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponInputValue = couponInput.value;
    if (couponInputValue === 'NEW15') {
        const parentOfCoupon = document.getElementById('parent-of-coupon');
        parentOfCoupon.classList.add("hidden");
        const totalPrice = textToIntegerNumber('total-price');
        const totalFinalPice = totalPrice * 0.85;
        setInnerText('grand-total', totalFinalPice);
    }
    else if (couponInputValue === "Couple 20") {
        const parentOfCoupon = document.getElementById('parent-of-coupon');
        parentOfCoupon.classList.add("hidden");
        const totalPrice = textToIntegerNumber('total-price');
        const totalFinalPice = totalPrice * 0.80;
        setInnerText('grand-total', totalFinalPice);
    }
    else {
        alert('Please check you give a valid coupon code.Try again');
    }
}

function toGoToTheFinalPage() {
    toHiddenASection('nav-section');
    toHiddenASection('banner-section');
    toHiddenASection('second-section');
    toHiddenASection('third-section');
    toHiddenASection('big-section');
    const finalSection = document.getElementById('final-section');
    finalSection.classList.remove('hidden');

}

function toHiddenASection(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}



