// const mainBookmarkArea = document.getElementById('content-bookmarks');
const mainBookmarkArea = document.getElementById('bookmark-list');
const linkUrl = document.getElementById('link-url');
const linkName = document.getElementById('link-name');
const linkCategory = document.getElementById('category-selection');
const createBookmarkButton = document.getElementById('create-bookmark-button')

export function CreateBookmark() {
        // create new bookmark
        // document.querySelectorAll('input.recording').forEach(item => item.addEventListener('keyup', (e) => {
        //     console.log(item.value);
        // })
        // );
        createBookmarkButton.onclick = () => {
            console.log('linkurl', `${linkUrl.value}`);
            let bookmarkLI = document.createElement('li');
            bookmarkLI.classList.add(`${linkCategory.value}`);
            let bookmarkContent = document.createElement('a');
            bookmarkContent.setAttribute('href', `${linkUrl.value}`);
            bookmarkLI.appendChild(bookmarkContent);
            bookmarkContent.innerText = `${linkName.value}`;
            //let newBookmark = `<li class="bookmark-item ${linkCategory.value}"><a href="${linkUrl.value}">${linkName.value}</a>${linkName.value}</li>`;
            mainBookmarkArea.append(bookmarkLI);
        }
    }

/* export function Bookmark(linkUrl, linkName, linkCategory) {
        this.linkUrl = linkUrl;
        this.linkName = linkName;
        this.linkCategory = linkCategory;
    return function createBookmark() {
        // create new bookmark
        let newBookmark = `<li class="bookmark-item ${linkCategory.value}"><a href="${linkUrl.value}">${linkName.value}</a></li>`;
        mainBookmarkArea.appendChild(newBookmark);
    }
} */

/* export class Bookmark {
    
    constructor(linkUrl, linkName, linkCategory) {
        this.linkUrl = linkUrl;
        this.linkName = linkName;
        this.linkCategory = linkCategory;
    }
    createBookmark() {
        // create new bookmark
        let newBookmark = `<li class="bookmark-item ${linkCategory.value}"><a href="${linkUrl.value}">${linkName.value}</a></li>`;
        mainBookmarkArea.appendChild(newBookmark);
    }
} */