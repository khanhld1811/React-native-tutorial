/**
 * This contains function, that send GET, POST, DELETE, PUT request to server
 */

import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/';
const apiInsertNewFood = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/foodname';
const apiUpdateAFood = 'http://5df1bf4d9df6fb00142bdc70.mockapi.io/api/getName/foodname/';

async function getFoodsFromServer() {
    try {
        /**
         * await đợi cho tới khi thực hiện xong
         */
        let food = 'foodname';
        let response = await fetch(apiGetAllFoods + food);
        let responseJson = await response.json();
        console.log(`getFoodsFromServer - ${responseJson}`)
        return responseJson; // list of foods
    }
    catch (error) {
        console.log(`error: ${error}`)
    }
}

//send post request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        console.error(`Error is : ${error}`)
    }
}

//send put request to update data
async function updateAFood(params) {
    console.log(params)
    let id = `${params.id}`
    try {
        let response = await fetch(apiUpdateAFood + id, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson;
    }
    catch (error) {
        console.error(`Error is : ${error}`);
    }
}

export { getFoodsFromServer };
export { insertNewFoodToServer };
export {updateAFood};