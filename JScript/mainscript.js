const deals_btn = document.querySelectorAll('.deals-btn')
const allCards = document.querySelectorAll('.tesla-deal')

// allCards.forEach((x)=> {console.log(x)})

const carData = {
    tesla: [
        { name: 'Model S', price: '$180', image: './Assets/deals-1.png', drive: 'Autopilot' },
        { name: 'Model 3', price: '$150', image: './Assets/deals-2.png', drive: 'Autopilot' },
        { name: 'Model X', price: '$200', image: './Assets/deals-3.png', drive: 'Autopilot' },
    ],

    mitsubushi: [
        { name: 'Mirage', price: '$150', image: './Assets/deals-4.png', drive: 'Manual' },
        { name: 'Xpander', price: '$180', image: './Assets/deals-5.png', drive: 'Manual' },
        { name: 'Pajero Sport', price: '$120', image: './Assets/deals-6.png', drive: 'Manual' },
    ],

    mazda: [
        { name: 'Mazda CX5', price: '$200', image: './Assets/deals-7.png', drive: 'Semipilot' },
        { name: 'Mazda CX-30', price: '$110', image: './Assets/deals-8.png', drive: 'Semipilot' },
        { name: 'Model CX9', price: '$120', image: './Assets/deals-9.png', drive: 'Semipilot' },
    ],

    toyota: [
        { name: 'Corolla', price: '$90', image: './Assets/deals-10.png', drive: 'Manual' },
        { name: 'Innova', price: '$130', image: './Assets/deals-11.png', drive: 'Manual' },
        { name: 'Fortuner', price: '$140', image: './Assets/deals-12.png', drive: 'Manual' },
    ],

    honda: [
        { name: 'Amaze', price: '$160', image: './Assets/deals-13.png', drive: 'Semipilot' },
        { name: 'Elevate', price: '$170', image: './Assets/deals-14.png', drive: 'Semipilot' },
        { name: 'City', price: '$130', image: './Assets/deals-15.png', drive: 'Semipilot' },
    ],

}


deals_btn.forEach((btn) => {
    btn.addEventListener('click', () => {
        deals_btn.forEach((select) => {
            select.classList.remove('active')
            btn.classList.add('active')
        });

        const carModel = btn.id
        const carModelData = carData[carModel]


        allCards.forEach((card, index) => {

            const model_img = card.querySelector('.model-image img')
            const brandName = card.querySelector(".model-name")
            const gearselection = card.querySelector('.geartype')
            const carPrice = card.querySelector('.price')


            model_img.src = carModelData[index].image
            brandName.innerHTML = carModelData[index].name
            gearselection.innerHTML = carModelData[index].drive
            carPrice.innerHTML = carModelData[index].price

        })
    })
})