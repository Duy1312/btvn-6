import {BaseComponent} from "./BaseComponent.js"

class List extends BaseComponent {
    constructor() {
        super();
        this.state = {
            memes: [{
                    name: 'Naruto',
                    image: 'https://idoltv-website.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/11/18111413/IDOLTV-hinh-anh-anime-naruto-full-hd-644208.jpg',
                    description: 'Hokage',
                    'date-modified': new Date().toLocaleString(),
                },
                {
                    name: 'Naruto and Sasuke',
                    image: 'https://lh3.googleusercontent.com/proxy/Y2lw6enpwLFNq3KCi18dJQHsOy_9EGpIBBkIBvKjzHCKtnsacmf8jKaEvPC3u4tjZkXJqlAiRG5IaPQ-l-QSWa7R7B7-JWgxH0CacrIaxF8',
                    description: 'Đôi bạn cùng tiến',
                    'date-modified': new Date().toLocaleString(),
                },
                {
                    name: 'Sakura',
                    image: 'https://3.bp.blogspot.com/-afETKWPPpm0/WG-p0p8FpAI/AAAAAAAAkI4/HisfrO5rJiQ80x38zAJwoa5L2AshBogLQCLcB/s640/sakura-naruto-wallpaper-2.jpg',
                    description: 'chị tôi',
                    'date-modified': new Date().toLocaleString(),
                },

            ]
        }
    }
    render() {
        let html = ''
        let tmp = this.state.memes
        for (let i = 0; i < tmp.length; i += 3) {
            html += `<tr>`
            for (let j = i; j < i + 3; j++) {
                if (tmp[j]) {
                    html += `
                    <td>
                    <meme-container name="${tmp[j].name}" image="${tmp[j]["image"]}" description="${tmp[j].description}" date-modified="${tmp[j]["date-modified"]}"></meme-container>
                    </td>
             `;
                } else {
                    break
                }

            }
            html += `</tr>`
        }


        this._shadowRoot.innerHTML = `
        <link rel="stylesheet" type="text/css" href="./memeList.css">
        <form id="adding">
            <input type="text" name="name" placeholder="Name"><br>
            <input type="text" name="image" placeholder="Source"><br>
            <input type="text" name="description" placeholder="Description"><br>
            <input type="datetime-local" name="dateModified" placeholder="Date modified"><br>
            <button>Add</button>
        </form>
        <div class="list">
            <table>
                <tr>
                ${html}
                </tr>
            </table>
       </div>`;


        this.$formAdd = this._shadowRoot.getElementById('adding');
        this.$formAdd.onsubmit = (event) => {
            event.preventDefault();
            let newMeme = {
                name: this.$formAdd.name.value,
                image: this.$formAdd.image.value,
                description: this.$formAdd.description.value,
                "date-modified": this.$formAdd.dateModified.value
            };
            this.state.memes.push(newMeme);
            this.render();
            this.componentDidUpdate();
        }
    }

}
window.customElements.define("list-container", List);