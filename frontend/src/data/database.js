import tea from '../data/images/tea.png'
import indomie from '../data/images/indomie.png'
import doritos from '../data/images/doritos.png'
import pepsi from '../data/images/pepsi.png'

export const items = [
   {
      id: 0,
      name: "Indomie Chicken Jumbo",
      price: 4,
      img: indomie,
      qty: 0
   },
   {
      id: 1,
      name: "Al-Arosa Tea 100g",
      price: 20,
      img: tea,
      qty: 0
   },
   {
      id: 2,
      name: "Pepsi Diet 330ml",
      price: 6,
      img: pepsi,
      qty: 0
   },
   {
      id: 3,
      name: "Doritos",
      price: 6,
      img: doritos,
      qty: 0
   },

]

export const itemsNames = ['indomie', 'tea', 'pepsi', 'doritos']

export const colors = {
   background: "#F5EDDC",
   grey: '#CFD2CF',
   pink: '#FA9494',
   red: '#EB1D36',
   blue: "#497174",
   navy: '#30475E',
   lightNavy: '#818d99',
}

export const videoConstraints = {
   width: 1280,
   height: 720,
   facingMode: "environment", // Can be "environment" or "user"
}

export const urls = {
   WS_SERVER: "ws://192.168.1.23:8088/yolo_ws",
   PAYMENT: "http://192.168.1.23:8088/payment"
}

export const timeInterval = 5000 // 5 seconds