const firstButton = document.getElementById( "Button_1" )
const secondButton = document.getElementById( "Button_2" )

firstButton.addEventListener( "click", (event) => {
    console.info("hello")
})

secondButton.addEventListener( "click", (event) => {
    console.warn("warning")
})