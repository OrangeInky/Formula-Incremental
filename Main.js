function E(x) {
    return new Decimal(x)
}

var stat = {
    additiveF: E(1),
    multiplicativeF: E(0),
    exponetF: E(0),
    Currency: E(0),
    UpgradeEffect: [E(0),E(0),E(0),E(0)],
    UpgradeCost: [E(10),E("1e3"),E("1e14"),E("1e50")],
}

function update() {
    document.getElementById("CurrencyDisplay").innerHTML = (stat.Currency).toFixed(2) + "$"
    document.getElementById("AdditiveDisplay").innerHTML = stat.additiveF;
}

function effectUpgate() {
    document.getElementById("Upgrade1Effect").innerHTML = "+" + stat.UpgradeEffect[0]
    document.getElementById("Upgrade1Cost").innerHTML = (stat.UpgradeCost[0]).toFixed(2)
}

function GainCurrency() {
    stat.Currency = stat.Currency.add(stat.additiveF.div(E(40)))
    stat.additiveF = stat.UpgradeEffect[0].add(1)
}

function buyUpgrade(x) {
    if (x==0 && stat.Currency.gt(stat.UpgradeCost[0])) {
        stat.Currency = stat.Currency.sub(stat.UpgradeCost[0])
        stat.UpgradeCost[0] =  stat.UpgradeCost[0].pow(1.01).sub(E(2).div(stat.UpgradeCost[0])).add(2);
        stat.UpgradeEffect[0] = stat.UpgradeEffect[0].add(1);
    }
    effectUpgate()
}

window.setInterval(function(){
    update()
    GainCurrency()
},25)