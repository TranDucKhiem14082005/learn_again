// console.log('xin chao moi nguoi den voi bai hoc ngay hom nay');

// function getMoney ({value1,value2}) {
//     console.log(value1,value2);
// }

// getMoney({
//     value1: '20000',
//     value2: '30000'
// });

// function washCar() {
//     console.log("Xe dang duoc rua....")
//     for(let i = 0; i < 5; i++) {
//         console.log(`dang bat dau rua buoc so ${i}`);
//     }
//     console.log("xe da rua xong");
// }

// console.log("bat dau rua xe");

// washCar();

// console.log("dat xe ve nha");


function washCar2() {
    return new Promise(resolve => {
        console.log("dang rua xe");
        setTimeout( () => {
                console.log("xe da rua xong");
                resolve();
            },3000
        )
    });
}

console.log("Bat dau di rua xe");

washCar2().then(()=> {
    console.log("goi dien cho ong chu");
    console.log("Xe da san sang lai ve nha");
})
console.log("Lam nhung viec khac cho vo");