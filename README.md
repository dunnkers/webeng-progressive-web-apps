# ⚡️ Progressive Web Apps ⚡️
> Web Engineering 2018-2019

Small demonstration of making a webapp progressive along with the presentation. Shows a webpage which is slown down by inefficiently compressed images and non-asynchronous calculation of PI. Shows how both can be fixed in different branches.

![Webpage example](webpage-example.png)

## Run

App can be started by running:

```shell
yarn start
```

Should open a browser window at `localhost:3000` ✌🏻

## Structure

Open different branches to see different features implemented.

Branch `webp`: switches to using `.webp` images

Branch `pi`: shows how we can use a `WebWorker` in order to compute PI on a separate background thread instead - unblocking the rendering process.

## About

By Jeroen Overschie.

![https://www.rug.nl/_definition/shared/images/logo--en.svg](https://www.rug.nl/_definition/shared/images/logo--en.svg)
