import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  itemsInCart: [],
  itemsUniqInCard: [],
  itemsUniqCountInCard: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemInCart: (state, action) => {
      let array = {}
      action.payload.count = 0
      console.log('-> ',action.payload)
      state.itemsInCart.push(action.payload)
      
      state.itemsUniqInCard = getUniqArr(state.itemsInCart);
      state.itemsUniqCountInCard = getUniqCount(state.itemsInCart);
      console.log('i am here posle ', ' => ', state.itemsUniqInCard.length)
    },
    deleteItemInCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
    },
    getItemCountCard:() =>{
      
    }
  },
})




function getUniqArr(oldArr){
  function arraysContainSame(a, b) {
    a = Array.isArray(a) ? a : [];
    b = Array.isArray(b) ? b : [];
    return a.length === b.length && a.every(el => b.includes(el));
  }

  let array = oldArr.filter( (order, index) => {

    for( let i = index+1; i<oldArr.length; i++ ){
      if(
        oldArr[i].name === order.name
        && oldArr[i].price === order.price
        && arraysContainSame(oldArr[i].ingredient,order.ingredient)
      ){
       // just logging this stuff so you can see what happens
       console.log( `${index} is a duplicate of ${i}` );
       // if a duplicate is found return true to the filter function
       return false;//true; 
      }
    }
    // if no duplication is found return false to the filter function
    return true;;
    
  });
  return array 
}
function getUniqCount(oldArr){
  var res = [];
      var obj = {};
      //construct the object with key and recurrence count as value
      oldArr.forEach(function(value, i) {
          var str = JSON.stringify(value);
          if(!obj[str]) {
            obj[str] = 1;
          } else {
            obj[str]++;
          }
      });
      for(var i in obj) {
        let temp = JSON.parse(i);
        temp.count = obj[i];
        res.push(temp)
      }
      return res;
}

// Action creators are generated for each case reducer function
export const { addItemInCart, deleteItemInCart,getItemCountCard } = cartSlice.actions

export default cartSlice.reducer
// array.forEach(function(obj) {  
//     newArr[key] = (newArr[key] || 0) + 1
//     //console.log(key.replace('}', `count\&quot;:${newArr[key]}`+'}' ))
//     obj.count =  newArr[key]
		/* console.log(newArr[key]) */
// })


// state.itemsInCart.forEach(function(obj) {
//   var key = JSON.stringify(obj)
//   // console.log('-> ',key) 
//   newArr[key] = (newArr[key] || 0) + 1;
//   obj.count = newArr[key];
// })
// // let set = Array.from(new Set(state.itemsInCart.map(JSON.stringify))).map(JSON.parse);
// console.log('aaaaaaaaaaaaaaaa\n' , ' => ', state.itemsInCart)

// console.log('bbbbbbbbbbbbbbbbbbbbbb')
// state.itemsUniqInCard.push(state.itemsInCart);
// // console.log('-> ',newArr)