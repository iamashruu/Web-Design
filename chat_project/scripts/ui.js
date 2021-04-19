// render chat template to the dom
// cleat the list of chats(when room changed)

class ChatUI {
    constructor(list){
        this.list = list; 
    }

    clear(){
        this.list.innerHTML = '';
    }

    render(data){
        // const when = dateFns.distanceInWordsToNow(
        //     data.created_at.toDate(),
        //     {addSuffix: true}
        // );
        const timer = data.created_at;
        const when = new Date();
        const html = `
            <li class="list-group-item">
                <span class="username">${data.username}</span>
                <span class="message">${data.message}</span>
                <div class="time">${when.toLocaleTimeString(timer)} ${when.toDateString(timer)}</div>
            </li>
        `;
        
        this.list.innerHTML += html;
    }
}