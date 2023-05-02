;(function () {
	transformicons.add('.tcon')

	document.querySelector('.toggle-menu').addEventListener('click', function () {
		document.querySelector('.main-container').classList.toggle('open')
	})
})()

function sumar(num1, num2) {
	return num1 + num2
}

function esPrimo(numero) {
	if (numero == 0 || numero == 1 || numero == 4) return false
	for (let x = 2; x < numero / 2; x++) {
		if (numero % x == 0) return false
	}
	// Si no se pudo dividir por ninguno de los de arriba, sí es primo
	return true
}

function esPar(numero) {
	if (numero % 2 == 0) {
		return true
	} else {
		return false
	}
}

function ejecutar() {
	let num1, num2

	num1 = prompt('Por favor, teclee un primer número entre 1 y 50: ', 20)

	num2 = prompt('Por favor, teclee un segundo número entre 1 y 50: ', 10)

	if (isNaN(num1) || isNaN(num2) || num1 < 1 || num1 > 50 || num2 < 1 || num2 > 50) {
		alert('¡Los valores introducidos tienen que ser números enteros positivos entre 1 y 50!')
	} else {
		num1 = parseInt(num1)

		num2 = parseInt(num2)

		let result = ''

		result += 'La suma de ' + num1 + ' y ' + num2 + ' es: ' + sumar(num1, num2) + '\n'
		result += 'El ' + num1

		if (!esPrimo(num1)) {
			result += ' no'
		}

		result += ' es primo '

		if (num1 !== num2) {
			result += 'y el ' + num2

			if (!esPrimo(num2)) {
				result += ' no'
			}

			result += ' es primo \nEl ' + num1 + ' es '

			if (!esPar(num1)) {
				result += 'impar'
			} else {
				result += 'par'
			}

			result += ' y el ' + num2 + ' es '

			if (!esPar(num2)) {
				result += 'impar'
			} else {
				result += 'par'
			}

			result += '\n'
			let cont = 0

			if (num1 < num2) {
				for (let i = num1; i <= num2; i++) {
					if (i % 2 === 0) {
						result += i
						cont++
					} else if (i < num2 - 1 && i !== num1) {
						result += '\t'
					}

					if (cont === 13) {
						cont = 0
						result += '\n'
					}
				}
			} else {
				for (let i = num1; i >= num2; i--) {
					if (i % 2 !== 0) {
						result += i
						cont++
					} else if (i > num2 && i !== num1) {
						result += '\t'
					}

					if (cont === 13) {
						cont = 0
						result += '\n'
					}
				}
			}
		} else {
			result += '\nEl ' + num1

			if (!esPar(num1)) {
				result += ' impar '
			} else {
				result += ' par '
			}

			result += '\nRango: ' + num1
		}

		alert(result)
	}
}
