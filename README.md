<p align="center">
<img src="assets/pos-malaysia.png" width="250" alt="dev-to-js">
</p>
<h1 align="center">
pos laju API
</h1>
<p align="center">
A tiny, universal client for the Poslaju API written in Typescript.
</p>

<div> 
<a href="https://www.npmjs.com/package/dev-to-js"><img src="https://img.shields.io/npm/v/dev-to-js" alt="dev-to-js"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/dev-to-js@0.1.1/dist/index.js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny <1KB size gzip
- Works in Node.js and in Browser
- Built-in Typescript support

## 🔧 Installation

```bash
npm i poslaju
yarn add poslaju
pnpm i poslaju
```

## 🌐 Usage

Import `poslaju` module in your project and initialize it with your 

```js
import Poslaju from 'poslaju'

const PoslajuClient = new Poslaju({  })

PoslajuClient.getConnote().then((data) => {
    console.log(data)
})

PoslajuClient.getAuthToken().then((data) => {
    console.log(data)
})
```




