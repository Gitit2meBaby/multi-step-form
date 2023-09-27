
let selectedPlan
let isPlanTimeClicked = false
let isOnlineClicked = false
let isStorageClicked = false
let isCustomClicked = false

//set the plan time as monthly or yearly (pass isClicked for maths later on)
const planTimeToggle = document.querySelector('#switch')
planTimeToggle.addEventListener('click', () => {
    const cardDropdowns = document.querySelectorAll('.yearly-dropdown')
    cardDropdowns.forEach((dropdown) => {
        dropdown.classList.toggle('hidden')
    })

    isPlanTimeClicked = !isPlanTimeClicked;

    const arcadePrice = document.querySelector('#arcadePrice')
    const advancedPrice = document.querySelector('#advancedPrice')
    const proPrice = document.querySelector('#proPrice')

    if (isPlanTimeClicked) {
        arcadePrice.textContent = '$90/yr'
        advancedPrice.textContent = '$120/yr'
        proPrice.textContent = '$150/yr'
    } else {
        arcadePrice.textContent = '$9/mo'
        advancedPrice.textContent = '$12/mo'
        proPrice.textContent = '$15/mo'
    }

    updatePlanTime(isPlanTimeClicked)

})



// choosing the plan type and passing the data-plan attribute
const cards = document.querySelectorAll('.card');
cards.forEach((card) => {
    card.addEventListener('click', (e) => {
        cards.forEach((otherCard) => {
            otherCard.classList.remove('active-card');
        });

        card.classList.add('active-card');

        const dataPlan = card.getAttribute('data-plan');
        selectedPlan = dataPlan
        // updateSelectedPlan(selectedPlan);
    });
});


const onlineService = document.querySelector('#onlineService')
onlineService.addEventListener('click', () => {
    const containerChosen = onlineService.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isOnlineClicked = !isOnlineClicked;
})

const storage = document.querySelector('#storage')
storage.addEventListener('click', () => {
    const containerChosen = storage.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isStorageClicked = !isStorageClicked;
})

const custom = document.querySelector('#custom')
custom.addEventListener('click', () => {
    const containerChosen = custom.closest('.radio-container')
    containerChosen.classList.toggle('active-card')
    isCustomClicked = !isCustomClicked;
})


function updatePlanTime(isPlanTimeClicked) {
    const onlineAddOn = document.querySelector('#onlineAddOn')
    const storageAddOn = document.querySelector('#storageAddOn')
    const customAddOn = document.querySelector('#customAddOn')
    if (isPlanTimeClicked) {
        onlineAddOn.textContent = '+10/yr'
        storageAddOn.textContent = '+$20/yr'
        customAddOn.textContent - '+$20/yr'
    } else {
        onlineAddOn.textContent = '+1/yr'
        storageAddOn.textContent = '+$2/yr'
        customAddOn.textContent - '+$2/yr'
    }
}








// BUTTONS FOR PLAN SECTION
const nextBtnPlan = document.querySelector('#nextBtnPlan')
nextBtnPlan.addEventListener('click', () => {


    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    planSection.classList.add('hidden')
    planSelection.classList.remove('selected')
    addOnsSection.classList.remove('hidden')
    addOnsSelection.classList.add('selected')


})

const backBtnPlan = document.querySelector('#backBtnPlan')
backBtnPlan.addEventListener('click', () => {
    const infoSelection = document.querySelector('#infoSelection')
    const infoSection = document.querySelector('#infoSection')
    infoSection.classList.remove('hidden')
    infoSelection.classList.add('selected')

    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    planSection.classList.add('hidden')
    planSelection.classList.remove('selected')

})

const nextBtnAddOns = document.querySelector('#nextBtnAddOns')
nextBtnAddOns.addEventListener('click', () => {
    const summarySelection = document.querySelector('#summarySelection')
    const summarySection = document.querySelector('#summarySection')

    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    addOnsSection.classList.add('hidden')
    addOnsSelection.classList.remove('selected')
    summarySection.classList.remove('hidden')
    summarySelection.classList.add('selected')

    console.log(selectedPlan, isPlanTimeClicked, isOnlineClicked, isStorageClicked, isCustomClicked)
})

const backBtnAddOns = document.querySelector('#backBtnAddOns')
backBtnAddOns.addEventListener('click', () => {
    const addOnsSelection = document.querySelector('#addOnsSelection')
    const addOnsSection = document.querySelector('#addOnsSection')

    addOnsSection.classList.add('hidden')
    addOnsSelection.classList.remove('selected')

    const planSelection = document.querySelector('#planSelection')
    const planSection = document.querySelector('#planSection')
    planSection.classList.remove('hidden')
    planSelection.classList.add('selected')

})





