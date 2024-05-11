// Soldier
class Soldier {

    constructor(health = 100, strength = 50) {

        this.health = health
        this.strength = strength
    }

    attack() {

        return this.strength

    }

    recieveDamage(damage) {

        this.health -= damage

    }


}

// Viking
class Viking extends Soldier {

    constructor(name = "Beowulf", health = 120, strength = 70) {
        super(health, strength)
        this.name = name



    }


    receiveDamage(damage) {

        this.health -= damage
        return this.health > 0 ? this.name + " has received " + damage + " points of damage" : this.name + " has died in act of combat"

    }

    battleCry() {

        return "Odin Owns You All!"
    }


}

// Saxon
class Saxon extends Soldier {


    constructor(health = 90, strength = 40) {


        super(health, strength)


    }

    receiveDamage(damage) {

        this.health -= damage
        return this.health > 0 ? "A Saxon has received " + damage + " points of damage" : "A Saxon has died in act of combat"

    }



}


const saxon1 = new Saxon()

const viking1 = new Viking()

console.log(saxon1.health)

console.log(saxon1.health)





// War
class War {

    constructor() {

        this.vikingArmy = []
        this.saxonArmy = []


    }

    addViking(viking) {

        this.vikingArmy.push(viking)

    }

    addSaxon(Saxon) {

        this.saxonArmy.push(Saxon)

    }


    vikingAttack() {
        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            let saxonAttacked = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))]
            let vikingAttacking = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))]
            let message = saxonAttacked.receiveDamage(vikingAttacking.strength)
            if (saxonAttacked.health <= 0) {

                this.saxonArmy.splice(this.saxonArmy.indexOf(saxonAttacked), 1)

            }

            return message

        }else{
            return "ONE OF THE ARMIES HAS BEEN DEFEATED, GUESS THERE IS NO MORE WAR >:("

        }
    }


    saxonAttack() {

        if (this.saxonArmy.length > 0 && this.vikingArmy.length > 0) {
            let saxonAttacking = this.saxonArmy[Math.floor(Math.random() * (this.saxonArmy.length - 1))];
            let vikingAttacked = this.vikingArmy[Math.floor(Math.random() * (this.vikingArmy.length - 1))];
            let message = vikingAttacked.receiveDamage(saxonAttacking.strength)
            if (vikingAttacked.health <= 0) {

                this.vikingArmy.splice(this.vikingArmy.indexOf(vikingAttacked), 1)

            }

            return message
        }else{

            return "ONE OF THE ARMIES HAS BEEN DEFEATED, GUESS THERE IS NO MORE WAR >:("
        }

    }



    showStatus() {

        return this.vikingArmy.length === 0? "Saxons have fought for their lives and survive another day...": this.saxonArmy.length === 0?  "Vikings have won the war of the century!": "Vikings and Saxons are still in the thick of battle."

    }

}



const theWarElectricBoogaloo = new War()

theWarElectricBoogaloo.addViking(viking1)
theWarElectricBoogaloo.addViking(new Viking())
theWarElectricBoogaloo.addViking(new Viking())
theWarElectricBoogaloo.addViking(new Viking())

theWarElectricBoogaloo.addSaxon(saxon1)
theWarElectricBoogaloo.addSaxon(new Saxon(100, 120))
theWarElectricBoogaloo.addSaxon(new Saxon())
theWarElectricBoogaloo.addSaxon(new Saxon())


console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingAttack())
console.log(theWarElectricBoogaloo.vikingArmy)
console.log(theWarElectricBoogaloo.saxonArmy)
console.log(theWarElectricBoogaloo.showStatus())