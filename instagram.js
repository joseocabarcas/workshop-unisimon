import './instagram-style.css'
import avengers from './avengers.json'
import avengersPosts from './avengers_posts.json'

console.log('Avengers list ====>', avengers)

const list = avengers.data.map(avenger => {
  return `
    <li class="story">
      <div class="story-item">
        <div class="profile">
          <!-- Circle border -->
          <div class="circle">
            <div class="dummy-image"></div>
          </div>
          <!-- Profile -->
          <div class="container-profile">
            <span class="circle-profile ${avenger.isLive ? 'animation' : ''}">
              <img src="${avenger.photo}" />
            </span>
          </div>
          ${avenger.isLive ? `
            <!-- Animation ring -->
            <div class="animation-circle"></div>
            <!-- Badge -->
            <div class="container-live-badge">
              <span class="live-badge">VIVO</span>
            </div>
          `: ''}
        </div>
        <!-- Username -->
        <div class="container-username">
          <p class="username">${avenger.username}</p>
        </div>
      </div>
    </li>
  `
})

console.log('list', list)

document.querySelector('#stories-list').innerHTML = list.join('')



// Posts

console.log('Avengers list posts ====>', avengersPosts)

buildPosts(avengersPosts)

function buildPosts(data) {
  const posts = document.getElementById('posts-list')

  for (let index = 0; index < avengersPosts.data.length; index++) {
    const element = avengersPosts.data[index];
    
    var rowHtml = `
    <div class="post">
      <!-- header -->
      <div class="post-header">
        <div class="profile-image">
          <div class="profile small">
            <!-- Circle border -->
            <div class="circle small">
              <div class="dummy-image"></div>
            </div>
            
            <!-- Profile -->
            <div class="container-profile">
              <span class="circle-profile small">
                <img src="${element.photo}" />
              </span>
            </div>
          </div>
        </div>
        <div class="profile-user">
          <div class="user">
            <p class="username">${element.username}</p>
            <p class="hour">${element.post.hour}</p>
          </div>
          <p class="location">${element.post.location}</p>
        </div>
      </div>
      <!-- image -->
      <div class="post-image">
        <img src="${element.post.picture}" />
      </div>
      <!-- description -->
      <div class="post-description">
        <div class="username-text">
          <a href="#">${element.username}</a>
        </div>
        <span>
          ${element.post.description}
        </span>
      </div>
    </div>
    `

    posts.innerHTML += rowHtml
  }
}