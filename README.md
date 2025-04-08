# Ray.so API

[![version](https://badgen.net/npm/v/rayso)](https://npmjs.com/package/rayso)
[![downloads](https://badgen.net/npm/dm/rayso)](https://www.npmjs.com/package/rayso)
[![author on telegram](https://img.shields.io/badge/Author%20on%20-Telegram-blue)](https://t.me/akashrchandran)

[![logotype](https://i.ibb.co/vz8DtqL/rayso-api-preview.png)](https://npmjs.com/package/rayso)

This is unofficial NodeJs (JavaScript) API for [ray.so](https://ray.so) that turns your code into beautiful images. Choose from a range of syntax colors, hide or show the background, and toggle between a dark and light window.

> [!NOTE]
> This is a fork of the project [rayso-api](https://github.com/s0ftik3/rayso-api/) developed by [s0ftik3](https://github.com/s0ftik3/), which is no longer maintained. I have updated the project to work with the latest version of the ray.so.

## Navigation

-   [Installing](#installing)
-   [Usage](#usage)
-   [Parameters](#parameters)
-   [Examples](#examples)
    -   [Default](#default-output)
    -   [Custom](#custom-parameters)
    -   [No Background](#output-without-background)
-   [Themes](#themes)
    -   [Candy](#candy)
    -   [Crimson](#crimson)
    -   [Falcon](#falcon)
    -   [Meadow](#meadow)
    -   [Midnight](#midnight)
    -   [Raindrop](#raindrop)
    -   [Sunset](#sunset)
-   [Credits](#credits)

## Installing

```bash
$ npm i rayso
```

## Usage

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({
    // parameters, if you want to customize the output
    // you'll find detailed info about parameters below
})

raySo
    .cook(`console.log('Hello, World!');`)
    .then(response => {
        // response is image buffer
    })
    .catch(err => {
        console.error(err)
    })
```

```javascript
import RaySo from 'rayso'
const raySo = new RaySo()
```

## Parameters

| Parameter          | Default value      | Type             | Description                                                                                                                                    |
|--------------------|--------------------|------------------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `width`            | `"" (auto-sized)`  | String or Number | Sets the image width in pixels. Accepts numbers (e.g., `700`) or strings with digits (e.g., `"700"`). Value must be between 520 and 920. Defaults to auto-sizing if omitted or empty. |
| `title `           | `"Untitled-1"`     | String           | The title will be displayed on top of the code box.                                                                                            |
| `theme`            | `"breeze"`         | String           | There are several options of how your box will look like. Available themes: breeze, candy, crimson, falcon, meadow, midnight, raindrop, sunset |
| `background`       | `true`             | Boolean          | If disabled, it will create an image of code box only, without background.                                                                     |
| `darkMode`         | `true`             | Boolean          | If disabled, it will change your theme to its light version.                                                                                   |
| `padding`          | `32`               | String or Number | Distance between borders and code box. Available values: 16, 32, 64 and 128.                                                                   |
| `language`         | `"auto"`           | String           | You better leave it auto :/ However, you can try to pass some language name and if it worked, good for you!                                    |
| `localPreview`     | `false`            | Boolean          | If enabled, it will create example.png image file of the output in the current directory.                                                      |
| `localPreviewPath` | `current directory` | String           | Path to create example files. MacOS, Linux and Windows paths supported.                                                                        |
| `debug`            | `false`            | Boolean          | If enabled, it will show messages in the console during code execution.                                                                        |

## Examples

### Default output

```javascript
import RaySo from 'rayso'
const raySo = new RaySo()
```

[![output](https://i.ibb.co/Vv9rD4H/default.png)](https://npmjs.com/package/rayso)

### Custom parameters

```javascript
import RaySo, {
    CardTheme,
    CardPadding,
    CardProgrammingLanguage,
} from 'rayso'
const raySo = new RaySo({
    width: 750,
    title: 'Custom Title',
    theme: CardTheme.CANDY,
    padding: CardPadding.md,
    language: CardProgrammingLanguage.JS,
    debug: true,
    localPreview: true,
    localPreviewPath: '/Users/akashrchandran/rayso_screenshots',
})
```

[![output](https://i.ibb.co/Px9C24J/custom.png)](https://npmjs.com/package/rayso)

### Output without background

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ background: false })
```

[![output](https://i.ibb.co/qspMB4t/no-Background.png)](https://npmjs.com/package/rayso)

## Themes

These are all the available themes, so far. As soon Ray.So has a new theme, it will appear here. Default theme `breeze` is not listed here, you saw it in the first picture of this README.


### Breeze

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'breeze' })
```

[![breeze](https://i.ibb.co/0mwBr3Z/breeze.png)](https://npmjs.com/package/rayso)


### Mono

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'mono' })
```

[![mono](https://i.ibb.co/tLrHn9M/mono.png)](https://npmjs.com/package/rayso)

### Candy

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'candy' })
```

[![candy](https://i.ibb.co/pQnX6pw/candy.png)](https://npmjs.com/package/rayso)

### Crimson

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'crimson' })
```

[![crimson](https://i.ibb.co/qkYB36S/crimson.png)](https://npmjs.com/package/rayso)

### Falcon

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'falcon' })
```

[![falcon](https://i.ibb.co/w7KdqR5/falcon.png)](https://npmjs.com/package/rayso)

### Meadow

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'meadow' })
```

[![meadow](https://i.ibb.co/xJnMc10/meadow.png)](https://npmjs.com/package/rayso)

### Midnight

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'midnight' })
```

[![midnight](https://i.ibb.co/4jng8Fs/midnight.png)](https://npmjs.com/package/rayso)

### Raindrop

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'raindrop' })
```

[![raindrop](https://i.ibb.co/jbjYcVf/raindrop.png)](https://npmjs.com/package/rayso)

### Sunset

```javascript
import RaySo from 'rayso'
const raySo = new RaySo({ theme: 'sunset' })
```

[![sunset](https://i.ibb.co/Q8rFCVn/sunset.png)](https://npmjs.com/package/rayso)

> [!NOTE]
> There are more themes available, please check [option.js](https://github.com/akashrchandran/rayso/blob/main/src/entities/options.js) file to see the entire list.

## Credits

-   The source is [ray.so](https://ray.so) website.
-  [s0ftik3](https://github.com/s0ftik3/) for the original project.
