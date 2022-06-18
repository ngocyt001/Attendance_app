

function AddItem(name,date,checkIn, checkOut) {
    
    const listUser = document.querySelector(".container-list-user-wrap");
    const newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.className = "container-list-user";
    newDiv.innerHTML = 
                        `
                            <div class="container-list-user-detail">
                                <div class="container-list-user-detail-infor">
                                    <div class="container-list-user-detail-infor__img">
                                        <img src="./img/user.png" alt="">
                                    </div>
    
                                    <div class="container-list-user-detail-infor__name">
                                        <p>${name}</p>
                                        <span>UI Designer</span>
                                    </div>
                                </div>
    
                                <div class="container-list-user-detail-depa">
                                    <p>Development</p>
                                    <span>Design Team</span>
                                </div>
    
                                <div class="container-list-user-detail-date">
                                    <p>${date}</p>
                                    <span>Sunday</span>
                                </div>
    
                                <div class="container-list-user-detail-login">
                                    <p>${checkIn}</p>
                                </div>
    
                                <div class="container-list-user-detail-logout">
                                    <p>${checkOut}</p>
                                </div>
    
                                <div class="container-list-user-detail-btn">
    
                                    <div class="container-list-user-detail-btn__view">
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        `
    
    listUser.appendChild(newDiv);
}

function AddAllItems(Employee) {
    listUser.innerHTML="";
    Employee.forEach(element => {
        AddItem(element.name, element.date, element.checkIn, element.checkOut);
    });
}


// ------------------------------------------------------------------------------
async function GetAllDataOnce() {
    const querySnapshot = await getDocs(colection(db,"Employee"));

    var user = [];

    querySnapshot.forEach(doc => {
        user.push(doc.data());
    });

    AddAllItems(user);

    window.onload = () => {
        const listUser = document.querySelector(".container-list-user-wrap");
    const newDiv = document.createElement("div");
    console.log(newDiv);
    newDiv.className = "container-list-user";
    newDiv.innerHTML = 
                        `
                            <div class="container-list-user-detail">
                                <div class="container-list-user-detail-infor">
                                    <div class="container-list-user-detail-infor__img">
                                        <img src="./img/user.png" alt="">
                                    </div>
    
                                    <div class="container-list-user-detail-infor__name">
                                        <p>${name}</p>
                                        <span>UI Designer</span>
                                    </div>
                                </div>
    
                                <div class="container-list-user-detail-depa">
                                    <p>Development</p>
                                    <span>Design Team</span>
                                </div>
    
                                <div class="container-list-user-detail-date">
                                    <p>${date}</p>
                                    <span>Sunday</span>
                                </div>
    
                                <div class="container-list-user-detail-login">
                                    <p>${checkIn}</p>
                                </div>
    
                                <div class="container-list-user-detail-logout">
                                    <p>${checkOut}</p>
                                </div>
    
                                <div class="container-list-user-detail-btn">
    
                                    <div class="container-list-user-detail-btn__view">
                                        <p>View</p>
                                    </div>
                                </div>
                            </div>
                        `
    
    listUser.appendChild(newDiv);
    }
}

