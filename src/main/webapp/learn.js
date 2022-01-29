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

btnNext.addEventListener('click', () => {
    var activeVideo = $('.playlist__section-video.active');
    var nextSibling = activeVideo.nextSibling;
    if(nextSibling.innerHTML.length > 0) {
        activeVideo.classList.remove('active');
        nextSibling.classList.add('active');
        $('.info__actions-video-name').innerHTML = nextSibling.children[0].innerHTML;
        $('.breadcrumb-video').innerHTML = nextSibling.children[0].innerHTML;
        $('.main___video').src = nextSibling.children[2].value;
    } else {
// 
    }
});

$('.breadcrumb-course').addEventListener('click', () => {
    // let currentURL = document.location.href;
    // let pos = currentURL.lastIndexOf('/');
    // let urlCourse = currentURL.slice(0, pos);
    // let pos = urlCourse.lastIndexOf('/');
    // let urlHomePage = urlCourse.slice(0, pos);
    // window.location = urlHomePage;
});

$('.breadcrumb-section').addEventListener('click', () => {
    let currentURL = document.location.href;
    let pos = currentURL.lastIndexOf('/');
    let urlCourse = currentURL.slice(0, pos);
    window.location = urlCourse;
});

btnPrevious.addEventListener('click', () => {
    var activeVideo = $('.playlist__section-video.active');
    var previousSibling = activeVideo.previousSibling;
    if(previousSibling.innerHTML.length > 0) {
        activeVideo.classList.remove('active');
        previousSibling.classList.add('active');
        $('.info__actions-video-name').innerHTML = previousSibling.children[0].innerHTML;
        $('.breadcrumb-video').innerHTML = previousSibling.children[0].innerHTML;
        $('.main___video').src = previousSibling.children[2].value;
    } else {
// 
    }
});

// ========== ACTIONS ==========
const btnLike = $('.info__actions-item-Like');
const btnDislike = $('.info__actions-item-Dislike');
const btnShare = $('.info__actions-item-Share');
const btnSaveNote = $('.main__info-btnNote');
const btnDownload = $('.main__info-btnDownload');
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
                <i class="fas fa-pencil-alt"></i>
            </button>
            <button class="notebook__info-del">
                <i class="far fa-trash-alt"></i>
            </button>
            </div>
        </div>
        <div class="notebook__info-cnt">
            <textarea class="notebook__content" name="nbContent" id="" placeholder="Add notes"></textarea>
        </div>
    `;
    divTag.classList.add('notebook__info-content');
    $('.sidebar__notebook-info').appendChild(divTag);
    $$('.notebook__info-del').forEach((item, index) => {
        item.addEventListener('click', () => {
            var parentElement = item.parentElement.parentElement.parentElement;
            parentElement.remove(); 
            if($('.sidebar__notebook-info').childElementCount == 2) $('.notebook__info-empty').style.display = 'block';
        });
    });
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
    if(btnLike.children[0].classList.contains('active')) {
        btnLike.children[0].classList.remove('active');
        btnLike.children[1].classList.add('active');
    } else {
        btnLike.children[1].classList.remove('active');
        btnLike.children[0].classList.add('active');
    }

    var dislikeTag = $('.info__actions-item-Dislike');
    if(!dislikeTag.children[0].classList.contains('active')) {
        dislikeTag.children[1].classList.remove('active')
        dislikeTag.children[0].classList.add('active')
    }
});

btnDislike.addEventListener('click', () => {
    if(btnDislike.children[0].classList.contains('active')) {
        btnDislike.children[0].classList.remove('active');
        btnDislike.children[1].classList.add('active');
    } else {
        btnDislike.children[1].classList.remove('active');
        btnDislike.children[0].classList.add('active');
    }
    
    var dislikeTag = $('.info__actions-item-Like');
    if(!dislikeTag.children[0].classList.contains('active')) {
        dislikeTag.children[1].classList.remove('active')
        dislikeTag.children[0].classList.add('active')
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

btnDownload.addEventListener('click', () => {

});

// ========== INTERACTIONS ==========
const interactions = $$('.main__info-interaction');
const btnUpload = $('.is-constructor');
const inputUpload = $('.upload-file');

// ================== New Thread =================
const threads = [
    {
        "username": "Leonard TV",
        "profile": "/",
        "avatar": "https://www.fullphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64159fa1279e_avatar-1.jpg",
        "title": "How to pass the subject?",
        "body": "Fight more!",
        "section": 1,
        "video": 1,
        "views": 0,
        "replies": 0,
        "time": Date.parse(new Date()),
        "votes": 0,
        "comments": []
    }
];
const btnNewThread = $('.discussion__add');
const threadModal = $('.thread__modal')
const btnX = $('.container__post-close');
const btnCancel = $('.post__button-cancel');
const btnPost = $('.post__button-post');

function convertTime(postSecond) {
    var postSecond = Date.parse(new Date())/1000 - postSecond/1000;
    if(postSecond < 60) postSecond = postSecond + " seconds ago";
    else if(postSecond == 60) postSecond = "1 minute ago";
    else if(postSecond < 3600) postSecond = Math.ceil(postSecond/60) + " minutes ago";
    else if(postSecond == 3600) postSecond = "1 hour ago";
    else if(postSecond < 86400) postSecond = Math.ceil(postSecond/3600) + " hours ago";
    else if(postSecond <= 172800) postSecond = "1 day ago";
    else postSecond = Math.ceil(postSecond/86400) + " days ago";
    return postSecond;
}

// Sau khi vào post details thì mới có các chức năng như BACK, REPLY, VOTE.
function details(postDetails) {
    const btnReply = $('.post__replies-add button');
    const replyContent = $('.post__replies-add-content');
    const btnBack = $('.post-details-btn-back');
    const btnUpvotes = $('.post__detail-upvote');

    btnBack.addEventListener('click', () => {
        $('.discussion__post-details').style.display = 'none';
        $('.discussion__post-overview').style.display = 'block';
        updateThread();
    });

    btnReply.addEventListener('click', () => {
        if(replyContent.value.trim() != '') {
            var username = $('.item__user-name').innerText;
            var img = $('.item__user-img');
            var time = Date.parse(new Date());
            var divTag = document.createElement('div');
            divTag.innerHTML = `
                <div class="post__details-user">
                <a href=""><img class="post__details-user-avt" src="${img.src}" alt="Avatar"></a>
                <a href=""><span class="post__details-user-name">${username}</span></a>
                <i class="fas fa-circle"></i>
                <span class="post__details-user-time">${Math.round((Date.parse(new Date()) - time)/1000)} second ago</span>
                </div>
                <p>${replyContent.value.trim()}</p>        
            `;
            divTag.classList.add('post__replies-item');
            $('.post__replies').appendChild(divTag);
            var comment = {
                "username": username,
                "avatar": img.src,
                "profile": "/",
                "content": replyContent.value.trim(),
                "time": time
            }
            postDetails.replies += 1;
            postDetails.comments.push(comment);
            replyContent.value = '';
        }
    });

    btnUpvotes.addEventListener('click', () => {
        var numVote = parseInt($('.post__detail-upvote-num').innerText);
        postDetails.votes += 1;
        numVote += 1;
        $('.post__detail-upvote-num').innerText = numVote;
    });
}

function createPostTag(threadData) {
    var title = threadData.title;
    var username = threadData.username;
    var postSecond = convertTime(threadData.time);
    var views = threadData.views;
    if(views > 1000) {
        views = Math.floor(views/1000);
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
                <span class="discussion__user-time">${postSecond}</span>
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
function createDetailTag(postDetails) {
    var postSecond = convertTime(postDetails.time);
    postDetails.views += 1;
    $('.discussion__post-overview').style.display = 'none';
    var divTag = document.createElement('div');
    divTag.innerHTML = `
        <button class="post-details-btn-back">BACK</button>
        <h3 class="post__details-title">${postDetails.title}</h3>
        <div class="post__details-user">
        <a href="${postDetails.profile}"><img class="post__details-user-avt" src="${postDetails.avatar}" alt=""></a>
        <a href="${postDetails.profile}"><span class="post__details-user-name">${postDetails.username}</span></a>
        <i class="fas fa-circle"></i>
        <span class="post__details-user-time">${postSecond}</span>
        </div>
        <p class="post__details-content">${postDetails.body}</p>
        <div class="post__details-actions">
        <button class="post__detail-upvote">
            <i class="fas fa-angle-up"></i>
            <span class="post__detail-upvote-num">${postDetails.votes}</span>
            <span>Upvotes</span>
        </button>
        <button class="post__detail-reply">
            <i class="far fa-comment-alt"></i>
            <span>Reply</span>
        </button>
        </div>
        <div class="post__replies">
        </div>
        <div class="post__replies-add">
        <div class="post__replies-add1">
            <a href=""><img class="post__details-user-avt" src="./assets/img/avt.png" alt=""></a>
            <textarea class="post__replies-add-content" name="" id="" placeholder="Reply"></textarea>
        </div>
        <button>Reply</button>
        </div>
    `;
    $('.discussion__post-details').innerHTML = '';
    $('.discussion__post-details').appendChild(divTag);
    $('.discussion__post-details').style.display = 'block';
}



// Mỗi lần có thêm thread(Bài đăng), hay comment mới trên bài đăng thì update lại.
function updateThread() {
    var threadSection = $('#course-section').value;
    var threadVideo = $('#course-video').value;
    
    var threadData = threads.filter((curThread) => {
        return curThread.section == threadSection && curThread.video == threadVideo;
    });

    $('.content__discussion').innerHTML = '';
    
    for(var i = 0; i < threadData.length; i++) {
        $('.content__discussion').appendChild(createPostTag(threadData[i]));
    }
    const posts = $$('.discussion__post');

    posts.forEach((post, index) => {
        var postDetails = threads[index];
        
        post.onclick = function() {
            createDetailTag(postDetails);
            var comments = postDetails.comments;
            // console.log(comments);
            $('.post__replies').innerHTML = '';
            comments.forEach((comment) => {
                var divTag = document.createElement('div');
                divTag.innerHTML = `
                    <div class="post__details-user">
                    <a href=""><img class="post__details-user-avt" src="${comment.avatar}" alt="Avatar"></a>
                    <a href=""><span class="post__details-user-name">${comment.username}</span></a>
                    <i class="fas fa-circle"></i>
                    <span class="post__details-user-time">${convertTime(comment.time)}</span>
                    </div>
                    <p>${comment.content}</p>        
                `;
                divTag.classList.add('post__replies-item');
                $('.post__replies').appendChild(divTag);
            }); 
            details(postDetails);
        };
    });
}

updateThread();

$('#course-section').addEventListener('change', () => {
    updateThread();
});

$('#course-video').addEventListener('change', () => {
    updateThread();
});

btnNewThread.addEventListener('click', () =>{
    threadModal.style.display = 'flex';
});

btnX.addEventListener('click', () => {
    threadModal.style.display = 'none';
});

btnCancel.addEventListener('click', () => {
    threadModal.style.display = 'none';
});

btnPost.addEventListener('click', () => {
    var username = $('.item__user-name').innerText;
    var postTitle = $('#topic-title').value;
    var postBody = $('#topic-body').value;
    var postSection = $('#post-section').value;
    var postVideo = $('#post-video').value;
    var time = Date.parse(new Date());

    var newThread = {
        "username": username,
        "profile": "/",
        "avatar": "https://www.fullphim.net/static/5fe2d564b3fa6403ffa11d1c/5fe2d564b3fa64159fa1279e_avatar-1.jpg",
        "title": postTitle,
        "body": postBody,
        "section": postSection,
        "video": postVideo,
        "views": 0,
        "replies": 0,
        "time": time,
        "votes": 0,
        "comments": []
    } 
    threads.push(newThread);
    threadModal.style.display = 'none';
    addToast('New Thread created');
    updateThread();
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

sections = [
    {
        "name": "Dive Into Docker!",
        "videos": [
            {
                "title": "Introduction & Install",
                "path": "https://www.youtube.com/embed/r6JiWwh-08c"
            },
            {
                "title": "Docker Image, Container",
                "path": "https://www.youtube.com/embed/9Gf4vRYSkK8"
            },
            {
                "title": "Docker exec command",
                "path": "https://www.youtube.com/embed/oNOfBQPcOs0"
            }
        ]
    },
    {
        "name": "Manipulating Containers with the Docker Client",
        "videos": [
            {
                "title": "Share data into docker",
                "path": "https://www.youtube.com/embed/DSP2-ip38Zw"
            },
            {
                "title": "Networking into docker",
                "path": "https://www.youtube.com/embed/k1SwXOxvMdE"
            },
            {
                "title": "Project: Install PHP",
                "path": "https://www.youtube.com/embed/qwofZjKaeMs"
            }
        ]
    },
    {
        "name": "Manipulating Containers with the Docker Client",
        "videos": [
            {
                "title": "Share data into docker",
                "path": "https://www.youtube.com/embed/DSP2-ip38Zw"
            },
            {
                "title": "Networking into docker",
                "path": "https://www.youtube.com/embed/k1SwXOxvMdE"
            },
            {
                "title": "Project: Install PHP",
                "path": "https://www.youtube.com/embed/qwofZjKaeMs"
            }
        ]
    },
    {
        "name": "Manipulating Containers with the Docker Client",
        "videos": [
            {
                "title": "Share data into docker",
                "path": "https://www.youtube.com/embed/DSP2-ip38Zw"
            },
            {
                "title": "Networking into docker",
                "path": "https://www.youtube.com/embed/k1SwXOxvMdE"
            },
            {
                "title": "Project: Install PHP",
                "path": "https://www.youtube.com/embed/qwofZjKaeMs"
            }
        ]
    },
    {
        "name": "Manipulating Containers with the Docker Client",
        "videos": [
            {
                "title": "Share data into docker",
                "path": "https://www.youtube.com/embed/DSP2-ip38Zw"
            },
            {
                "title": "Networking into docker",
                "path": "https://www.youtube.com/embed/k1SwXOxvMdE"
            },
            {
                "title": "Project: Install PHP",
                "path": "https://www.youtube.com/embed/qwofZjKaeMs"
            }
        ]
    },
    {
        "name": "Manipulating Containers with the Docker Client",
        "videos": [
            {
                "title": "Share data into docker",
                "path": "https://www.youtube.com/embed/DSP2-ip38Zw"
            },
            {
                "title": "Networking into docker",
                "path": "https://www.youtube.com/embed/k1SwXOxvMdE"
            },
            {
                "title": "Project: Install PHP",
                "path": "https://www.youtube.com/embed/qwofZjKaeMs"
            }
        ]
    }
]

sections.map((section, index) => {
    var divTag = document.createElement('div');
    divTag.innerHTML = `
        <div class="playlist__section-header">
            <span class="playlist__section-header-name">${section.name}</span>
        </div>
    `;
    var videos = section.videos;
    videos.map((video2, index2) => {
        var divTag2 = document.createElement('div');
        divTag2.innerHTML = `
            <div class="playlist__section-video-name">${video2.title}</div>
            <span class="playlist__section-video-time">00:02:36</span>
            <input type="hidden" name="" value="${video2.path}">
        `;
        divTag2.classList.add('playlist__section-video');
        divTag.appendChild(divTag2);
        if(index == 0 && index2 == 0) divTag2.classList.add('active');

    })
    divTag.classList.add('playlist__section');
    if(index == 0) divTag.classList.add('active');
    sidebar.appendChild(divTag);
});

const sectionHeader = $$('.playlist__section-header');
const videos = $$('.playlist__section-video');

videos.forEach((video, index) => {
    video.onclick = function() {
        var videoTitle = this.children[0].innerText;
        $('.info__actions-video-name').innerHTML = videoTitle;
        videoDisplay.src = this.children[2].value;
        $('.playlist__section-video.active').classList.remove('active');
        this.classList.add('active');
    };
});

sectionHeader.forEach((header, index) => {
    header.onclick = function() {
        if(this.classList.contains('active')) this.classList.remove('active');
        else this.classList.add('active');
    };
});


