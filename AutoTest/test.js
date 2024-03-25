//Задача номер 1
describe('1. Factorial', () => {
    describe('Имеет базовое условие для функции с рекурсией', () => {

            it('Проверка условия', () => {
                assert.strictEqual(factorial(-1), 1)
                assert.strictEqual(factorial(0), 1);
                assert.strictEqual(factorial(1), 1);
            });

    })

    describe('Считает факториал переданного в функию числа', () => {

        it('Подставление значений', () => {
            assert.strictEqual(factorial(6), 720);
            assert.strictEqual(factorial(5), 120);
            assert.strictEqual(factorial(4), 24);
            assert.strictEqual(factorial(3), 6);
        });

    });
});

//Задача номер 2
describe('2. StringLength', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotString(stringLength(12321), false)
            });

    })

    describe('Считает длину самого длинного слова в строке', () => {

        it('Подставление значений', () => {
            assert.strictEqual(stringLength('adfsds sss ww'), 6);
            assert.strictEqual(stringLength('EGfsdSs aas xxzxz'), 7);
            assert.strictEqual(stringLength('wwwD dS S'), 4);
            assert.strictEqual(stringLength('W11S sqqws saas'), 5);
        });

    });
});


//Задача номер 3
describe('3. SubArrayMax', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotArray(subArrayMax('[1, 2, 3, 4]'), false)
            });

    })

    describe('Возвращает массив состоящий из максимальных элементов данных подмассивов', () => {

        it('Подставление значений', () => {
           assert.deepEqual(subArrayMax([[14, 2, -1], [55, 23, 11, -11], [2, 7, 1]]), [14, 55, 7]);
           assert.deepEqual(subArrayMax([[1, 2, 3], [4, 5], [6, 7, 8, 9]]), [3, 5, 9]);
           assert.deepEqual(subArrayMax([[7, -2, 12], [6, 2], [16, 67, 18, -9]]), [12, 6, 67]); 
           assert.deepEqual(subArrayMax([[3, 1, 1.5], [4, 1], [27, 12, -3, 8]]), [3, 4, 27]); 
        });

    });
});


//Задача номер 4
describe('4. MaxLengthString', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotString(maxLengthString(12321), false)
            });

    })

    describe('Указывает строке максимальную длинну', () => {

        it('Подставление значений', () => {
            assert.strictEqual(maxLengthString('Helloooo', 6), 'Helloo...');
            assert.strictEqual(maxLengthString('Beautifully', 3), 'Bea...');
            assert.strictEqual(maxLengthString('Working', 4), 'Work...');
            assert.strictEqual(maxLengthString('Prototype', 5), 'Proto...');
        });

    });
});


//Задача номер 5
describe('5. UpRegister', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotString(upRegister(12321), false)
            });

    })

    describe('Приводит первый символ строки к верхнему регистру', () => {

        it('Подставление значений', () => {
            assert.strictEqual(upRegister('heLlo boB', 6), 'Hello Bob');
            assert.strictEqual(upRegister('beaUtiFuLLy dAys', 3), 'Beautifully Days');
            assert.strictEqual(upRegister('woRkInG sHiP', 4), 'Working Ship');
            assert.strictEqual(upRegister('prOtOtYPE oBJECT', 5), 'Prototype Object');
        });

    });
});


//Задача номер 6
describe('6. CopyElByArray', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotArray(copyElByArray('[1, 2, 3, 4]'), false)
            });

    })

    describe('Возвращает массив состоящий из максимальных элементов данных подмассивов', () => {

        it('Подставление значений', () => {
           assert.deepEqual(copyElByArray([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
           assert.deepEqual(copyElByArray([2, 4, 1], [3, 6], 0), [2, 4, 1, 3, 6]);
           assert.deepEqual(copyElByArray([1, 4], [8, 2, 3, 5], 2), [8, 2, 1, 4, 3, 5]);
           assert.deepEqual(copyElByArray([9, 7, 5, 1, 4], [11, 23], 3), [11, 23, 9, 7, 5, 1, 4 ]);
        });

    });
});


//Задача номер 7
describe('7. RemoveFalseValue', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotArray(removeFalseValue('[1, 2, 3, 4]'), false)
            });
    })

    describe('Удаляет все ложные значения в массиве', () => {

        it('Подставление значений', () => {
           assert.deepEqual(removeFalseValue( ['hello', 0, '', false, ,'Egor', -0,]),[ 'hello', 'Egor'] );
           assert.deepEqual(removeFalseValue( [77, 0, '', undefined, ,'mmtr', -0,]),[ 77, 'mmtr'] );
           assert.deepEqual(removeFalseValue([null, 'proto', true]) , ['proto', true]);
        });

    });
});


//Задача номер 8
describe('8. ArrStrComparsion', () => {
    describe('Имеет базовое условие на тип', () => {
            it('Проверка условия', () => {
                assert.isNotArray(arrStrComparsion('[1, 2, 3, 4]'), false)
            });

    })

    describe('Проверяет содержит ли первая строка все символы второй', () => {

        it('Подставление значений', () => {
            assert.equal(arrStrComparsion(['amry', 'army']), true);
            assert.equal(arrStrComparsion(['madam', 'Damam']), true);
            assert.equal(arrStrComparsion(['proto', 'otorp']), true);
        });
    });
});


//Задача номер 9
describe('9. ArrPushNum', () => {
    describe('Имеет базовое условие для функции с рекурсией', () => {

        it('Проверка условия', () => {
            assert.strictEqual(factorial(-1), 1)
            assert.strictEqual(factorial(0), 1);
            assert.strictEqual(factorial(1), 1);
        });
    })


    describe('Проверяет содержит ли первая строка все символы второй', () => {

        it('Подставление значений', () => {
            assert.deepEqual(arrPushNum(5, []), [5, 4, 3, 2, 1]);
            assert.deepEqual(arrPushNum(10, []), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
            assert.deepEqual(arrPushNum(3, []), [3, 2, 1]);
            assert.deepEqual(arrPushNum(0, []), []);
        });
    });
});


//Задача номер 10
describe('10.ArrSmashFunc', () => {
    describe('Имеет базовое условие на тип', () => {

        it('Проверка условия', () => {
            assert.isNotArray(arrSmashFunc('[1, 2, 3, 4]'), false)
        });
    })


    describe('Заполняет массив числами от 1 до n', () => {

        it('Подставление значений', () => {
            assert.deepEqual(arrSmashFunc([1, 2, 3, 4, 5, 6], 2), [[1, 2], [1, 2], [1, 2]])
            assert.deepEqual(arrSmashFunc([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [1, 2, 3]])
            assert.deepEqual(arrSmashFunc([1, 2, 3, 4, 5, 6], 4), [[1, 2, 3, 4], [1, 2, 3, 4]])
        });
    });
});

