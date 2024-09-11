class SendMessageChatButton {
    constructor(width, height, type = 'button', color = 'green') {
        this.width = width;
        this.height = height;
        this.type = type;
        this.color = color
    }
    onClick() {
        console.log(this.props);
    }
}

let sendMessageButton = new SendMessageChatButton (50,25);
//console.log(sendMessageButton);

function testButton(property){
   return property.width === 50 &&
          property.height === 25 &&
          property.type === 'button' &&
          property.color === 'green' ? 
   console.log('Everything is correct!') : console.log('Something is wrong here!');
}

testButton(sendMessageButton);

sendMessageButton.onClick();