import React, {Component} from 'react';
/**
 * Text is component
 */
import {Text} from 'react-native'; 

/**
 * Cấu trúc của 1 component => nó là 1 class
 * - export -> public
 * - default class mặc định tên class là helloWorld
 */
export default class HelloWorld extends Component{
    render(){
        /**
         * return JSX = Javascript Extension
         * Biến let => Không thể gán kiểu dữ liệu khác khi đã định nghĩa nó
         */

         let greeting = `Hello world, My name is Le Duy Khanh`;
        return(
            <Text>
                {greeting}
            </Text>
        );
    }
}