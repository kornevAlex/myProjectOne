const bntRun = document.querySelector('#btnRun')
const field = document.querySelector('.app')
const btnStop = document.querySelector('#btnStop')
var arr = []
var arrSum = []
var cycle
bntRun.addEventListener('click', run)

function run() {

    clearInterval(cycle)
    var m = document.getElementById('input-m').value
    var n = document.getElementById('input-n').value
    createArr(m, n)
    createTable(m, n)
    function createArr(oneLimits, twoLimits) {

        for (let i = 0; i < oneLimits; i++) {
            let inArr = []
            inArr.push(Math.floor(Math.random() * 2))
            arr.push(inArr)

            for (let j = 0; j < twoLimits - 1; j++) {
                arr[i].push(Math.floor(Math.random() * 2))
            }
        }

        return console.log(arr)
    }

    function createTable(m, n) {
        field.innerHTML = ""
        let table = document.createElement('table')

        for (let i = 0; i < m; i++) {
            let tr = document.createElement('tr')

            for (let j = 0; j < n; j++) {
                let td = document.createElement('td')
                td.textContent = arr[i][j]
                
                if(arr[i][j]){
                    td.style.color = "green"
                }
                else{
                    td.style.color = "red"
                }
                tr.append(td)
            }
            table.append(tr)
        }
        field.append(table)
    }
    function lifeCycle(arr) {
        for (let i = 0; i < arr.length; i++) {

            for (let j = 0; j < arr.length; j++) {

                let top = 0,
                    topLeft = 0,
                    topRight = 0,
                    midLeft = 0,
                    midRight = 0,
                    bot = 0,
                    botLeft = 0,
                    botRight = 0

                if (i - 1 >= 0 && j - 1 >= 0 &&
                    (arr[i - 1][j - 1] == 1 || arr[i - 1][j - 1] == 0)) {
                    topLeft = arr[i - 1][j - 1]
                }

                if (i - 1 >= 0 &&
                    (arr[i - 1][j] == 1 || arr[i - 1][j] == 0)) {
                    top = arr[i - 1][j]
                }

                if (i - 1 >= 0 && j + 1 < arr[i].length &&
                    (arr[i - 1][j + 1] == 1 || arr[i - 1][j + 1] == 0)) {
                    topRight = arr[i - 1][j + 1]
                }

                if (j - 1 >= 0 &&
                    (arr[i][j - 1] == 1 || arr[i][j - 1] == 0)) {
                    midLeft = arr[i][j - 1]
                }

                if (j + 1 <= 3 &&
                    (arr[i][j + 1] == 1 || arr[i][j + 1] == 0)) {
                    midRight = arr[i][j + 1]
                }

                if (j - 1 >= 0 && (i + 1) < arr.length &&
                    (arr[i + 1][j - 1] == 1 || arr[i + 1][j - 1] == 0)) {
                    botLeft = arr[i + 1][j - 1]
                }

                if (i + 1 < arr.length &&
                    (arr[i + 1][j] == 1 || arr[i + 1][j] == 0)) {
                    bot = arr[i + 1][j]
                }

                if (i + 1 < arr.length && j + 1 < arr[i].length &&
                    (arr[i + 1][j + 1] == 1 || arr[i + 1][j + 1] == 0)) {
                    botRight = arr[i + 1][j + 1]
                }
                let sum = top + topLeft + topRight + midLeft + midRight + bot + botLeft + botRight
                console.log(sum)

                if (arr[i][j] == 0 && sum >= 3) {
                    arr[i][j] = 1
                }

                else if (arr[i][j] == 1 && (sum > 3 || sum < 2)) {
                    arr[i][j] = 0
                }
            }
        }
    }
    cycle = setInterval(() => {
        lifeCycle(arr)
        console.log(arr)
        createTable(m, n)
    }, 1000)

    btnStop.addEventListener('click', () => {
        clearInterval(cycle)
    })
}
