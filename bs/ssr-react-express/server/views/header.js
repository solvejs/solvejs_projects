let headerInfo = 
// document.write(
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bumper Stickers test</title>
        <link rel="icon" href="images/favicon.ico" type="image/x-icon">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/grid-flex.css">
        <link href="https://fonts.googleapis.com/css?family=Cabin+Sketch|Londrina+Sketch&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body id="body">
        <header class="header site-header">
            <div class="header nav-menu-flex ">
                <nav class="nav-menu">
                    <ul>
                            <li class="nav-menu-item to-hide"><a href="/">Home</a></li>
                            <li class="nav-menu-item to-hide"><a href="#">Categories</a></li>
                            <li class="nav-menu-item to-hide"><a href="#">About</a></li>
                            <li id='contact-form-nav' class="nav-menu-item click-hide-contact-us to-hide"><a href="#">Contact</a></li>
                            <li class="nav-menu-item to-hide"><a href="#">Account</a></li>
                            <li class="nav-menu-item to-hide admin"><a href="admin.html">Admin</a></li>
                        <ul id="hamburger">
                            <div class="nav-menu-item hamburger-list"></div>
                            <div class="nav-menu-item hamburger-list"></div>
                            <div class="nav-menu-item hamburger-list"></div>
                        </ul>
                        <li class="nav-menu-item" alt="shopping-cart"><a href="#">&#x1F6D2;</a></li>
                        <li class="search">
                            <label for="search">Search</label>
                            <input type="search" id="search" placeholder="Search Bumpers">
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <h1>Bumper Stickers - Choose Wisely</h1>
        <div id="contact-wrapper" class="hide-element">
            <div id="contact-form-div">
                <form id='toggle-contact-form' class="">
                    <label for="email-contact-name" class="f-l-i">Contact Name</label>
                    <input type="text" id="email-contact-name"  class="f-l-i" placeholder="Name" required>
                    <label for="email-contact" class="f-l-i">Contact Email</label>
                    <input type="email" id='email-contact' class="f-l-i" placeholder="contact email" required>
                <label for="contact-email-category" class="f-l-i">Select Category</label>
                <select id="contact-email-category" class="f-l-i">
                    <optgroup>
                        <option value="email-contact-cat-general" selected>General</option>
                        <option value="email-contact-cat-website">Website</option>
                        <option value="email-contact-cat-order">Order</option>
                        <option value="email-contact-cat-other">Other</option>
                    </optgroup>
                </select>
                <textarea id="email-message" minlength="50" maxlength="1800" cols="" rows="20" placeholder="Please type your message here before sending." required></textarea>
                <button type="submit" value="Send">Send Message</button>
                <button type="reset">Reset</button>
                <button id="cancel-form-button" class="click-hide-contact-us">Cancel</button>
            </form>
        </div>
    </div>`;