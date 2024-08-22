


document.getElementById("cv-btn").addEventListener("click", function(){
    const pdfUrl = "../files/louis-porter-CV.pdf"

    const link = document.createElement("a");
    link.href = pdfUrl

    link.download = "louis-porter-CV.pdf"

    document.body.appendChild(link)

    link.click()

    document.body.removeChild(link)
})


function updateAge() {
    const birthDate = new Date("2000-10-26")
    const today = new Date()

    let age = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())){
        age--;
    }

    document.getElementById("age").innerText = age
}

window.onload = updateAge()