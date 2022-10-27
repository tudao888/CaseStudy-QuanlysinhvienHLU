// let studentHLU = {
//     id: '011',
//     name: 'Đào Thị Hiền',
//     date: '07/02/2000',
//     gender: 'Nữ',
//     class: 'HLU113',
//     image: 'https://toplist.vn/images/800px/tiem-chup-anh-the-lay-ngay-dep-nhat-o-hue-chu-de-da-duoc-nhan-cua-kieu-nguyen-317636.jpg'
// }
let listStudent = [];
display();

function add() {
    let id1 = document.getElementById('id').value;
    let name1 = document.getElementById('name').value;
    let date1 = document.getElementById('date').value;
    let gender1 = document.getElementById('gender').value;
    let class1 = document.getElementById('class').value;
    let image1 = document.getElementById('image').value;
    console.log(listStudent)
    let student = {
        'id': id1,
        'name': name1,
        'date': date1,
        'gender': gender1,
        'class': class1,
        'image': image1
    }
    listStudent.push(student)
    display();
}

function display() {
    let html = ``;
    for (let i = 0; i < listStudent.length; i++) {
        html += `<tr>
        <td>${listStudent[i].id}</td>
        <td>${listStudent[i].name}</td>
        <td>${listStudent[i].date}</td>
        <td>${listStudent[i].gender}</td>
        <td>${listStudent[i].class}</td>
        <td><img id="img1" src="${listStudent[i].image}"></td>
        <td><button onclick="pressEdit(${i})">EDIT</button></td>
        <td><button onclick="pressDelete(${i})">DELETE</button></td>
    </tr>`
    }
    document.getElementById("tbody1").innerHTML = html;
    document.getElementById('id').value = '';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('class').value = '';
    document.getElementById('image').value = '';
}

function pressDelete(index) {
    listStudent.splice(index, 1)
    display();
}

function pressEdit(index) {
    document.getElementById('id').value = listStudent[index].id
    document.getElementById('name').value = listStudent[index].name
    document.getElementById('date').value = listStudent[index].date
    document.getElementById('gender').value = listStudent[index].gender
    document.getElementById('class').value = listStudent[index].class
    document.getElementById('image').value = listStudent[index].image
    document.getElementById('save').value = index;
}

function pressSave() {
    let index = +document.getElementById('save').value;
    let id2 = document.getElementById('id').value;
    let name2 = document.getElementById('name').value;
    let date2 = document.getElementById('date').value;
    let gender2 = document.getElementById('gender').value;
    let class2 = document.getElementById('class').value;
    let image2 = document.getElementById('image').value;
    let Student_edit = {
        'id': id2,
        'name': name2,
        'date': date2,
        'gender': gender2,
        'class': class2,
        'image': image2
    };
    listStudent.splice(index, 1, Student_edit)

    display();
}