import React, { useState, Component } from 'react';

const arrList = ['state test 1', 'state test 2', 'state test 3', ];
function About(props) {
    const [color, setColor] = useState(false);
    const [color2, setColor2] = useState('red');
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePass = (e) => {
        setPass(e.target.value)
    }
    function submitForm() {
        let data = new FormData();
        fetch('/api/login',
        {
            method: "POST",
            body: data,
        })
    }
    function fontPercentage(width) {
        if(document.activeElement.style.width >= Number(document.activeElement.parentElement.style.width.replace(/\D/g, ''))) {
            console.log(width, 'width', document.getElementsByTagName('span'), document.getElementById('top123'), 'document.activeElement.parentElement.style.width')
            return '0'
        } else {
            return fontPercentage(10)
        }
    }
    return (
        <div className="about">
        <h2>About SolveJS Bumpers</h2>
        <p>SolveJS Bumpers is your source for humerous bumper stickers. If you enjoy looking back to see someone smiling or laughing because of the bumper sticker on your vehicle, you are at the right place now.
        </p>
        <p>If you feel that little internal tickle or giggle in knowing that your bumper sticker has placed a smile on someone's face, you're at the right site.
        </p>
        <p>
        We trust you will find the best bumper stickers money can buy to help lighten the mood for those who read your stickers as they make their commute to / from work.
        </p> 
        </div>
        )
    }
    
    
function Button(props) {
    return (
            arrList.map(item => <Item col={props.col} name={item} colChange={props.colChange} />
                )
                )
}
function Form(props) {
    return (
        <form action="/api/login" onSubmit={props.sub} method="post">
        <input type="text" name="username" defaultValue={props.user} onChange={props.userChange}/>
        <input type="text" name="password" defaultValue={props.pass} onChange={props.passChange}/>
        <button type="submit">Submit</button>
        </form>
    )
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            col: 'red',
            colChange: this.props.colChange
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
        col: 'green'
    })
}
    render() {
        let i=0;
        return <button key={i++} style={{backgroundColor: this.state.col}} onClick={this.handleClick}>{this.props.name}</button>
    }
}
export default About;