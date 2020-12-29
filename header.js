class Header extends HTMLElement {
	static get observedAttributes() {
		return ['c', 'l'];
	}

	constructor() {
		super();
	}

	attributeChangedCallback() {
		// 커스텀 엘리먼트의 어트리뷰트가 추가, 제거 또는 변경되었을 때 호출됨
		console.log('attributeChangedCallback');
	}

	adoptedCallback() {
		// 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출됨
		console.log('adoptedCallback');
	}

	disconnectedCallback() {
		// 커스텀 엘리먼트가 다큐먼트의 DOM에서 연결이 해제되었을 때 호출됨.
		console.log('disconnectedCallback');
	}

	connectedCallback() {
		// 커스텀 엘리먼트가 처음으로 다큐먼트의 DOM에 연결되었을 때 호출됨.
		console.log('connectedCallback');

		const headerTemplate = document.createElement('template');
		headerTemplate.innerHTML = `
				<style>
				    .header{
				        text-align: center;
				    }
				    h1{
				        color: blue;
				    }
				</style>
				
				<div class="header">
				    <h1> Header - My First Blog on Web Component </h1>
				</div>
				`
		// 타입은 아래와 같이 2가지로 정의된다.
		// type ShadowRootMode = "closed" | "open";
		// closed로 설정하면 외부에서 접근할 수 없다.
		const shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(headerTemplate.content);
	}
}

customElements.define('header-component',Header)


