import axios from 'axios';


function testPing() {

    // let ans;

    // GET 请求
    axios.get('http://127.0.0.1:5000/ping')
    // axios.get('http://baidu.com')
        .then(response => {
            console.log(response.data);
            alert(response.data['desc']);
            // ans = response.data['desc'];
            return response.data['desc'] + '_END'
        })
        .then((temp) => {  // 又加了一步，参数是第一个then的return
            alert(temp);
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });

    // document.getElementById("ping_test").innerText = ans;
}


export default testPing;

// // POST 请求
// axios.post('https://api.example.com/data', {
//     key: 'value'
// })
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.log(error);
//     });