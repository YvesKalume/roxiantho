var div = [$('#1'), $('#2'), $('#3'), $('#4'),$('#5'),$('#6')]
var jo, rep, lance = 0
var colors = ['red', 'brown', 'cyan', 'blue', 'green', 'violet', 'grey']
var suivant = $('#suivant')

function color() {
    for (let i = 0; i < div.length; i++) {
        const el = div[i]
        el.attr(
            'class',
            'c2 txt bordr ' + colors[Math.floor(Math.random() * colors.length)]
        )
        div[0].text('trouve moi')
        div[1].text('trouve moi')
        div[2].text('trouve moi')
        div[3].text('trouve moi')
        div[4].text('trouve moi')
        div[5].text('trouve moi')
    }
}
color()
$('button').click(e => {
    e.preventDefault()
    if (lance === 0) {
        var chWord = setInterval(() => {
            color()
            rep = Math.floor(Math.random() * div.length)
            div[rep].text('gagnant')
        }, 250)
        setTimeout(() => {
            blackify()
            jo = div[rep]
            clearInterval(chWord)
        }, 6000)
        lance = 1
    }
})
$('.parent').click(e => {
    if (jo) {
        if (e.target.id === jo[0].id) {
            swal('Gagner', 'Réponse correcte', 'success')
            suivant.html('<a class="green txt bouton-suivant" href="stage3.html">Stage Suivant</a>')
            lance = 0
            jo = false
            color()
        } else {
            swal('Perdu', 'Réponse Incorrecte', 'error')
        }
    } else {
        swal('Attention', 'Veuillez cliquer sur play pour commencer', 'warning')
    }
})

function blackify() {
    for (let i = 0; i < div.length; i++) {
        const el = div[i]
        el.attr('class', 'c2 black txt border')
        el.html(i + 1)
    }
}

function aide() {
    var carree = $("<div class='carree'></div>")
    var noir = $("<div class='noir'></div>")
    var p = $("<p class='p'></p>")
    p.html(
        'Ce jeux consiste &agrave; retrouver le dernier emplacement du mot <b>Gagnant</b>.<br/>Jeux concu et ' +
        "realiser avec l'aide de <b>Junior Yombo Sosse</b>"
    )
    carree.prepend(
        "<div class='fermer darkred' onclick='fermer()'>&#10060;</div>"
    )
    carree.append(p)
    carree.fadeIn(1500)
    noir.fadeIn(1500)
    $('body').prepend(noir, carree)
}

function fermer() {
    $('.noir').remove()
    $('.carree').remove()
}