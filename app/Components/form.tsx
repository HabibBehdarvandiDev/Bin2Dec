import React, { useState } from 'react';

function Dec2Binary(num: number) {
    if (num === 0) {
        return '0';
    }

    let reserve = '';
    while (num > 0) {
        reserve = (num % 2) + reserve;
        num = Math.floor(num / 2);
    }

    return reserve;
}

function Bin2Decimal(num: number) {
    let reserve = 0;
    let i = 0;
    while (num > 0) {
        reserve += (num % 10) * Math.pow(2, i);
        num = Math.floor(num / 10);
        i++;
    }
    return reserve;
}

const Form: React.FC = () => {
    const [resualt, setResualt] = useState<string>('');

    const handleBinary = (e: React.ChangeEvent<HTMLInputElement>) => {
        let binaryResualt = Dec2Binary(parseInt(e.target.value));
        setResualt(binaryResualt);
    };

    const handleDecimal = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        // Check if the input consists of only 0s and 1s
        const isValidInput = /^[01]*$/.test(inputValue);

        if (isValidInput) {
            let binaryResult = Bin2Decimal(parseInt(inputValue, 2));
            setResualt(String(binaryResult));
        } else {
            alert('Invalid Entry');
            e.target.value = '';
            setResualt('');
        }
    };

    return (
        <section className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-green-50 w-4/5 lg:w-6/12 xl:w-4/12 flex flex-col bg-transparent'>
            <div className='flex flex-col my-4'>
                <h1 className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Bin2Dec</h1>
                <input
                    type='text'
                    name='binary'
                    id='binaryInput'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={(e) => handleDecimal(e)}
                />
            </div>
            <div className='flex flex-col my-4'>
                <h1 className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Dec2Bin</h1>
                <input
                    type='text'
                    name='decimal'
                    id='decimalInput'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={(e) => handleBinary(e)}
                />
            </div>
            <div className='flex flex-col my-4'>
                <h1 className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>Resualt</h1>
                <input
                    type='text'
                    name='resualt'
                    id='showResualt'
                    className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    disabled
                    value={String(resualt)}
                />
            </div>
        </section>
    );
};

export default Form;
