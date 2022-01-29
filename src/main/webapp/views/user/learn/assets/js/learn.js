// =============================== Send to server ===============================
const urlPost = "http://localhost:8080/Course/post";
const urlComment = "http://localhost:8080/Course/comment";
const urlNoteBook = "http://localhost:8080/Course/notebook";
const urlStatus = "http://localhost:8080/Course/status";

// ====== CREATE - POST
// ====== READ - GET
// ====== UPDATE - PUT / PATCH
// ====== DELETE - DELETE

async function updatePostID(thread) {
    newPost = {
        "id": 0,
        "title": thread.title,
        "body": thread.body,
        "views": 0,
        "likes": 0,
        "dislikes": 0,
        "time": thread.time.getTime(),
        "user": {
          "id": thread.userID,
          "username": thread.username,
          "password": "x",
          "avatar": "x"
        },
        "commentList": []
    }

    var res = await fetch(urlPost + `?videoID=${thread.videoID}`, {
        method: "POST",
        body: JSON.stringify(newPost),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var data = await res.json();
    return data;
}

async function addPost(thread) {
    thread.postID = (await updatePostID(thread)).postID;
};

// Chỉ thay đổi views, likes, dislikes.
function updatePost(thread) {
    curPost = {
        "id": thread.postID,
        "title": "x",
        "body": "x",
        "views": thread.views,
        "likes": thread.likes,
        "dislikes": thread.dislikes,
        "time": 0,
        "user": {
          "id": 0,
          "username": "x",
          "password": "x",
          "avatar": "x"
        },
        "commentList": []
    }

    fetch(urlPost, {
        method: "PUT",
        body: JSON.stringify(curPost),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log("UPDATE POST SUCCESSFUL!"))
    .catch(err => console.log("UPDATE POST ERROR!")) 
}

async function updateCommentID(comment) {
    newComment = {
        "id": 0,
        "content": comment.content,
        "time": comment.time.getTime(),
        "user": {
          "id": parseInt(comment.userID),
          "username": "x",
          "password": "x",
          "avatar": "x"
        }
    }

    var res = await fetch(urlComment + `?postID=${comment.postID}`, {
        method: "POST",
        body: JSON.stringify(newComment),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var data = await res.json();
    return data;
}

async function addComment(comment) {
    comment.commentID = (await updateCommentID(comment)).commentID;
};

function editComment(comment) {
    changeComment = {
        "id": comment.commentID,
        "content": comment.content,
        "time": comment.time.getTime(),
        "user": {
          "id": 0,
          "username": "x",
          "password": "x",
          "avatar": "x"
        }
    }

    fetch(urlComment, {
        method: "PUT",
        body: JSON.stringify(changeComment),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log("EDIT COMMENT SUCCESSFUL!"))
    .catch(err => console.log("EDIT COMMENT ERROR!"))
}

function delComment(comment) {
    commentDel = {
        "id": comment.commentID,
        "content": "x",
        "time": 0,
        "user": {
          "id": 0,
          "username": "x",
          "password": "x",
          "avatar": "x"
        }
    }

    fetch(urlComment, {
        method: "DELETE",
        body: JSON.stringify(commentDel),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log("DELETE COMMENT SUCCESSFUL!"))
    .catch(err => console.log("DELETE COMMENT ERROR!"))
}

async function updateNoteBookID(notebook) {
    newNoteBook = {
        "id": 0,
        "content": notebook.content,
        "duration": notebook.duration,
    }

    var res = await fetch(urlNoteBook + `?videoID=${notebook.videoID}&userID=${notebook.userID}`, {
        method: "POST",
        body: JSON.stringify(newNoteBook),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    var data = await res.json();
    return data;
}

async function addNoteBook(notebook) {
    notebook.id = (await updateNoteBookID(notebook)).notebookID;
};

function editNoteBook(notebook) {
    changeNoteBook = {
        "id": notebook.id,
        "content": notebook.content,
        "duration": notebook.duration,
    }

    fetch(urlNoteBook, {
        method: "PUT",
        body: JSON.stringify(changeNoteBook),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log("EDIT NOTEBOOK SUCCESSFUL!"))
    .catch(err => console.log("EDIT NOTEBOOK ERROR!"))
}

function delNoteBook(notebook) {
    notebookDel = {
        "id": notebook.id,
        "content": "x",
        "duration": "x",
    }

    fetch(urlNoteBook, {
        method: "DELETE",
        body: JSON.stringify(notebookDel),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => console.log("DELETE NOTEBOOK SUCCESSFUL!"))
    .catch(err => console.log("DELETE NOTEBOOK  ERROR!"))
}

function updateVideoStatus(videoID, userID, status) {
    fetch(urlStatus + `?videoID=${videoID}&userID=${userID}&status=${status}`, {
        method: "PUT",
        body: "",
        mode: 'cors',
        headers: {
            'Content-Type': 'text/plain'
        }
    })
    .then(res => console.log("UPDATE STATUS SUCCESSFUL!"))
    .catch(err => console.log("UPDATE STATUS ERROR!")) 
}

// =============================== Client execute ===============================
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// ========== HEADER ==========

 const inputSearch = $('.item__search-input');
 const btnSearch = $('.item__search-btn');
 const divSearch = $('.navbar__item-search');
 const btnSearchBack = $('.navbar__item-button-back');
 const notify = $('.navbar__item-notify');
 const btnCategory = $('.item__category-btn');

 btnCategory.addEventListener('click', () => {
    $('.item__category-modal').style.display = 'block';
    $('.item__category-btn1').addEventListener('click', () => {
        // $('.item__category-modal .container').style.animation = 'CategoryOut linear 0.1s';
        $('.item__category-modal').style.display = 'none';
    });
 });

 btnSearch.addEventListener('click', () => {
    if(inputSearch.style.display == '' && window.innerWidth <= 750) {
        const header = $$('.header__navbar-list');
        header.forEach((item) => {
            var child = item.children;
            for(var i = 0; i < child.length; i++) {
                if(!child[i].classList.contains('navbar__item-search')) {
                    child[i].style.display = 'none';
                }
            }
        });
        inputSearch.style.display = 'block';
        inputSearch.style.width = '10rem';
        btnSearch.style.backgroundColor = 'var(--primary-color)';
        btnSearch.style.color = 'white';
        divSearch.style.width = '100%';
        btnSearch.style.fontSize = '1.5rem';
        divSearch.style.margin = '0rem 1.5rem';
        btnSearchBack.style.display = 'flex';
    }
 });

 btnSearchBack.addEventListener('click', () => {
    inputSearch.style.display = '';
    const header = $$('.header__navbar-list');
    const divTag = document.createElement('div');
    header.forEach((item) => {
        var child = item.children;
        for(var i = 0; i < child.length; i++) {
            if(!child[i].classList.contains('navbar__item-search')) {
                child[i].style.display = 'flex';
            }
        }
    });
    btnSearchBack.style.display = '';
    btnSearch.style.backgroundColor = 'transparent';
    btnSearch.style.color = 'var(--primary-color)';
    btnSearch.style.fontSize = '2rem';
 });

 window.addEventListener('resize', function() {
    if(window.innerWidth <= 750) {
        inputSearch.style.display = 'none !important';
    }
   if(window.innerWidth > 590) {
       const header = $$('.header__navbar-list');
       const divTag = document.createElement('div');
       header.forEach((item) => {
           var child = item.children;
           for(var i = 0; i < child.length; i++) {
               if(!child[i].classList.contains('navbar__item-search')) {
                   child[i].style.display = 'flex';
               }
           }
       });
       btnSearchBack.style.display = '';
       btnSearch.style.backgroundColor = 'transparent';
       btnSearch.style.color = 'var(--primary-color)';
       btnSearch.style.fontSize = '2rem';
   }
});

// ========== BREADCRUMB ==========
const btnNext = $('.breadcrumb-item-next');
const btnPrevious = $('.breadcrumb-item-previous');

function getSectionVideoNumber() {
    var numSection, numVideo;
    var videoTitle = $('.info__actions-video-name').innerHTML;
    var sectionTitle = $('.breadcrumb-section').innerHTML
    sections.forEach((section, index) => {
        if(section.title.trim() == sectionTitle.trim()) {
            numSection = index + 1;
            var videoList = section.videoList;
            videoList.forEach((video, index2) => {
                if(video.title.trim() == videoTitle.trim()) {
                    numVideo = index2 + 1;
                }
            });
        }
    })
    return [parseInt(numSection), parseInt(numVideo)];
}

// Chứa cả Materials cả Notebooks.
var sections = [];
materials = []

$('.breadcrumb-section').addEventListener('click', () => {
    let currentURL = document.location.href;
    let pos = currentURL.lastIndexOf('/');
    let urlCourse = currentURL.slice(0, pos);
    window.location = urlCourse;
});

btnNext.addEventListener('click', () => {
    var activeVideo = $('.playlist__section-video.active');
    var nextSibling = activeVideo.nextSibling;
    if(nextSibling.innerHTML.length > 0) {
        activeVideo.classList.remove('active');
        nextSibling.classList.add('active');
        $('.info__actions-video-name').innerHTML = nextSibling.children[2].children[0].innerHTML;
        $('.breadcrumb-video').innerHTML = nextSibling.children[2].children[0].innerHTML;
        $('.breadcrumb-section').innerHTML = nextSibling.parentNode.children[0].children[0].innerHTML;
        $('.main___video').src = nextSibling.children[3].value;
        $('#course-video').value = parseInt($('#course-video').value) + 1;
        $('#post-video').value = parseInt($('#post-video').value) + 1;
        $('.info__video-description p').innerHTML = nextSibling.children[4].value;
        updateMaterials(materials, $('.info__actions-video-name').innerHTML);
        loadStatus();
    } else {
// 
    }
});

btnPrevious.addEventListener('click', () => {
    var activeVideo = $('.playlist__section-video.active');
    var previousSibling = activeVideo.previousSibling;
    if(previousSibling.innerHTML.length > 0) {
        activeVideo.classList.remove('active');
        previousSibling.classList.add('active');
        $('.info__actions-video-name').innerHTML = previousSibling.children[2].children[0].innerHTML;
        $('.breadcrumb-video').innerHTML = previousSibling.children[2].children[0].innerHTML;
        $('.breadcrumb-section').innerHTML = previousSibling.parentNode.children[0].children[0].innerHTML;
        $('.main___video').src = previousSibling.children[3].value;
        $('#course-video').value = parseInt($('#course-video').value) - 1;
        $('#post-video').value = parseInt($('#post-video').value) - 1;
        $('.info__video-description p').innerHTML = previousSibling.children[4].value;
        updateMaterials(materials, $('.info__actions-video-name').innerHTML);
        loadStatus();
    } else {
// 
    }
});

// ========== ACTIONS ==========
const btnLike = $('.info__actions-item-Like');
const btnDislike = $('.info__actions-item-Dislike');
const btnSeen = $('.info__actions-item-Seen');
const btnShare = $('.info__actions-item-Share');
const btnSaveNote = $('.main__info-btnNote');
const toastMessage = $('.clipboard__toast');

btnSaveNote.addEventListener('click', () => {
    if($('.notebook__info-empty').style.display != 'none') {
        $('.notebook__info-empty').style.display = 'none';
    }
    var divTag = document.createElement('div');
    divTag.innerHTML = `
        <div class="notebook__info-actions">
            <button class="notebook__info-btnPlay">
                <i class="fas fa-play"></i>
                <i class="fas fa-pause"></i>
                <span notebook-info-time>0:00 - 0:11</span>
            </button>
            <div class="notebook__info-change">
                <button class="notebook__info-edit">
                    <i class="fas fa-pencil-alt" title="edit notebook"></i>
                    <span>Save</span>
                </button>
                <button class="notebook__info-del">
                    <i class="far fa-trash-alt" title="delete notebook"></i>
                </button>
            </div>
        </div>
        <div class="notebook__info-cnt">
            <textarea class="notebook__content" name="nbContent" id="" placeholder="Add notes"></textarea>
            <button>Save</button>
        </div>
    `;
    divTag.classList.add('notebook__info-content');
    $('.sidebar__notebook-container').appendChild(divTag);

    materials.forEach((material, index2) => {
        var videoID = parseInt($('.playlist__section-video.active').children[5].value);
        var userID = parseInt($('.navbar__item-profile input').value);
        if(material.videoID == videoID) {
            var noteBookTMP = {
                "videoID": videoID,
                "userID": userID,
                "id": 0,
                "content": "",
                "duration": "0:00 - 0:11"
            }
            material.noteBookList.push(noteBookTMP);
            addNoteBook(noteBookTMP);
        }
    });
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);

    updateNotebook(materials, videoID);
    // -----------

    addToast('Note saved');
});

function addToast(message) {
    if(!toastMessage.children[0]) {
        const toast = document.createElement('div');
        toast.style.animation = 'shapeIn ease 0.5s, shapeOut linear 0.5s 4s forwards';
        toast.innerHTML = message;
        toastMessage.appendChild(toast);
        setTimeout(function() {
            toastMessage.removeChild(toast);
        }, 5000);
    }
}

btnLike.addEventListener('click', () => {
    var result = getSectionVideoNumber();
    var sectionNumber = result[0], videoNumber = result[1];
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);
    var userID = parseInt($('.navbar__item-profile input').value);

    if(btnLike.children[0].classList.contains('active')) {
        btnLike.children[0].classList.remove('active');
        btnLike.children[1].classList.add('active');
        sections[sectionNumber-1].videoList[videoNumber-1].status += 4; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    } else {
        btnLike.children[1].classList.remove('active');
        btnLike.children[0].classList.add('active');
        sections[sectionNumber-1].videoList[videoNumber-1].status -= 4;
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    }

    var dislikeTag = $('.info__actions-item-Dislike');
    if(!dislikeTag.children[0].classList.contains('active')) {
        dislikeTag.children[1].classList.remove('active')
        dislikeTag.children[0].classList.add('active')
        sections[sectionNumber-1].videoList[videoNumber-1].status -= 2; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    }
});

btnDislike.addEventListener('click', () => {
    var result = getSectionVideoNumber();
    var sectionNumber = result[0], videoNumber = result[1];
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);
    var userID = parseInt($('.navbar__item-profile input').value);
    if(btnDislike.children[0].classList.contains('active')) {
        btnDislike.children[0].classList.remove('active');
        btnDislike.children[1].classList.add('active');
        sections[sectionNumber-1].videoList[videoNumber-1].status += 2; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    } else {
        btnDislike.children[1].classList.remove('active');
        btnDislike.children[0].classList.add('active');
        sections[sectionNumber-1].videoList[videoNumber-1].status -= 2; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    }
    
    var dislikeTag = $('.info__actions-item-Like');
    if(!dislikeTag.children[0].classList.contains('active')) {
        dislikeTag.children[1].classList.remove('active')
        dislikeTag.children[0].classList.add('active')
        sections[sectionNumber-1].videoList[videoNumber-1].status -= 4; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    }
});

btnSeen.addEventListener('click', () => {
    var result = getSectionVideoNumber();
    var sectionNumber = result[0], videoNumber = result[1];
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);
    var userID = parseInt($('.navbar__item-profile input').value);
    var activeVideo = $('.playlist__section-video.active');
    if(btnSeen.children[0].classList.contains('active')) {
        btnSeen.children[0].classList.remove('active');
        btnSeen.children[1].classList.add('active');
        sections[sectionNumber-1].videoList[videoNumber-1].status += 1; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
        activeVideo.children[1].children[0].style.color = "#29bb89";
    } else {
        btnSeen.children[1].classList.remove('active');
        btnSeen.children[0].classList.add('active');
        activeVideo.children[1].children[0].style.color = "#fb9300";
        sections[sectionNumber-1].videoList[videoNumber-1].status -= 1; 
        var status = sections[sectionNumber-1].videoList[videoNumber-1].status;
        updateVideoStatus(videoID, userID, status);
    }
});

btnShare.addEventListener('click', () => {
       // Copy Course Link
       let inputTag = document.createElement('input');
       let currentURL = document.location.href;
       let pos = currentURL.lastIndexOf('/');
       let urlCourse = currentURL.slice(0, pos);
       inputTag.value = urlCourse;
       btnShare.appendChild(inputTag);
       inputTag.select()
       inputTag.setSelectionRange(0, 1000);
       document.execCommand('copy');
       inputTag.style.display = 'none';
          // Create Clipboard
       addToast('Link copied to Clipboard');
       btnShare.removeChild(inputTag);
});

// ========== INTERACTIONS ==========
const interactions = $$('.main__info-interaction');
const btnUpload = $('.is-constructor');
const inputUpload = $('.upload-file');

// ================== New Thread =================

const btnNewThread = $('.discussion__add');
const threadModal = $('.thread__modal')
const btnX = $('.container__post-close');
const btnCancel = $('.post__button-cancel');
const btnPost = $('.post__button-post');

function convertTime(time) {
    var convertTime;
    var currentTime = new Date();
    var date = time.getDate();
    var month = time.getMonth() + 1;
    if(month < 10) month = "0" + month;
    var year = time.getFullYear();
    var hour = time.getHours();
    if(hour < 10) hour = "0" + hour;
    var minute = time.getMinutes();
    if(minute < 10) minute = "0" + minute;

    if(time.getFullYear() != currentTime.getFullYear()) {
        convertTime = date + "/" + month + "/" + year + " " + hour + ":" + minute;
    } else if(time.getMonth() != currentTime.getMonth()) {
        convertTime = date + "/" + month + " " + hour + ":" + minute;
    } else if(time.getDate() != currentTime.getDate()) {
        if(time.getDate() - currentTime.getDate() > 7) {
            convertTime = date + "/" + month + " " + hour + ":" + minute;
        } else {
            var weekday = new Array(7);
            weekday[0] = "Sunday";
            weekday[1] = "Monday";
            weekday[2] = "Tuesday";
            weekday[3] = "Wednesday";
            weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";

            convertTime = weekday[time.getDay()] + " " + hour + ":" + minute;
        }
    } else {
        convertTime = hour + ":" + minute;
    }

    return convertTime;
}

function updateSectionOption(numSections) {
    $('#course-section').innerHTML = "";
    $('#post-section').innerHTML = "";
    
    for(var i = 0; i < numSections; i++) {
        var optionTag1 = document.createElement("option");
        optionTag1.innerHTML = i + 1;
        optionTag1.value = i + 1;
        var optionTag2 = document.createElement("option");
        optionTag2.innerHTML = i + 1;
        optionTag2.value = i + 1;
        $('#course-section').appendChild(optionTag1);
        $('#post-section').appendChild(optionTag2);
    }
}

function updateVideoOption(numVideos) {
    $('#course-video').innerHTML = "";
    $('#post-video').innerHTML = "";
    
    for(var i = 0; i < numVideos; i++) {
        var optionTag1 = document.createElement("option");
        optionTag1.innerHTML = i + 1;
        optionTag1.value = i + 1;
        var optionTag2 = document.createElement("option");
        optionTag2.innerHTML = i + 1;
        optionTag2.value = i + 1;
        $('#course-video').appendChild(optionTag1);
        $('#post-video').appendChild(optionTag2);
    }
}

function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = element.scrollHeight + "px";
}

function actionToComment(postDetails) {
    var curUserID = $('.navbar__item-profile input').value;
    // ======= Edit, Report, Delete Comment ========
    $$('.post__details-change-btnEdit').forEach((item, index) => {
        var cmtUserID = item.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[3].value;
        if(curUserID == cmtUserID) {
            item.addEventListener('click', () => {
                // +++++++++++++++++++++++++++++++++++++++
                var oldContent = item.parentNode.parentNode.parentNode.children[0].children[1].children[1].innerText;
                
                // Tạo thẻ trung gian rồi xoá! Dựa vào tính chất lấy first nên sử dụng lặp!
                var divTag = document.createElement('div');
                divTag.innerHTML = `
                    <div class="post__replies-add1">
                        <a href=""><img class="post__details-user-avt1" src="./assets/img/avt.png" alt=""></a>
                        <textarea class="post__replies-add-content" name="" id="" placeholder="Reply">${oldContent}</textarea>
                    </div>
                    <div class="post__replies-action">
                        <button class="post__replies-btnCancel">Cancel</button>
                        <button class="post__replies-btnReply">Edit</button>
                    </div>
                `;
                divTag.classList.add("post__replies-add");
                item.parentNode.parentNode.parentNode.appendChild(divTag);
                item.parentNode.parentNode.parentNode.children[0].style.display = 'none';
                item.parentNode.parentNode.parentNode.children[1].children[0].children[0].style.color = "white";
                item.parentNode.parentNode.parentNode.children[1].style.zIndex = -1;
                item.parentNode.parentNode.parentNode.style.marginLeft = '0rem';

                $('.post__replies-btnCancel').addEventListener('click', () => {
                    item.parentNode.parentNode.parentNode.children[0].style.display = 'flex';
                    item.parentNode.parentNode.parentNode.children[1].children[0].children[0].style.color = "black";
                    item.parentNode.parentNode.parentNode.children[1].style.zIndex = 0;
                    $('.post__replies-btnCancel').parentNode.parentNode.remove();
                    item.parentNode.parentNode.parentNode.style.marginLeft = '3.1rem';
                });

                $('.post__replies-btnReply').addEventListener('click', () => {
                    item.parentNode.parentNode.parentNode.children[1].children[0].children[0].style.color ="black";
                    item.parentNode.parentNode.parentNode.children[1].style.zIndex = 0;
                    var newText = $('.post__replies-btnReply').parentNode.parentNode.children[0].children[1].value;
                    item.parentNode.parentNode.parentNode.children[0].style.display = 'flex';
                    item.parentNode.parentNode.parentNode.children[0].children[1].children[1].innerHTML = newText;
                    postDetails.comments[index].content = newText;
                    $('.post__replies-btnReply').parentNode.parentNode.remove();
                    item.parentNode.parentNode.parentNode.style.marginLeft = '3.1rem';
                    editComment(postDetails.comments[index]);
                });
                $('.post__replies-add').style.display = 'flex';
                $('.post__replies-add').children[0].children[1].value = oldContent;
            });
        } else {
            item.style.display = 'none';
        }
    });

    $$('.post__details-change-btnDelete').forEach((item, index) => {
        var cmtUserID = item.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[3].value;
        if(curUserID == cmtUserID) {     
            item.addEventListener('click', () => {
                var isDelete = confirm("Are you sure you want to delete?!");
                if(isDelete == true) {
                    delComment(postDetails.comments[index]);
                    item.parentNode.parentNode.parentNode.remove();
                    postDetails.replies -= 1;
                    postDetails.comments.splice(index, 1);
                    addToast("DELETE SUCCESSFUL!")
                }
            });
        } else {
            item.style.display = 'none';
        }
    });

    $$('.post__details-change-btnReport').forEach((item, index) => {
        var cmtUserID = item.parentNode.parentNode.parentNode.children[0].children[1].children[0].children[3].value;
        if(curUserID != cmtUserID) {
            item.addEventListener('click', () => {
                var reportContent = prompt("Input your report to us!");
                if(reportContent) {
                    addToast("Thank you for reporting!");
                }
            });
        } else {
            item.style.display = 'none';
        }
    });
}

// Sau khi vào post details thì mới có các chức năng như BACK, REPLY, VOTE.
function details(postDetails, threads) {
    const btnReply = $('.post__replies-btnReply');
    const btnCommentCancel = $('.post__replies-btnCancel');
    const replyContent = $('.post__replies-add-content');
    const btnBack = $('.post-details-btn-back');

    btnBack.addEventListener('click', () => {
        updatePost(postDetails);
        $('.discussion__post-details').style.display = 'none';
        $('.discussion__post-overview').style.display = 'block';
        updateThread(threads);
    });

    btnReply.addEventListener('click', () => {
        if(replyContent.value.trim() != '') {
            var username = $('.item__user-name').innerText;
            var img = $('.item__user-img');
            var time = new Date();
            var divTag = document.createElement('div');
            var userID = $('.navbar__item-profile input').value;
            divTag.innerHTML = `
                <div class="post__details-user">
                    <a href=""><img class="post__details-user-avt1" src="${img.src}" alt="Avatar"></a>
                    <div class="post__details-reply">
                        <div class="post__details-info">
                            <a href=""><span class="post__details-user-name">${username}</span></a>
                            <i class="fas fa-circle"></i>
                            <span class="post__details-user-time">${convertTime(time)}</span>
                            <input type="hidden" name="userID" value="${userID}">
                        </div>
                        <p class="post__details-comment-content">${replyContent.value.trim()}</p>        
                    </div>
                </div>
                <div class="post__details-change">
                    <button class="post__details-btnX"><i class="fas fa-ellipsis-v"></i></button>
                    <ul class="post__details-change-action">
                        <li class="post__details-change-btnEdit">
                            <i class="fas fa-pencil-alt"></i>
                            <span>Edit</span>
                        </li>
                        <li class="post__details-change-btnDelete">
                            <i class="fas fa-trash-alt"></i>
                            <span>Delete</span>
                        </li>
                        <li class="post__details-change-btnReport">
                            <i class="fas fa-flag"></i>
                            <span>Report</span>
                        </li>
                    </ul>
                </div>
            `;
            divTag.classList.add('post__replies-item');
            $('.post__replies').appendChild(divTag);
            
            var comment = {
                "commentID": 0,
                "userID": parseInt($('.navbar__item-profile input').value), 
                "postID": postDetails.postID,
                "username": username,
                "avatar": img.src,
                "profile": "/",
                "content": replyContent.value.trim(),
                "time": time,
            }
            $('.post__replies-btnReply').style.backgroundColor = 'rgb(206, 200, 200)';
            $('.post__replies-btnReply').style.color = '#333';
            $('.post__replies-add').style.display = 'none';
            $('.post__replies-add-content').style.height = '2.5rem';
            postDetails.replies += 1;
            postDetails.comments.push(comment);
            addComment(comment);
            replyContent.value = '';
            actionToComment(postDetails);
        }
    });
    
    btnCommentCancel.addEventListener('click', () => {
        $('.post__replies-add').style.display = 'none';
    });
}

function createPostTag(threadData) {
    var title = threadData.title;
    var username = threadData.username;
    var time = convertTime(threadData.time);
    var views = threadData.views;
    if(views > 1000) {
        views = Math.floor(views/1000) + "K";
    }

    var replies = threadData.replies;
    var divTag = document.createElement('div');
    divTag.innerHTML = `
        <div class="discussion__sec1">
            <h3 class="discussion__post-title">${title}</h3>
            <div>
                <span>Created By</span>
                <a href=""><span class="discussion__user-post">${username}</span></a>
                <i class="fas fa-circle"></i>
                <span class="discussion__user-time">${time}</span>
            </div>
        </div>
        <div class="discussion__sec2">
            <div>
                <span>${views}</span>
                <span>views</span>
            </div>
            <div>
                <span>${replies}</span>
                <span>replies</span>
            </div>
        </div>
    `
    divTag.classList.add('discussion__post');

    return divTag;
}

// Hàm tạo thẻ chứa nội dung phần chi tiết bài đăng -- bao gồm các comment...
function createDetailTag(index, postDetails) {
    var postSecond = convertTime(postDetails.time);
    var numSection = parseInt($('#course-section').value);
    var numVideo = parseInt($('#course-section').value);
    if(postDetails.status == -1) {
        postDetails.views += 1;
        postDetails.status = 0; 
    }

    $('.discussion__post-overview').style.display = 'none';
    var divTag = document.createElement('div');
    divTag.innerHTML = `
        <button class="post-details-btn-back">BACK</button>
        <h3 class="post__details-title">${postDetails.title}</h3>
        <div class="post__details-user">
            <a href="${postDetails.profile}"><img class="post__details-user-avt" src="${postDetails.avatar}" alt=""></a>
            <div class="post__details-user-list">
                <div class="post__details-user-item">
                    <a href="${postDetails.profile}"><span class="post__details-user-name">${postDetails.username}</span></a>
                    <i class="fas fa-circle"></i>
                    <span class="post__details-user-time">${postSecond}</span>
                    <input type="hidden" name="userID" value="${postDetails.userID}">
                </div>
                <p class="post__details-content">${postDetails.body}</p>
            </div>
        </div>
        <div class="post__details-actions">
            <button class="post__detail-like">
                <i class="fas fa-thumbs-up"></i>
                <span>${postDetails.likes}<span>
            </button>
            <button class="post__detail-dislike">
                <i class="fas fa-thumbs-down"></i>
                <span>${postDetails.dislikes}<span>
            </button>
            <button class="post__detail-reply">REPLY</button>
        </div>
        <div class="post__replies">
        </div>
        <div class="post__replies-add">
            <div class="post__replies-add1">
                <a href=""><img class="post__details-user-avt1" src="./assets/img/avt.png" alt=""></a>
                <textarea class="post__replies-add-content" name="" id="" placeholder="Reply"></textarea>
            </div>
            <div class="post__replies-action">
                <button class="post__replies-btnCancel">Cancel</button>
                <button class="post__replies-btnReply">Reply</button>
            </div>
        </div>
    `;
    $('.discussion__post-details').innerHTML = '';
    $('.discussion__post-details').appendChild(divTag);
    $('.discussion__post-details').style.display = 'block';

    if(postDetails.status == 1) { // -- Liked
        $('.post__detail-like').classList.add('active');
    } else if (postDetails.status == 2){
        $('.post__detail-dislike').classList.add('active'); // -- Disliked
    }

    $('.post__detail-like').addEventListener('click', () => {
      if($('.post__detail-dislike').classList.contains('active')) {
        postDetails.dislikes -= 1;
        postDetails.status = 0; // -- likes: 1, dislikes: 2, none: 0, isViewed: -1 discussion__post.
        $('.post__detail-dislike span').innerHTML = postDetails.dislikes;
        $('.post__detail-dislike').classList.remove('active');
      }
      if($('.post__detail-like').classList.contains('active')) {
          $('.post__detail-like').classList.remove('active');
          postDetails.likes -= 1;
          postDetails.status = 0;
          $('.post__detail-like span').innerHTML = postDetails.likes;
      } else {
        $('.post__detail-like').classList.add('active');
        postDetails.likes += 1;
        postDetails.status = 1;
        $('.post__detail-like span').innerHTML = postDetails.likes;
      }
    })

    $('.post__detail-dislike').addEventListener('click', () => {
      if($('.post__detail-like').classList.contains('active')) {
        postDetails.likes -= 1;
        postDetails.status = 0;
        $('.post__detail-like span').innerHTML = postDetails.likes;
        $('.post__detail-like').classList.remove('active');
      }
      if($('.post__detail-dislike').classList.contains('active')) {
          $('.post__detail-dislike').classList.remove('active');
          postDetails.dislikes -= 1;
          postDetails.status = 0;
          $('.post__detail-dislike span').innerHTML = postDetails.dislikes;
      } else {
        $('.post__detail-dislike').classList.add('active');
        postDetails.dislikes += 1;
        postDetails.status = 2;
        $('.post__detail-dislike span').innerHTML = postDetails.dislikes;
      }
    })

    $('.post__detail-reply').addEventListener('click', () => {
        $('.post__replies-add').style.display = 'flex';
    });

    $('.post__replies-add-content').addEventListener('keyup', () => {
        if($('.post__replies-add-content').value) {
            $('.post__replies-btnReply').style.backgroundColor = 'var(--primary-color)';
            $('.post__replies-btnReply').style.color = 'white';
        } else {
            $('.post__replies-btnReply').style.backgroundColor = 'rgb(206, 200, 200)';
            $('.post__replies-btnReply').style.color = '#333';
        }
        textAreaAdjust($('.post__replies-add-content'));
    });
}

var threads = [];

// Cập nhật lại nội dung các bài Post ứng với các video.
function updateThread(threads) {
    var threadSection = parseInt($('#course-section').value);
    var threadVideo = parseInt($('#course-video').value);
    
    var threadData = threads.filter((curThread) => {
        return curThread.section === threadSection && curThread.video === threadVideo;
    });

    $('.content__discussion').innerHTML = '';
    
    for(var i = 0; i < threadData.length; i++) {
        $('.content__discussion').appendChild(createPostTag(threadData[i]));
    }
    const posts = $$('.discussion__post');

    posts.forEach((post, index) => {
        var postDetails = threads.filter((thread, index) => {
            return thread.section == threadSection && thread.video == threadVideo;
        });
        
        post.onclick = function() {
            createDetailTag(index, postDetails[index]);
            var comments = postDetails[index].comments;
            $('.post__replies').innerHTML = '';
            comments.forEach((comment) => {
                var divTag = document.createElement('div');
                divTag.innerHTML = `
                    <div class="post__details-user">
                        <a href=""><img class="post__details-user-avt1" src="${comment.avatar}" alt="Avatar"></a>
                        <div class="post__details-reply">
                            <div class="post__details-info">
                                <a href=""><span class="post__details-user-name">${comment.username}</span></a>
                                <i class="fas fa-circle"></i>
                                <span class="post__details-user-time">${convertTime(comment.time)}</span>
                                <input type="hidden" name="userID" value="${comment.userID}">
                            </div>
                            <p class="post__details-comment-content">${comment.content}</p>        
                        </div> 
                    </div>
                    <div class="post__details-change">
                        <button class="post__details-btnX"><i class="fas fa-ellipsis-v"></i></button>
                        <ul class="post__details-change-action">
                            <li class="post__details-change-btnEdit">
                                <i class="fas fa-pencil-alt"></i>
                                <span>Edit</span>
                            </li>
                            <li class="post__details-change-btnDelete">
                                <i class="fas fa-trash-alt"></i>
                                <span>Delete</span>
                            </li>
                            <li class="post__details-change-btnReport">
                                <i class="fas fa-flag"></i>
                                <span>Report</span>
                            </li>
                        </ul>
                    </div>
                `;
                divTag.classList.add('post__replies-item');
                $('.post__replies').appendChild(divTag);
                actionToComment(postDetails[index]);
            }); 
            details(postDetails[index], threads);
        };
    });
}

$('#course-section').addEventListener('change', () => {
    var curSection = parseInt($('#course-section').value);
    var numVideos = sections[curSection - 1].videoList.length;
    $('#course-video').innerHTML = "";
    for(var i = 0; i < numVideos; i++) {
        var optionTag1 = document.createElement("option");
        optionTag1.innerHTML = i + 1;
        optionTag1.value = i + 1;
        $('#course-video').appendChild(optionTag1);
    }
    updateThread(threads);
});

$('#course-video').addEventListener('change', () => {
    updateThread(threads);
});

$('#post-section').addEventListener('change', () => {
    var curSection = parseInt($('#post-section').value);
    var numVideos = sections[curSection - 1].videoList.length;
    $('#post-video').innerHTML = "";
    for(var i = 0; i < numVideos; i++) {
        var optionTag1 = document.createElement("option");
        optionTag1.innerHTML = i + 1;
        optionTag1.value = i + 1;
        $('#post-video').appendChild(optionTag1);
    }
});

btnPost.addEventListener('click', () => {
    var username = $('.item__user-name').innerText;
    var postTitle = $('#topic-title').value;
    var postBody = $('#topic-body').value;
    var postSection = parseInt(($('#post-section').value));
    var postVideo = parseInt(($('#post-video').value));
	var userID = parseInt($('.navbar__item-profile input').value);
    var videoID = sections[postSection-1].videoList[postVideo-1].id;

    var newThread = {
        "userID": userID,
        "postID": "",
        "videoID": videoID,
        "username": username,
        "profile": "/",
        "title": postTitle,
        "avatar": "https://www.fullphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64159fa1279e_avatar-1.jpg",
        "body": postBody,
        "section": postSection,
        "video": postVideo,
        "views": 0,
        "likes": 0,
        "dislikes": 0,
        "replies": 0,
        "status": -1,
        "time": new Date(),
        "comments": []
    }
    
    addPost(newThread);
    threads.push(newThread);
    sections[postSection-1].videoList[postVideo-1].postList.push(newThread);
    updateThread(threads);
    threadModal.style.display = 'none';
    addToast('New Thread created');
});

btnNewThread.addEventListener('click', () =>{
    threadModal.style.display = 'flex';
    $('#post-section').value = parseInt($('#course-section').value);
    $('#post-video').value = parseInt($('#course-video').value);
});

btnX.addEventListener('click', () => {
    threadModal.style.display = 'none';
});

btnCancel.addEventListener('click', () => {
    threadModal.style.display = 'none';
});

// ========== Playlist ==========
const videoDisplay = $('.main___video');
const sidebar = $('.playlist__sidebar');
const btnControl = $('.sidebar-controls-open-close');
const btnNBControl = $('.sidebar__notebook-controls');
const notebook = $('.sidebar__notebook-info');

btnControl.addEventListener('click', () => {
    if(sidebar.style.display == 'none') {
        if($('.content').style.paddingRight == '36rem') {
            $('.content').style.paddingLeft = '32rem';
            $('.content').style.paddingRight = '40rem';
        } else {
            $('.content').style.paddingLeft = '28rem';
            $('.content').style.paddingRight = '4rem';
        }
        sidebar.style.display = 'block';
    } else {
        $('.content').style.paddingLeft = '6rem';
        if($('.content').style.paddingRight == '40rem') {
            $('.content').style.paddingRight = '36rem';
            $('.content').style.paddingLeft = '4rem';
        }
        sidebar.style.display = 'none';
    }
});

btnNBControl.addEventListener('click', () => {
    if(notebook.style.display == 'none') {
        if($('.content').style.paddingLeft == '28rem') {
            $('.content').style.paddingLeft = '32rem';
            $('.content').style.paddingRight = '40rem';
        } else {
            $('.content').style.paddingRight = '36rem';
            $('.content').style.paddingLeft = '4rem';
        }
        notebook.style.display = 'block';
    } else {
        $('.content').style.paddingRight = '6rem';
        if($('.content').style.paddingLeft == '32rem') {
            $('.content').style.paddingLeft = '28rem';
            $('.content').style.paddingRight = '4rem';
        }
        notebook.style.display = 'none';
    }
});

// POSTS == THREADS
function getPost(sections) {
    sections.forEach((section, index) => {
        var numSection = index + 1;
        var videoList = section.videoList;
        videoList.forEach((video, index2) => {
            var numVideo = index2 + 1;
            var videoID = video.id;
            var postList = video.postList;
            postList.forEach((post, index3) => {
                var postID = post.id;
                var title = post.title.trim();
                var body = post.body;
                var views = post.views;
                var likes = post.likes;
                var dislikes = post.dislikes;
                var replies = post.commentList.length;
                var time = new Date(parseInt(post.time));
                var username = post.user.username;
                var profile = "/";
                var userID = post.user.id;
                var avatar = post.user.avatar;
                var comments = [];
                var commentList = post.commentList;
                commentList.forEach((comment, index) => {
                    var usernameCM = comment.user.username;
                    var avatarCM = comment.user.avatar;
                    var profileCM = "/";
                    var timeCM = new Date(parseInt(comment.time));
                    var contentCM = comment.content;
                    var commentTmp = {
                        "commentID": comment.id,
                        "userID": comment.user.id,
                        "postID": postID,
                        "username": usernameCM,
                        "avatar": avatarCM,
                        "profile": profileCM,
                        "content": contentCM,
                        "time": timeCM,
                    }
                    comments.push(commentTmp);
                });
                var postTMP = {
                    "userID": userID,
                    "postID": postID,
                    "videoID": videoID,
                    "username": username,
                    "profile": profile,
                    "title": title,
                    "avatar": avatar,
                    "body": body,
                    "section": numSection,
                    "video": numVideo,
                    "views": views,
                    "likes": likes,
                    "dislikes": dislikes,
                    "replies": replies,
                    "time": time,
                    "status": -1,
                    "comments": comments
                }
                threads.push(postTMP);
            });
        });
    });

    return threads;
}

function updateMaterials(materials, videoID) {
    const materialContainer = $('.main__info-materials');
    var materialList;
    
    materialContainer.innerHTML = "";
    materials.forEach((material, index) => {
        if(material.videoID == videoID) {
            materialList = material.materialList;
            materialList.forEach((material, index) => {
                var liTag = document.createElement('li');
                liTag.innerHTML = `
                    <a href="${material.path}" download>${material.fileName}</a>
                `;
                materialContainer.appendChild(liTag);
            });
        }
    });
}

function updateNotebook(materials, videoID) {
    const NBContainer = $('.sidebar__notebook-container');
    var noteBookList;

    NBContainer.style.display = "block";
    NBContainer.innerHTML = "";
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);
    materials.forEach((material, index) => {
        if(material.videoID == videoID) {
            noteBookList = material.noteBookList;
            if(noteBookList.length == 0) {
                $('.notebook__info-empty').style.display = "block";
            }
            noteBookList.forEach((noteBook, index) => {
                if($('.notebook__info-empty').style.display != 'none') {
                    $('.notebook__info-empty').style.display = 'none';
                }
                var divTag = document.createElement('div');
                divTag.innerHTML = `
                    <div class="notebook__info-actions">
                        <button class="notebook__info-btnPlay">
                        <i class="fas fa-play"></i>
                        <i class="fas fa-pause"></i>
                        <span notebook-info-time>${noteBook.duration}</span>
                        </button>
                        <div class="notebook__info-change">
                            <button class="notebook__info-edit">
                                <i class="fas fa-pencil-alt" title="edit notebook"></i>
                                <span>Save</span>
                            </button>
                            <button class="notebook__info-del">
                                <i class="far fa-trash-alt" title="delete notebook"></i>
                            </button>
                        </div>
                    </div>
                    <div class="notebook__info-cnt">
                        <textarea class="notebook__content" name="nbContent" id="" placeholder="Add notes">${noteBook.content}</textarea>
                        <button>Save</button>
                    </div>
                `;
                divTag.classList.add('notebook__info-content');
                NBContainer.appendChild(divTag);
            });
        }
    });
    $$('.notebook__content').forEach((item, index) => {
        item.addEventListener('change', () => {
            var nextSibling = item.parentNode.children[1];
            nextSibling.style.backgroundColor = "var(--primary-color)";
            nextSibling.style.color = "white";
            nextSibling.addEventListener("click", () => {
                materials.forEach((material, index2) => {
                    if(material.videoID == videoID) {
                        material.noteBookList[index].content = item.value;
                        editNoteBook(material.noteBookList[index]);
                    }
                });
                nextSibling.style.backgroundColor = "#f3f3f3";
                nextSibling.style.color = "black";
                addToast("Save successful!");
            });
        });
    });

    $$('.notebook__info-del').forEach((item, index) => {
        item.addEventListener('click', () => {
            var parentElement = item.parentElement.parentElement.parentElement;
            parentElement.remove(); 
            materials.forEach((material, index2) => {
                if(material.videoID == videoID) {
                    delNoteBook(material.noteBookList[index]);
                    material.noteBookList.splice(index, 1);
                    if(material.noteBookList.length == 0) {
                        $('.notebook__info-empty').style.display = "block";
                    }
                    updateNotebook(materials, videoID);
                }
            });
            if($('.sidebar__notebook-info').childElementCount == 2) $('.notebook__info-empty').style.display = 'block';
        });
    });
}

function getMaterials(sections) {
    sections.forEach((section, index) => {
        var videoList = section.videoList;
        videoList.forEach((video, index2) => {
            var videoID = video.id;
            var materialListTMP = video.materialList;
            var noteBookListTMP = video.noteBookList;
            var materialTMP = {
                "videoID": videoID,
                "materialList": materialListTMP,
                "noteBookList": noteBookListTMP
            }
            materials.push(materialTMP);
        });
    });

    return materials;
}

function resetStatus() {
    if(btnLike.children[1].classList.contains('active')) {
        btnLike.children[1].classList.remove('active');
        btnLike.children[0].classList.add('active');
    }

    if(btnDislike.children[1].classList.contains('active')) {
        btnDislike.children[1].classList.remove('active');
        btnDislike.children[0].classList.add('active');
    }

    if(btnSeen.children[1].classList.contains('active')) {
        btnSeen.children[1].classList.remove('active');
        btnSeen.children[0].classList.add('active');
    }
}

// xxx :like-dislike-seen 
function loadStatus() {
    var result = getSectionVideoNumber();
    var sectionNumber = result[0], videoNumber = result[1];
    var status = parseInt(sections[sectionNumber-1].videoList[videoNumber-1].status);
    var activeVideo = $('.playlist__section-video.active');
    activeVideo.children[1].children[0].style.color = "#fb9300";
    
    resetStatus();

    if(status == 1) {
        activeVideo.children[1].children[0].style.color = "#29bb89";
        btnSeen.children[0].classList.remove('active');
        btnSeen.children[1].classList.add('active');
    } else if (status == 2) {
        btnDislike.children[0].classList.remove('active');
        btnDislike.children[1].classList.add('active');
    } else if (status == 3) {
        activeVideo.children[1].children[0].style.color = "#29bb89";
        btnDislike.children[0].classList.remove('active');
        btnDislike.children[1].classList.add('active');
        btnSeen.children[0].classList.remove('active');
        btnSeen.children[1].classList.add('active');
    } else if (status == 4) {
        btnLike.children[0].classList.remove('active');
        btnLike.children[1].classList.add('active');
    } else if (status == 5) {
        activeVideo.children[1].children[0].style.color = "#29bb89";
        btnLike.children[0].classList.remove('active');
        btnLike.children[1].classList.add('active');
        btnSeen.children[0].classList.remove('active');
        btnSeen.children[1].classList.add('active');
    }
}

const courseCompleteModal = $('.course__percent-modal');

$('.course__percent-modal-close').addEventListener('click', () => {
    courseCompleteModal.style.display = 'none';
});

$('.course__percent-modal-yes').addEventListener('click', () => {
    courseCompleteModal.style.display = 'none';
});

$('.course__percent-modal-no').addEventListener('click', () => {
    courseCompleteModal.style.display = 'none';
});

function loadData(sections) {
    var numCourseVideo = 0;
    var numCompleteVideo = 0;
    var sumCourseTime = 0;
    var sumCompleteTime = 0;
    var numSections = sections.length;
    updateSectionOption(numSections);

    sections.forEach((section, index) => {
        var divTag = document.createElement('div');
        divTag.innerHTML = `
            <div class="playlist__section-header">
                <span class="playlist__section-header-name">${section.title}</span>
            </div>
        `;
        var videos = section.videoList;
        numCourseVideo += section.videoList.length;
        if(index == 0) {
            var numVideos = videos.length;
            updateVideoOption(numVideos);
        }
        videos.forEach((video2, index2) => {
            var divTag2 = document.createElement('div');
            var duration = parseInt(video2.duration.split(":")[0]);
            sumCourseTime += duration;
            var status = parseInt(video2.status);
    
            divTag2.innerHTML = `
                <div class="playlist__section-border"></div>
                <div class="playlist__section-status"><i class="far fa-play-circle"></i></div>
                <div class="playlist__section-list">
                    <div class="playlist__section-video-name">${video2.title}</div>
                    <span class="playlist__section-video-time">${duration} min</span>
                </div>
                <input type="hidden" name="videoPath" value="${video2.path}">
                <input type="hidden" name="videoDescription" value="${video2.description}">
                <input type="hidden" name="videoID" value="${video2.id}">
            `;
            divTag2.classList.add('playlist__section-video');
            divTag.appendChild(divTag2);

            if(status == 1 || status == 3 || status == 5) {
                numCompleteVideo += 1;
                sumCompleteTime += duration;
                divTag2.children[1].children[0].style.color = "#29bb89";
            }

            if(index == 0 && index2 == 0) {
                $('.breadcrumb-video').innerText = video2.title;
                $('.info__actions-video-name').innerHTML = video2.title;
                $('.main___video').src = video2.path;
                $('.info__video-description p').innerHTML = video2.description;
                divTag2.classList.add('active');
            }
        })
        divTag.classList.add('playlist__section');
        if(index == 0) {
            $('.breadcrumb-section').innerText = section.title;
            divTag.classList.add('active');
        }
        sidebar.appendChild(divTag);
    });
    const sectionHeader = $$('.playlist__section-header');
    const videos = $$('.playlist__section-video');
    
    videos.forEach((video, index) => {
        video.onclick = function() {
            var videoTitle = this.children[2].children[0].innerText;
            var sectionTitle = video.parentNode.children[0].children[0].innerHTML;
            $('.breadcrumb-video').innerText = videoTitle;
            $('.breadcrumb-section').innerHTML = sectionTitle;
            $('.info__actions-video-name').innerHTML = videoTitle;
            $('.info__video-description p').innerHTML = video.children[4].value;
            videoDisplay.src = this.children[3].value;
            $('.playlist__section-video.active').classList.remove('active');
            this.classList.add('active');
            var result = getSectionVideoNumber();
            var numSection = result[0], numVideo = result[1];
            var numVideos = sections[numSection-1].videoList.length;
            updateVideoOption(numVideos);
            $('#course-section').value = numSection;
            $('#course-video').value = numVideo;
            $('#post-section').value = numSection;
            $('#post-video').value =  numVideo;
            updateThread(threads);
            var videoID = sections[numSection-1].videoList[numVideo-1].id;
            updateMaterials(materials, videoID);
            updateNotebook(materials, videoID);
            loadStatus();
        };
    });
    
    sectionHeader.forEach((header, index) => {
        header.onclick = function() {
            if(this.classList.contains('active')) this.classList.remove('active');
            else this.classList.add('active');
        };
    });
    courseCompleteModal.style.display = 'flex';
    $('.course__percent-modal-content b.b1').innerHTML = Math.floor((sumCompleteTime/sumCourseTime) * 100) + "%";
    $('.course__percent-modal-content b.b2').innerHTML = numCompleteVideo + "/" + numCourseVideo;
}

async function getCourseLoad(url) {
    var res = await fetch(url);
    var data = await res.json();
    return data;
}

async function assignData() {
    sections = await getCourseLoad("http://localhost:8080/Course/loadCourse?userID=1&courseID=1");
    loadData(sections);
    threads = getPost(sections);
    updateThread(threads);
    materials = getMaterials(sections);
    var videoName = $('.info__actions-video-name').innerText;
    var status = parseInt(sections[0].videoList[0].status);
    loadStatus();
    var videoID = parseInt($('.playlist__section-video.active').children[5].value);
    updateMaterials(materials, videoID);
    updateNotebook(materials, videoID);
}

assignData();