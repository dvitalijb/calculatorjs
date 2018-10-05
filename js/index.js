(function() {

    let input = document.getElementById('input');
    let button = document.querySelectorAll('#button');

    let inputValue = input.value;
    let digitsone;
    let znak;
    let digitstwo;

    for (i = 0; button.length; i++) {
        button[i].addEventListener('click', cal);
    }

    function cal() {
        if ((+(this.value)) >= 0 && (+(this.value)) <= 9) {
            if (input.value === '+' || input.value.indexOf('=') !== (-1) || input.value === '-' || input.value === '*' || input.value === '/' || input.value.indexOf('Н') !== (-1)) {
                input.value = '';
            }

            input.value = input.value + this.value;

        }
        else if (this.value === 'delete') {
            input.value = input.value.slice(0, -1);

        }
        else if (this.value === '+') {
            digitsone = input.value;
            input.value = '+';
            znak = this.value;

        } else if (this.value === '-') {
            digitsone = input.value;
            input.value = '-';
            znak = this.value;

        } else if (this.value === '*') {
            digitsone = input.value;
            input.value = '*';
            znak = this.value;
        } else if (this.value === '/') {
            digitsone = input.value;
            input.value = '/';
            znak = this.value;
        }
        else if (this.value === '=') {
            digitstwo = input.value;
            if (znak === '+') {
                input.value = '=' + ((+(digitsone)) + (+(digitstwo)));
            }

            if (znak === '-') {
                input.value = '=' + ((+(digitsone)) - (+(digitstwo)));
            }

            if (znak === '*') {
                input.value = '=' + ((+(digitsone)) * (+(digitstwo)));
            }

            if (znak === '/') {
                if ((+(digitstwo)) == 0) {
                    input.value = 'На нуль ділити не можна';

                } else if ((+(digitstwo)) !== 0) {
                    input.value = '=' + ((Number(digitsone)) / (Number(digitstwo)));
                }

            }

        }
        else if (this.value === 'C') {
            input.value = '';
        }

    }
}
)();
