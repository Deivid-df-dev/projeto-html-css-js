
const abacate = document.querySelector(".aa")
const selectOptions = document.querySelector(".select-options")

function converter() {
    const inputcaptador = document.querySelector(".captador").value
    const coinvalordolar = document.querySelector(".coin-valor-dolar")
    const coinvalor = document.querySelector(".coin-valor")

    const dolar = 5.20
    const euro = 6.05
    const bitcon = 358.00
    const libra = 2.00

    if (selectOptions.value == "dolar") {
        coinvalordolar.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "USD"
            }).format(
                inputcaptador / dolar)
    }
    if (selectOptions.value == "euro") {
        coinvalordolar.innerHTML = new Intl.NumberFormat("de-DE",
            {
                style: "currency",
                currency: "EUR"
            }).format(
                inputcaptador / euro)
    }

    if (selectOptions.value == "bitcoin") {
        coinvalordolar.innerHTML = new Intl.NumberFormat("en-US",
            {
                style: "currency",
                currency: "BTC"
            }).format(
                inputcaptador / bitcon)
    }

    if (selectOptions.value == "libra") {
        coinvalordolar.innerHTML = new Intl.NumberFormat("en-GB",
            {
                style: "currency",
                currency: "GBP"
            }).format(
                inputcaptador / libra)

    coinvalor.innerHTML = new Intl.NumberFormat("PT-BR",
        {
            style: "currency",
            currency: "BRL"
        }).format(
            inputcaptador)
        }}

function muda() {
    const coinname = document.getElementById("coin-name")
    const coinimg = document.querySelector(".coin-img")

    if (selectOptions.value == "dolar") {
        coinname.innerHTML = "dólar americano"
        coinimg.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectOptions.value == "euro") {
        coinname.innerHTML = "euro"
        coinimg.src = "./assets/euro.png"
    }

    if (selectOptions.value == "bitcoin") {
        coinname.innerHTML = "bitcoin"
        coinimg.src = "./assets/bitcoin.png"
    }

      if (selectOptions.value == "libra") {
        coinname.innerHTML = "libra esterlina"
        coinimg.src = "https://github.com/Claudiorobmaia/conversordemoedas/blob/main/assets/libra.png?raw=true"
      }

    converter()

}

selectOptions.addEventListener("change", muda)

abacate.addEventListener("click", converter)

