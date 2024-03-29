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
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isNumber(stringLength('sad ADADfad adadax'), 7);
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
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isArray(subArrayMax([[14, 2, -1], [55, 23, 11, -11], [2, 7, 1]]),  [14, 55, 7])
                assert.deepEqual(subArrayMax([['AMD', 'SDS', -1], [55, 23, 11, -11], [2, 7, 1]]),  [NaN, 55, 7]);
            });

    })

    describe('Возвращает массив состоящий из максимальных элементов данных подмассивов', () => {

        it('Подставление значений', () => {
           assert.deepEqual(subArrayMax([[14, 2, -1], [55, 23, 11, -11], [2, 7, 1]]), [14, 55, 7]);
           assert.deepEqual(subArrayMax([[-1, -2, -3], [-4, -5], [-6, -7, -8, -9]]), [-1, -4, -6]);
           assert.deepEqual(subArrayMax([[7, -2, 12], [6, 2], [16, 67, 18, -9]]), [12, 6, 67]); 
           assert.deepEqual(subArrayMax([[3, 1, 1.5], [4, 1], [27, 12, -3, 8]]), [3, 4, 27]); 
        });

    });
});


//Задача номер 4
describe('4. MaxLengthString', () => {
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isString(maxLengthString('Helloooo', 6), 'Helloo...')
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
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isString(upRegister('beaUtiFuLLy dAys'), 'Beautifully Days')
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
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isArray(copyElByArray([1, 2, 3], [4, 5]), [4, 1, 2, 3, 5])
                //проверка на мутацию (попытка)
                assert.deepEqual(copyElByArray([1, 2, 3], [4, 5]), [1, 2, 3, 4, 5])
            });

    })

    describe('Функция должна скопировать каждый элемент первого массива во второй начиная с n', () => {

        it('Подставление значений', () => {
           assert.deepEqual(copyElByArray([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5]);
           assert.deepEqual(copyElByArray(['hell', 4, 1], [3, 'very'], 0), ['hell', 4, 1, 3, 'very']);
           assert.deepEqual(copyElByArray([1, 4], ['Bob', 2, 'clever', 5], 2), ['Bob', 2, 1, 4, 'clever', 5]);
           assert.deepEqual(copyElByArray([9, null, 5, 1, 'myName'], [11, 23], 3), [11, 23, 9, null, 5, 1, 'myName' ]);
        });

    });
});


//Задача номер 7
describe('7. RemoveFalseValue', () => {
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isArray(removeFalseValue(['hello', 0, '', false, ,'Egor', -0]), [ 'hello', 'Egor'])
            });
    })

    describe('Удаляет все ложные значения в массиве', () => {

        it('Подставление значений', () => {
           assert.deepEqual(removeFalseValue( ['hello', 0, '', false, ,'Egor', -0]),[ 'hello', 'Egor'] );
           assert.deepEqual(removeFalseValue( [77, {pass: 12}, ,'mmtr']),[ 77, {pass: 12}, 'mmtr'] );
           assert.deepEqual(removeFalseValue([null, 'proto', true]) , ['proto', true]);
           assert.deepEqual(removeFalseValue([null, undefined, undefined]) , []);
        });

    });
});


//Задача номер 8
describe('8. ArrStrComparsion', () => {
    describe('Имеет базовое условие на тип возвращаемого значения', () => {
            it('Проверка условия', () => {
                assert.isBoolean(arrStrComparsion(['amry', 'army']), true)
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
describe('9.ArrSmashFunc', () => {
    describe('Имеет базовое условие на тип возвращаемого значения', () => {

        it('Проверка условия', () => {
            assert.isArray(arrSmashFunc([1, 2, 3, 4, 5, 6],  [[1, 2], [1, 2], [1, 2]]))
        });
    })


    describe('Заполняет массив числами от 1 до n', () => {

        it('Подставление значений', () => {
            assert.deepEqual(arrSmashFunc([1, null, 3, 4, 5, 6], 2), [[1, null], [1, null], [1, null]])
            assert.deepEqual(arrSmashFunc(['Never', 'Any', 'Void', 'Extends', 'Readonly', 'Enum'], 3), [ [ 'Never', 'Any', 'Void' ], [ 'Never', 'Any', 'Void' ] ])
            assert.notDeepEqual(arrSmashFunc([{id: 1, title: 'Hello'}, 2, 3, 4, 5, 6], 4), [[{id: 1, title: 'Hello'}, 2, 3, 4], [1, 2, 3, 4]])
        });
    });
});



//Задача номер 10
describe('10. ArrPushNum', () => {
    describe('Имеет базовое условие для функции с рекурсией', () => {

        it('Проверка условия', () => {
            assert.isArray(arrPushNum(5, []), [5, 4, 3, 2, 1])
            assert.isArray(arrPushNum(-1, []), [])
            assert.isArray(arrPushNum('Hello', []), [])
        });
    })


    describe('Проверяет содержит ли первая строка все символы второй', () => {

        it('Подставление значений', () => {
            assert.deepEqual(arrPushNum(5, []), [5, 4, 3, 2, 1]);
            assert.deepEqual(arrPushNum(10, []), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
            assert.deepEqual(arrPushNum(3, []), [3, 2, 1]);
            assert.deepEqual(arrPushNum(0, []), []);
            assert.deepEqual(arrPushNum('Hello', []), []);
        });
    });
});


