class Perceptron {
    constructor() {
        this.learningRate = 0.1;
        this.weights = new Array(2);
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] = Math.random() * (1 - (-1)) + (-1)
            
        }

    }

    guess(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += inputs[i] * this.weights[i]
        }
        let output = sign(sum);
        return output
    }

    train(inputs, target) {
        let guess = this.guess(inputs);
        let error = target - guess;

        // Tune all the weights 
        for (let i = 0; i < this.weights.length; i++) {
            this.weights[i] += error * inputs[i] * this.learningRate;
        }

    }
    
}
function sign(n) {
    if (n >= 0) {
        return 1;
    } else {
        return -1;
    }
}

function randomIntBetween() {
    random = random(1)
}