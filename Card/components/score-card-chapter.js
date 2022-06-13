
class scoreCardChapter extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        console.log('constructor');
    }
    static get observedAttributes() {
        return ['img', 'title', 'label', 'description',
            'chapter',];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'img') { this.img = newValue }
        if (name === 'title') { this.title = newValue }
        if (name === 'description') { this.description = newValue }
        if (name === 'chapter') { this.chapter = newValue }
        if (name === 'label') { this.label = newValue }

    }

    getTemplate() {
        const template = document.createElement('template')

        template.innerHTML = `
            <section class="container">
            <div class="img-container">
                <img src="${this.img}" alt='image'/>
                <div class="label"> <span>${this.label}</span> </div>
                <button class="button-save">add +</button>
                ${this.havechapter(this.chapter)}
            </div>
            <div class="details">
                    <h3> ${this.title} </h3>
                    <p> ${this.description} </p>
            </div>
    </section>
            ${this.getStyles()}
        `
        return template
    }
    havechapter(chapter) {
        return  typeof chapter === 'string'? `<div class="chapter"> chapter</div>`: `</span class="chapterFalse"><span>`
    }
    getStyles() {
        return `
          <style>
          :host {
            width:360px;
            max-width: 361px;
            display: inline-flex;
            margin: 0 auto;
            box-shadow: 1px;
            background: white;
            margin-left:20px;
            border-radius: 3px;
            box-shadow: 0px 0px 8px;
          }
          main {
            max-width: 100%;
          }
          .img-container {
            position: relative;
          }
          .img-container .label{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 16px;
            gap: 10px;
            background: #006EB7;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
            position: absolute;
            top: 30px;
            left:-15px;
            width: 76px;
            color: white;
            text-transform: uppercase;
            justify-content: flex-end;
            }
            .img-container .button-save {
                position: absolute;
                top: 0px;
                right: 0px;
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 4px 12px;
                gap: 6px;
                background: rgba(255, 255, 255, 0.75);
                border-width: 0px 0px 1px 1px;
                border-style: solid;
                border-color: #006EB7;
                border-radius: 0px 0px 0px 10px;
            }
            .img-container .chapter {
                background: blue;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 10px 155px 10px 10px;
                gap: 10px;
                width: -webkit-fill-available;
                position: absolute;
                bottom: 0;
                background: #6A9F42;
                color: white;
                text-transform: uppercase;
            }
            .img-container .chapterFalse {
                display:none
            }
            .details {
                padding: 1rem;
            }
            .details  h3 {
            width: 327.55px;
            height: 54px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 27px;
            display: flex;
            align-items: center;
            color: #000000;
            }
            .details p {

            width: 309px;
            height: 66px;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            display: flex;
            align-items: center;
            color: #464648;
            }
            
        img {
            width: 100%
        }
          @media (max-width: 1080px) {
              
          }
          </style>
        `;
    }
    render() {
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()

    }
}

customElements.define('score-card-chapter', scoreCardChapter)