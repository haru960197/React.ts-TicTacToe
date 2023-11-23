# 概要

TypeScriptでReactを用いてウェブアプリケーションを開発したことがなかったので、練習として作成。

以下のサイトを参考にしています。
[Reactの公式チュートリアル](https://ja.react.dev/learn/tutorial-tic-tac-toe)
[React公式チュートリアルをTypeScriptで（Hooks導入以後）](https://zenn.dev/roiban/articles/473f9cbf2b793a#game%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)

# 技術的学び

## テンプレートの作成

`npx create-react-app ディレクトリ名 --template typescript`

## propsの扱い方

```
type SquareProps = {
    value: SquareState;
    onClick: () => void;
}

export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

/* propsを渡す側 */
<Square value={value} onClick={handleClick} />
```
このように、propsの型を宣言するのが基本（らしい）。
そして、渡す側ではオブジェクト型とかは気にせず普通に個別で渡せる。
（つまり、`props={{value= ...}}`などと記述する必要はない）

## useStateの使い方

```
const [state, setState] = useState<データ型>(initialState);
```
また、複数の状態変数を一つのオブジェクトにまとめるほうが良い。
なぜなら、一つずつだと、ChromeのReactの開発者ツール上で変数名が表示されず、一様にただStateとして扱われてしまい、見分けがつかないから。
オブジェクトで宣言することで、キーで見分けがつくようになる。

***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
