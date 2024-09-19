'use strict';

// Alkuarvot oikeiden ja väärien vastausten laskureille
let correctCount = 0;
let wrongCount = 0;

// Satunnaislukujen arvot
let rand_num1 = 0;
let rand_num2 = 0;

// Funktio satunnaislukujen generointiin
const getRandomIntNumberRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Funktio, joka päivittää kysymykset
const randomizeNumbers = () => {
    rand_num1 = getRandomIntNumberRange(1, 10);
    rand_num2 = getRandomIntNumberRange(1, 10);
    document.querySelector('#num1').textContent = rand_num1;
    document.querySelector('#num2').textContent = rand_num2;
}

// Funktio, joka päivittää tulosten näyttämisen
const updateResults = () => {
    document.querySelector('#correctcount').textContent = correctCount;
    document.querySelector('#wrongcount').textContent = wrongCount;
}

// Alustaa kysymykset ja tulokset sivun lataamisen yhteydessä
document.addEventListener("DOMContentLoaded", () => {
    randomizeNumbers();
    updateResults();
});

// Tarkistaa käyttäjän vastauksen painikkeen klikkauksessa
document.querySelector('#calculate').addEventListener('click', () => {
    const answer = Number(document.querySelector('input').value);
    const correctAnswer = rand_num1 + rand_num2;
    
    if (answer === correctAnswer) {
        correctCount++;
        alert('Correct!');
    } else {
        wrongCount++;
        alert('Incorrect!');
    }
    
    updateResults();
    randomizeNumbers();
    document.querySelector('input').value = '';
});
