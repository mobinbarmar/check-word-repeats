const io = require('fs');

checkRepeats = () => {
    const contents = io.readFileSync('mobin.txt', 'utf-8').toLowerCase()


    const arr = contents.split(' ')
    newArr = []
    deletedDot = []
    deletedCama = []

    for (const ar of arr) {
        deletingDot = ar.split('.')
        deletedDot.push(deletingDot[0])
    }
    for (const ar of deletedDot) {
        deletingCama = ar.split(',')
        deletedCama.push(deletingCama[0])
    }

    
    // console.log(deletedPrual);
    const arrCoppy = [...deletedCama]

    restrictedWords = ['it', 'is', 'that', 'the', 'this', 'will', 'i','not', 'of', 'in', 'some', 'to']

    repeatArr = []
    reapeatNum = -1
    flag = false

    for (const word of arrCoppy) {
        for (const secondWord of arrCoppy) {
            if (word == secondWord) {
                for (let i = 0; i < repeatArr.length; i++) {
                    if (repeatArr[i].word == word)
                        flag = true
                }
                reapeatNum++

            }
        }
        if (!flag && restrictedWords.indexOf(word) === -1) {
            if(reapeatNum > 1){
                repeatArr.push({
                    word,
                    reapeatNum
                })
            }
        }
        reapeatNum = 0
    }

    io.writeFileSync('checkedFile.json', JSON.stringify(repeatArr), 'utf-8')
}

checkRepeats()