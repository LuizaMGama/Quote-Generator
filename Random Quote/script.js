function generate(){
    var quotes = {
        "- Friedrich Nietzsche" : '"É preciso ter o caos dentro de si para dar a luz à uma estrela dançante."',
        " - Heráclito" : '"Ninguém pode entrar duas vezes no mesmo rio, pois quando nele se entra novamente, não se encontra as mesmas águas, e o próprio ser já se modificou. Assim, tudo é regido pela dialética, a tensão e o revezamento dos opostos. Portanto, o real é sempre fruto da mudança, ou seja, do combate entre os contrários."',
        "- Foucault" : '"Precisamos resolver nossos monstros secretos, nossas feridas clandestinas, nossa insanidade oculta. Não podemos nunca esquecer que os sonhos, a motivação, o desejo de ser livre nos ajudam a superar esses monstros, vencê-los e utilizá-los como servos da nossa inteligência. Não tenha medo da dor, tenha medo de não enfrentá-la, criticá-la, usá-la."',
        " - Henry Thoreau" : '“A felicidade é como uma borboleta: quanto mais você tenta apanhá-la, mais ela se afasta de você. Mas se você dirigir sua atenção para outras coisas, ela virá e pousará suavemente no seu ombro.”',
        " - Friedrich Nietzsche" : '"E aqueles que foram vistos dançando foram julgados insanos por aqueles que não podiam escutar a música."',
        " - Cícero" : '"Não basta conquistar a sabedoria, é preciso usá-la."',
        " - Immanuel Kant" : '"Acredite em milagres, mas não dependa deles."',
        " - Aristóteles" : '"O sábio nunca diz tudo o que pensa, mas pensa sempre tudo o que diz."',
        " - Shopenhauer" : '"Apenas quando se está só é que se está livre […] Cada um fugirá, suportará ou amará a solidão na proporção exata do valor da sua personalidade. Pois, na solidão, o indivíduo mesquinho sente toda a sua mesquinhez, o grande espírito, toda a sua grandeza; numa palavra: cada um sente o que é."',
        " - Santo Agostinho" : '"Não há lugar para a sabedoria onde não há paciência"."'
    }
        var authors = Object.keys(quotes);

        var author = authors[Math.floor(Math.random() * authors.length)];

        console.log(authors);

        var quote = quotes[author];

        document.getElementById("quote").innerHTML = quote;
        document.getElementById("author").innerHTML = author;
}