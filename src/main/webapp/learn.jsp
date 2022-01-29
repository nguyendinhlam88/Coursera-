<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <link rel="stylesheet" href="base.css" />
    <link rel="stylesheet" href="learn.css" />
    <title>Online Course</title>
  </head>
  <body>
    <div class="wrapper">
        <!-- ---------- MAIN ---------- -->
      <!-- header -->
      <div class="header">
        <div class="header__navbar">
          <nav class="header__navbar-list">
            <!-- category -->
            <div class="navbar__item-category">
              <button class="item__category-btn"><i class="fas fa-list-ol"></i></button>
            </div>
            <!-- logo -->
            <a href="/"><img src="views/user/learn/assets/img/logo.png" alt="Web Logo" class="navbar__item-logo"></a>
            <!-- search -->
          </nav>
          <nav class="header__navbar-list">
            <div class="navbar__item-search">
              <button class="navbar__item-button-back"><i class="fas fa-arrow-circle-left"></i></button>
              <div class="item__search-input">
                <input class="item__search-input-search" type="text" placeholder="What would you like to learn?"/>
                <!-- search-history -->
                <ul class="item__search-history">
                  <li>
                    <h3 class="search__history-heading">Recent viewed</h3>
                    <ul class="search__history-list">
                      <li class="search__history-item">
                          <a href="/learn/neural-networks-deep-learning">
                              <img src="views/user/learn/assets/img/Course-logo-1.png" alt="Course Logo">
                              <div class="search__history-course-desc">
                                  <span class="course-name">Neural Network and Deep Learning</span>
                                  <span class="course-origin">DeepLearning.AI</span>
                              </div>
                          </a>
                      </li>
                      <li class="search__history-item">
                          <a href="/learn/neural-networks-deep-learning">
                              <img src="views/user/learn/assets/img/Course-logo-1.png" alt="Course Logo">
                              <div class="search__history-course-desc">
                                  <span class="course-name">Neural Network and Deep Learning</span>
                                  <span class="course-origin">DeepLearning.AI</span>
                              </div>
                          </a>
                      </li>
                      <li class="search__history-item">
                          <a href="/learn/neural-networks-deep-learning">
                              <img src="views/user/learn/assets/img/Course-logo-1.png" alt="Course Logo">
                              <div class="search__history-course-desc">
                                  <span class="course-name">Neural Network and Deep Learning</span>
                                  <span class="course-origin">DeepLearning.AI</span>
                              </div>
                          </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <h3 class="item__search-history-heading">Popular right now</h3>
                    <ul class="search__history-list">
                      <li class="search__history-item">
                          <a href="/search?query=python">
                              <i class="fas fa-search"></i>
                              <span>Python</span>
                          </a>
                      </li>
                      <li class="search__history-item">
                          <a href="/search?query=data-science">
                              <i class="fas fa-search"></i>
                              <span>Data Science</span>
                          </a>
                      </li>
                      <li class="search__history-item">
                          <a href="/search?query=tensorflow">
                              <i class="fas fa-search"></i>
                              <span>TensorFlow</span>
                          </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <button class="item__search-btn"><i class="fas fa-search"></i></button>
            </div>
          </nav>
          <nav class="header__navbar-list">
              <button class="navbar__item-notify">
                  <i class="far fa-bell"></i>
                  <div class="navbar__item-notifications">
                      <h3 class="navbar__notify-heading">Notifications</h3>
                      <div class="navbar__notify-list navbar__notify-list--no">
                          <span>No notifications</span>
                          <span>We'll let you know when deadlines are approaching, or there is a course update</span>
                      </div>
                      <ul class="navbar__notify-list navbar__notify-list-yes">
                          <li></li>
                          <li></li>
                          <li></li>
                      </ul>
                  </div>
              </button>
              <button class="navbar__item-profile">
                  <span class="item__user-name">Leonard TV</span>
                  <img src="views/user/learn/assets/img/avt.png" alt="Avatar" class="item__user-img">
                  <ul class="profile__box-list">
                      <li class="profile__box-item"><a href="/my-courses">My courses</a></li>
                      <li class="profile__box-item"><a href="/profile">Profile</a></li>
                      <li class="profile__box-item"><a href="/my-purchases">My Purchases</a></li>
                      <li class="profile__box-item"><a href="/setting-accout">Settings</a></li>
                      <li class="profile__box-item"><a href="/updates">Updates</a></li>
                      <li class="profile__box-item"><a href="/accomplishments">Accomplishments</a></li>
                      <li class="profile__box-item"><a href="/help-center">Help Center</a></li>
                      <li class="profile__box-item"><a href="/">Logout</a></li>
                  </ul>
              </button>
          </nav>
        </div>
      </div>
      <div class="breadcrumb">
        <li class="breadcrumb-list">
          <ul class="breadcrumb-course">Home</ul>
          <ul class="breadcrumb-separator"><i class="fas fa-chevron-right"></i></ul>
          <ul class="breadcrumb-section">Introduction to Marketing</ul>
          <ul class="breadcrumb-separator"><i class="fas fa-chevron-right"></i></ul>
          <ul class="breadcrumb-video">Introduction &amp; Install</ul>
        </li>
        <li class="breadcrumb-list">
          <ul class="breadcrumb-item">
            <ul class="breadcrumb-separator"><i class="fas fa-chevron-left"></i></ul>
            <span class="breadcrumb-item-previous">Previous</span>
          </ul>
          <ul class="breadcrumb-item">
            <span class="breadcrumb-item-next">Next</span>
            <ul class="breadcrumb-separator"><i class="fas fa-chevron-right"></i></ul>
          </ul>
        </li>
      </div>
      <!-- content -->
      <div class="content">
        <div class="grid__column-21">
          <div class="playlist__sidebar">
            
          </div>
          <div class="playlist_sidebar-controls">
            <button class="sidebar-controls-open-close">
              <i class="fas fa-list-ul"></i>
            </button>
          </div>
        </div>
        <div class="grid__column-5">
          <!-- content-main-video -->
          <div class="container-mid">
            <div class="content__main">
              <!-- Video -->
              <div class="info__actions-video-name">Introduction To Artificial Intelligence</div>
              <div class="content__main-video">
                <iframe class="main___video" src="https://www.youtube.com/embed/4_ddOSTmR4M?showinfo=0" allowfullscreen></iframe>
              </div>
              <!-- More Information About Video -->
              <div class="content__main-info">
                <!-- Actions -->
                <div class="main__info-actions">
                  <div class="info__actions-list">
                    <button class="main__info-btnNote">
                      <i class="far fa-calendar-check"></i>
                      <span>Save Note</span>
                    </button>
                    <button class="main__info-btnDownload">
                      <span>Download</span>
                      <i class="fas fa-angle-down"></i>
                    </button>
                  </div>
                  <div class="info__actions-list">
                    <button class="info__actions-item-Share">
                      <i class="far fa-share-square"></i>
                      <span>Share</span>
                    </button>
                    <button class="info__actions-item-Like">
                      <i class="far fa-thumbs-up active"></i>
                      <i class="fas fa-thumbs-up"></i>
                    </button>
                    <button class="info__actions-item-Dislike">
                      <i class="far fa-thumbs-down active"></i>
                      <i class="fas fa-thumbs-down"></i>
                    </button>
                  </div>
                </div>
                <div class="info__video-description">
                  <p>   In this video, we'll go over logistic regression.
                    This is a learning algorithm that you use when the output labels Y
                    in a supervised learning problem are all either zero or one,
                    so for binary classification problems.
                    Given an input feature vector X maybe corresponding to
                    an image that you want to recognize as either a cat picture or not a cat picture.
                  </p>
                </div>
                <!-- Interaction Buttons -->
                <div class="info-btn-discussion">Discussion Forums</div>
                <!-- Interactions -->
                <div class="main__info-interactions">
                  <div class="main__info-interaction info__course-discussions">
                    <div class="discussion__post-overview">
                      <div class="discussion__header">
                        <div>
                          <label for="course-section">SECTION: </label>
                          <select name="course-section" id="course-section">
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                          <label for="course-video">VIDEO: </label>
                          <select name="course-video" id="course-video">
                            <option value="1">1</option>
                            <option value="2">2</option>
                          </select>
                        </div>
                        <button class="discussion__add">New Thread</button>
                      </div>
                      <div class="content__discussion">
                      </div>
                    </div>
                    <div class="discussion__post-details">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid__column-22">
          <!-- sidebar - playlist -->
          <div class="sidebar__notebook">
            <div class="sidebar__notebook-controls">
              <button class="sidebar-controls-notebook">
                <i class="fas fa-bars"></i>
              </button>
            </div>
            <div class="sidebar__notebook-info">
              <h2 class="sidebar__notebook-info-header">Notes</h2>
              <div class="notebook__info-empty">
                <div>
                  <img src="views/user/learn/assets/img/icon_note.svg" alt="">
                  <img src="views/user/learn/assets/img/icon_highlight.svg" alt="">
                </div>
                <div>
                  Click the âSave Noteâ button below the lecture when you want to capture a screen. You can also highlight and save lines from the transcript below. Add your own notes to anything youâve captured.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ---------- MORE ---------- -->
      <!-- Clipboard -->
      <div class="clipboard__toast">
      </div>
      <!-- Category modal -->
      <div class="item__category-modal">
        <div class="container">
          <div class="category__modal-header">
            <button class="item__category-btn1"><i class="fas fa-list-ol"></i></button>
            <!-- logo -->
            <a href="/"><img src="views/user/learn/assets/img/logo.png" alt="Web Logo" class="navbar__item-logo"></a>
          </div>
          <!-- search -->
          <ul class="category__modal-list">
              <h3>Most popular</h3>
              <li class="category__modal-item"><a href="/courses/development"><i class="far fa-handshake"></i><span>Development</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/business"><i class="fas fa-building"></i><span>Business</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/finance-and-accounting"><i class="fas fa-money-check-alt"></i><span>Finance &amp; Accounting</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/it-and-software"><i class="fas fa-laptop-code"></i><span>IT &amp; Software</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/office-productivity"><i class="fab fa-product-hunt"></i><span>Office Productivity</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/personal-development"><i class="fas fa-brain"></i><span>Personal Development</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/design"><i class="fas fa-palette"></i><span>Design</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/marketing"><i class="fas fa-ad"></i><span>Marketing</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/lifestyle"><i class="fas fa-heartbeat"></i><span>Lifestyle</span> <i class="fas fa-angle-right"></i></a></li>
              <li class="category__modal-item"><a href="/courses/photography-and-video"><i class="fas fa-camera"></i><span>Photography &amp; Video</span> <i class="fas fa-angle-right"></i></a></i></li>
              <li class="category__modal-item"><a href="/courses/healthy-and-fitness"><i class="fas fa-snowboarding"></i><span>Healthy &amp; Fitness</span> <i class="fas fa-angle-right"></i></a></li>
          </ul>
        </div>
      </div>
      <!-- Thread Modal -->
      <div class="thread__modal">
        <div class="container">
          <button class="container__post-close"><i class="fas fa-times"></i></button>
          <h3 class="thread__modal-header">Create a new thread</h3>
          <div class="thread__modal-content">
            <div>
              <label for="topic-title">Title <span>*</span></label>
              <input type="text" name="topic-title" id ="topic-title" placeholder="Write a descriptive title" required>
            </div>
            <div>
              <label for="topic-body">Body <span>*</span></label>
              <textarea class="post__body-content" placeholder="Provide supporting details or context" name="topic-body" id="topic-body"></textarea>
            </div>
            <div class="post__pick">
              <label for="post-section">Section <span>*</span></label>
              <select name="post-section" id="post-section">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
              <label for="post-video">Video <span>*</span></label>
              <select name="post-video" id="post-video">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div class="post__button">
              <button class="post__button-cancel">Cancel</button>
              <button class="post__button-post">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="learn.js"></script>
  </body>
</html>
